// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

function toggleMenu() {
    navbar.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
    // Change icon when menu is open/closed
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    }
}

menuToggle.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        document.body.style.overflow = '';
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    });
});

// Close menu when clicking outside (only on mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            document.body.style.overflow = '';
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        }
    }
});

