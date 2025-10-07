// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.mobile-nav-item').forEach(function (item) {
    item.addEventListener('click', function () {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
    });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    if (mobileNav.classList.contains('open')) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
    }
}

// Add scroll functionality to buttons
// Note: In your HTML, the sections for "pricing" and "about" need to exist
document.querySelector('.cta-button').addEventListener('click', () => scrollToSection('pricing'));
document.querySelector('.mobile-cta-button').addEventListener('click', () => scrollToSection('pricing'));
document.querySelector('.btn-primary').addEventListener('click', () => scrollToSection('services'));
document.querySelector('.btn-secondary').addEventListener('click', () => scrollToSection('pricing')); // Assuming this button also goes to pricing or a contact form