// Navbar HTML
const navbarHTML = `
<header>
    <nav>
        <a href="index.html" class="logo">
            <img src="assets/logo.svg" alt="Symposium 2025 Logo">
        </a>
        <div class="menu-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <div class="dropdown">
                <a href="#" class="dropdown-toggle">Information <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown-content">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="dates.html">Important Dates</a></li>
                    <li><a href="authors.html">Information for Authors</a></li>
                </ul>
            </div>
            <a href="committee.html">Committee</a>
            <a href="registration.html">Registration</a>
            <a href="venue.html">Venue</a>
            <a href="accommodation.html">Accommodation</a>
            <a href="tourism.html">Tourism</a>
            <a href="contact.html">Contact</a>
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
            <p>Email: symposium2025@iitg.ac.in</p>
        </div>
        <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
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
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Initialize navbar functionality
    initNavbar();
}

// Function to initialize navbar functionality
function initNavbar() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navLinksContainer.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinksContainer.classList.remove('active');
            }
        });
    }

    // Mobile dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Set active class for current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            // If link is in dropdown, add active class to parent dropdown
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('.dropdown-toggle').classList.add('active');
            }
        }
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', loadComponents); 