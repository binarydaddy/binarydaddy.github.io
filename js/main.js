// DOM Elements
const header = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const paperCards = document.querySelectorAll('.paper-card');
const loadMoreBtn = document.querySelector('.load-more .btn');
const yearElement = document.getElementById('year');
const nav = document.querySelector('nav ul');

// Set current year in footer
yearElement.textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('mobile-menu-open');
    });
});

// Paper filtering
if (filterBtns.length > 0 && paperCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Show/hide cards based on filter
            paperCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Load more papers functionality
// This is a placeholder. In a real implementation, you might load papers from an API or CMS
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // For demo purposes, you could clone existing papers and append them
        // In a real app, you would fetch more papers from a database or file system
        alert('In a real implementation, this would load more papers from your collection.');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Animation on scroll
// This is a simple implementation. For more advanced animations,
// consider using libraries like AOS (Animate On Scroll)
const fadeInElements = document.querySelectorAll('.project-card, .paper-card, .about-content');

const fadeInOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

// Initialize the elements for animation
fadeInElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeInObserver.observe(el);
}); 