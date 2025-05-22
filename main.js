// Responsive nav toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });
    }

    // Gallery animation on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });
    galleryItems.forEach(item => galleryObserver.observe(item));

    // Testimonials animation on scroll
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });
    testimonials.forEach(item => testimonialObserver.observe(item));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Video smooth effect (if you add videos)
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', function() {
            this.style.boxShadow = '0 0 0 4px var(--accent)';
            this.style.transition = 'box-shadow 0.4s';
        });
        video.addEventListener('pause', function() {
            this.style.boxShadow = '';
        });
    });
});

// Responsive nav toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });

        // Gallery animation on scroll
        const galleryItems = document.querySelectorAll('.gallery-item');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.2 });
        galleryItems.forEach(item => observer.observe(item));