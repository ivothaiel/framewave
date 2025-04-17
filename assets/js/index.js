document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Gallery image hover effect
    const galleryImages = document.querySelectorAll('.galeria-content img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.zIndex = '1';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '0';
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email && isValidEmail(email)) {
                // Here you would typically send the email to your server
                alert('¡Gracias por suscribirte! Te mantendremos informado.');
                emailInput.value = '';
            } else {
                alert('Por favor, ingresa un correo electrónico válido.');
            }
        });
    }

    // View More button functionality
    const viewMoreButton = document.querySelector('.view-more-button');
    if (viewMoreButton) {
        viewMoreButton.addEventListener('click', () => {
            window.location.href = './pages/galeria/galeria.html';
        });
    }

    // CTA buttons functionality
    const ctaButton = document.querySelector('.cta-button');
    const secondaryButton = document.querySelector('.secondary-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.location.href = './pages/contacto/contacto.html';
        });
    }

    if (secondaryButton) {
        secondaryButton.addEventListener('click', () => {
            window.location.href = './pages/galeria/galeria.html';
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should fade in
    document.querySelectorAll('.section-title, .galeria-content img').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease-in-out';
        observer.observe(el);
    });
});
