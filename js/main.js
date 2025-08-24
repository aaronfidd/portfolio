// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add smooth scrolling functionality here
        });
    });

    // Button interactions
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('skill-button')) {
                e.preventDefault();
                alert('Portfolio section would open here!');
            }
            if (this.classList.contains('cta-final')) {
                e.preventDefault();
                alert('Contact form would open here!');
            }
        });

    });

    // Skill text hover effects
    document.querySelectorAll('.skill-text').forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
