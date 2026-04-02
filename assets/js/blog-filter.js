/**
 * TOZ YAPI - Blog Filter
 * Category filtering functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    BlogFilter.init();
});

const BlogFilter = {
    filterButtons: null,
    blogCards: null,
    
    init() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.blogCards = document.querySelectorAll('.blog-index-card');
        
        if (this.filterButtons.length === 0) return;
        
        this.bindEvents();
    },
    
    bindEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleFilterClick(e));
        });
    },
    
    handleFilterClick(e) {
        const clickedButton = e.currentTarget;
        const category = clickedButton.dataset.category;
        
        // Update active state
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
        
        // Filter cards
        this.filterCards(category);
    },
    
    filterCards(category) {
        this.blogCards.forEach(card => {
            if (category === 'all') {
                this.showCard(card);
            } else {
                const cardCategory = card.dataset.category;
                if (cardCategory === category) {
                    this.showCard(card);
                } else {
                    this.hideCard(card);
                }
            }
        });
    },
    
    showCard(card) {
        card.classList.remove('hide');
        card.classList.add('show');
        setTimeout(() => {
            card.style.display = 'flex';
        }, 0);
    },
    
    hideCard(card) {
        card.classList.remove('show');
        card.classList.add('hide');
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }
};

/**
 * Newsletter Form Handler
 */
const NewsletterForm = {
    form: null,
    
    init() {
        this.form = document.getElementById('newsletter-form');
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    },
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const emailInput = this.form.querySelector('input[type="email"]');
        const email = emailInput.value;
        const submitBtn = this.form.querySelector('button[type="submit"]');
        
        // Validate email
        if (!this.isValidEmail(email)) {
            this.showMessage('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.subscribe(email);
            
            // Show success message
            this.showMessage('Bültenimize başarıyla abone oldunuz!', 'success');
            emailInput.value = '';
        } catch (error) {
            this.showMessage('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    },
    
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    async subscribe(email) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
            // In production, replace with actual fetch call:
            // return fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
        });
    },
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.marginTop = '1rem';
        messageEl.style.padding = '0.75rem';
        messageEl.style.borderRadius = 'var(--radius-md)';
        messageEl.style.fontSize = '0.875rem';
        messageEl.style.animation = 'fadeIn 0.3s ease';
        
        if (type === 'success') {
            messageEl.style.background = 'rgba(16, 185, 129, 0.1)';
            messageEl.style.color = '#059669';
        } else {
            messageEl.style.background = 'rgba(239, 68, 68, 0.1)';
            messageEl.style.color = '#dc2626';
        }
        
        this.form.appendChild(messageEl);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
};

// Initialize newsletter form
NewsletterForm.init();
