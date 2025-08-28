// Shared Portfolio JS
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
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    // Smooth scroll for internal navigation links only
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                // Add smooth scrolling functionality here
            }
            // External links will work normally
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
    // Following cursor dot effect
    if (window.cursoreffects && typeof window.cursoreffects.followingDotCursor === 'function') {
        new cursoreffects.followingDotCursor({ color: ["#323232a6"] });
    } else {
        // Fallback: simple dot
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '13px';
        dot.style.height = '13px';
        dot.style.borderRadius = '50%';
        dot.style.background = '#323232a6';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(dot);
        document.addEventListener('mousemove', function(e) {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });
    }
});
