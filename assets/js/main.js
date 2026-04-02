/**
 * TOZ YAPI - Main JavaScript
 * European Style Website Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    Navigation.init();
    HeroSlider.init();
    ScrollEffects.init();
    ContactForm.init();
    SmoothScroll.init();
});

/**
 * Navigation Module
 */
const Navigation = {
    header: null,
    navToggle: null,
    navMenu: null,
    
    init() {
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav');
        
        if (!this.header || !this.navToggle) return;
        
        this.bindEvents();
        this.handleScroll();
    },
    
    bindEvents() {
        // Toggle mobile menu
        this.navToggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu on link click
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Handle scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Close menu on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMenu();
            }
        });
    },
    
    toggleMenu() {
        this.navToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    },
    
    closeMenu() {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
    },
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
};

/**
 * Hero Slider Module
 */
const HeroSlider = {
    slides: [],
    currentSlide: 0,
    interval: null,
    
    init() {
        this.slides = document.querySelectorAll('.hero-slide');
        if (this.slides.length === 0) return;
        
        this.startSlider();
    },
    
    startSlider() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 6000);
    },
    
    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }
};

/**
 * Scroll Effects Module
 */
const ScrollEffects = {
    observer: null,
    
    init() {
        // Check for IntersectionObserver support
        if (!('IntersectionObserver' in window)) return;
        
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe elements
        const animateElements = document.querySelectorAll(
            '.product-card, .blog-card, .feature, .contact-card'
        );
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }
};

// Add animate-in styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

/**
 * Contact Form Module
 */
const ContactForm = {
    form: null,
    
    init() {
        this.form = document.getElementById('contact-form');
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    },
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(data)) return;
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await this.submitForm(data);
            
            // Show success message
            this.showMessage('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.', 'success');
            this.form.reset();
        } catch (error) {
            // Show error message
            this.showMessage('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    },
    
    validateForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Lütfen geçerli bir ad soyad girin.');
        }
        
        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('Lütfen geçerli bir e-posta adresi girin.');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Mesajınız en az 10 karakter olmalıdır.');
        }
        
        if (errors.length > 0) {
            this.showMessage(errors.join('<br>'), 'error');
            return false;
        }
        
        return true;
    },
    
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    async submitForm(data) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
            // In production, replace with actual fetch call:
            // return fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        });
    },
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.innerHTML = message;
        
        // Style the message
        Object.assign(messageEl.style, {
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '0.9375rem',
            animation: 'fadeIn 0.3s ease'
        });
        
        if (type === 'success') {
            messageEl.style.background = 'rgba(16, 185, 129, 0.1)';
            messageEl.style.color = '#059669';
            messageEl.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        } else {
            messageEl.style.background = 'rgba(239, 68, 68, 0.1)';
            messageEl.style.color = '#dc2626';
            messageEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        }
        
        // Insert at the top of the form
        this.form.insertBefore(messageEl, this.form.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
};

/**
 * Smooth Scroll Module
 */
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }
};

/**
 * Analytics Tracking (Google Analytics 4)
 */
const Analytics = {
    trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    },
    
    trackPageView(path) {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'G-XXXXXXXXXX', {
                page_path: path
            });
        }
    }
};

// Export for external use if needed
window.TozYapi = {
    Navigation,
    HeroSlider,
    ScrollEffects,
    ContactForm,
    SmoothScroll,
    Analytics
};
