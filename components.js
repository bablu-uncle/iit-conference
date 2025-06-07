// Navbar HTML
const navbarHTML = `
<header>
    <nav>
        <a href="index.html" class="logo">
            <img src="assets/logo1.svg" alt="Symposium 2025 Logo">
        </a>
        <div class="menu-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="speakers.html">Speakers</a>
            <a href="authors.html">Author Guidelines</a>
            <a href="registration.html">Registration</a>
            <a href="accommodation.html">Accommodation</a>
            <a href="committee.html">Committee</a>
            <a href="tourism.html">Tourism</a>
            <a href="venue.html">Venue</a>
        </div>
    </nav>
</header>
`;

// Footer HTML
const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h3>Contact Us</h3>
            <p><i class="fas fa-envelope"></i> Email: <a href="mailto:satfs@iitg.ac.in">satfs@iitg.ac.in</a></p>
            <p><i class="fas fa-phone"></i> Phone: <a href="tel:+913612582677">+91 361 2582677</a></p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Symposium on Advances in Thermo-Fluid Sciences. All rights reserved.</p>
    </div>
</footer>
`;

// Function to load components
function loadComponents() {
  // Load navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = navbarHTML;
  }

  // Load footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }

  // Initialize navbar functionality
  initNavbar();
}

// Function to initialize navbar functionality
function initNavbar() {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", function () {
      navLinksContainer.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navLinksContainer.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navLinksContainer.classList.remove("active");
      }
    });
  }

  // Mobile dropdown toggle
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.closest(".dropdown");
        dropdown.classList.toggle("active");
      }
    });
  });

  // Set active class for current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      // If link is in dropdown, add active class to parent dropdown
      const dropdown = link.closest(".dropdown");
      if (dropdown) {
        dropdown.querySelector(".dropdown-toggle").classList.add("active");
      }
    }
  });
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", loadComponents);
