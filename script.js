// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Handle dropdowns in mobile view
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Header Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Countdown Timer
function updateCountdown() {
  const conferenceDate = new Date("2025-09-25T00:00:00");
  const now = new Date();
  const diff = conferenceDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Form validation and submission handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate required fields
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");

      let isValid = true;

      // Reset previous error states
      [firstName, lastName, email, phone].forEach((field) => {
        field.classList.remove("error");
      });

      // Validate first name
      if (!firstName.value.trim()) {
        firstName.classList.add("error");
        isValid = false;
      }

      // Validate last name
      if (!lastName.value.trim()) {
        lastName.classList.add("error");
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        email.classList.add("error");
        isValid = false;
      }

      // Validate phone
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(phone.value)) {
        phone.classList.add("error");
        isValid = false;
      }

      if (isValid) {
        // Store form data in localStorage
        const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          institution: document.getElementById("institution").value,
          designation: document.getElementById("designation").value,
          registrationCategory: document.getElementById("registrationCategory")
            .value,
          paperPresentation: document.getElementById("paperPresentation").value,
          accommodation: document.getElementById("accommodation").value,
          dietaryPreferences:
            document.getElementById("dietaryPreferences").value,
          comments: document.getElementById("comments").value,
        };

        localStorage.setItem("registrationData", JSON.stringify(formData));

        // Show success message
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.textContent =
          "Registration successful! We will contact you soon.";
        form.parentNode.insertBefore(successMessage, form.nextSibling);

        // Reset form
        form.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });

    // Remove error styling when user starts typing
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error");
      });
    });
  }
});

// Add smooth scroll behavior for the entire page
document.documentElement.style.scrollBehavior = "smooth";

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Hero Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const heroSlides = document.querySelectorAll(".hero-slide");
  if (heroSlides.length > 0) {
    let currentSlide = 0;
    let isTransitioning = false;

    function showSlide(index) {
      if (isTransitioning) return;

      isTransitioning = true;

      // Remove active class from all slides
      heroSlides.forEach((slide) => slide.classList.remove("active"));

      // Small delay to ensure the opacity transition starts cleanly
      setTimeout(() => {
        // Add active class to current slide
        heroSlides[index].classList.add("active");
      }, 50);

      // Reset transition flag after CSS transition completes (1.5s + buffer)
      setTimeout(() => {
        isTransitioning = false;
      }, 1600);
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize first slide
    showSlide(0);
  }
});
