/* ===================================
   ALL PRO DUCT CLEANING - COMPONENTS JS
   Interactive Component Handlers
   =================================== */

// Hero Section Enhancements
class HeroSection {
  constructor() {
    this.hero = document.querySelector('.hero');
    this.ctaButtons = document.querySelectorAll('.hero__actions .btn');
    
    if (this.hero) {
      this.init();
    }
  }

  init() {
    // Add scroll indicator
    this.addScrollIndicator();
    
    // Track CTA clicks
    this.ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'hero_cta_click', {
            event_category: 'Hero',
            event_label: buttonText
          });
        }
      });
    });

    // Parallax effect for hero background (subtle)
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      this.addParallaxEffect();
    }
  }

  addScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = `
      <div class="scroll-arrow">
        <span>↓</span>
        <span>Scroll to learn more</span>
      </div>
    `;
    indicator.style.cssText = `
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: var(--color-gray-600);
      animation: bounce 2s infinite;
      cursor: pointer;
    `;

    // Add bounce animation
    if (!document.querySelector('#scroll-animation')) {
      const style = document.createElement('style');
      style.id = 'scroll-animation';
      style.textContent = `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        .scroll-arrow span:first-child { 
          display: block; 
          font-size: 1.5rem; 
          margin-bottom: 0.5rem; 
        }
        .scroll-arrow span:last-child { 
          font-size: 0.875rem; 
          text-transform: uppercase; 
          letter-spacing: 0.1em; 
        }
      `;
      document.head.appendChild(style);
    }

    this.hero.style.position = 'relative';
    this.hero.appendChild(indicator);

    // Click to scroll to next section
    indicator.addEventListener('click', () => {
      const nextSection = this.hero.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  addParallaxEffect() {
    const handleScroll = utils.throttle(() => {
      const scrolled = window.pageYOffset;
      const heroHeight = this.hero.offsetHeight;
      const scrollPercent = scrolled / heroHeight;
      
      if (scrollPercent <= 1) {
        this.hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }
}

// Service Cards Interactive Features
class ServiceCards {
  constructor() {
    this.cards = document.querySelectorAll('.service-card');
    
    if (this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    this.cards.forEach((card, index) => {
      // Add hover effects
      card.addEventListener('mouseenter', () => this.handleCardHover(card));
      card.addEventListener('mouseleave', () => this.handleCardLeave(card));
      
      // Add click tracking
      card.addEventListener('click', () => this.trackCardClick(card));
      
      // Add staggered animation delay
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  handleCardHover(card) {
    // Add subtle tilt effect
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      card.style.transform = 'translateY(-4px) rotateX(5deg) rotateY(5deg)';
    }
    
    // Brighten other cards slightly
    this.cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.style.opacity = '0.8';
      }
    });
  }

  handleCardLeave(card) {
    card.style.transform = '';
    
    // Reset all cards
    this.cards.forEach(otherCard => {
      otherCard.style.opacity = '';
    });
  }

  trackCardClick(card) {
    const serviceName = card.querySelector('.service-card__title')?.textContent;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'service_card_click', {
        event_category: 'Services',
        event_label: serviceName
      });
    }
  }
}

// Reviews Carousel
class ReviewsCarousel {
  constructor() {
    this.carousel = document.querySelector('.reviews-grid');
    this.reviews = document.querySelectorAll('.review-card');
    
    if (this.carousel && this.reviews.length > 3) {
      this.init();
    }
  }

  init() {
    this.currentIndex = 0;
    this.itemsToShow = this.getItemsToShow();
    
    // Create carousel structure
    this.createCarouselControls();
    this.updateCarousel();
    
    // Auto-play
    this.startAutoplay();
    
    // Handle resize
    window.addEventListener('resize', utils.debounce(() => {
      this.itemsToShow = this.getItemsToShow();
      this.updateCarousel();
    }, 250));
  }

  getItemsToShow() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  createCarouselControls() {
    // Wrap carousel
    const wrapper = document.createElement('div');
    wrapper.className = 'reviews-carousel-wrapper';
    this.carousel.parentNode.insertBefore(wrapper, this.carousel);
    wrapper.appendChild(this.carousel);

    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    nav.innerHTML = `
      <button class="carousel-btn carousel-prev" aria-label="Previous reviews">‹</button>
      <button class="carousel-btn carousel-next" aria-label="Next reviews">›</button>
    `;
    wrapper.appendChild(nav);

    // Add dots
    const dots = document.createElement('div');
    dots.className = 'carousel-dots';
    const totalSlides = Math.ceil(this.reviews.length / this.itemsToShow);
    
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      dots.appendChild(dot);
    }
    wrapper.appendChild(dots);

    // Add event listeners
    wrapper.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
    wrapper.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());

    // Add styles
    this.addCarouselStyles();
  }

  addCarouselStyles() {
    if (!document.querySelector('#carousel-styles')) {
      const style = document.createElement('style');
      style.id = 'carousel-styles';
      style.textContent = `
        .reviews-carousel-wrapper {
          position: relative;
          overflow: hidden;
        }
        .reviews-grid {
          display: flex;
          transition: transform 0.5s ease;
        }
        .review-card {
          flex: 0 0 calc(100% / var(--items-to-show));
          margin-right: 1.5rem;
        }
        .carousel-nav {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }
        .carousel-btn {
          pointer-events: all;
          background: white;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }
        .carousel-btn:hover {
          background: var(--color-primary);
          color: white;
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .carousel-dot {
          width: 0.75rem;
          height: 0.75rem;
          border: none;
          border-radius: 50%;
          background: var(--color-gray-300);
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .carousel-dot.active {
          background: var(--color-primary);
        }
      `;
      document.head.appendChild(style);
    }
  }

  updateCarousel() {
    const translateX = -(this.currentIndex * (100 / this.itemsToShow));
    this.carousel.style.transform = `translateX(${translateX}%)`;
    this.carousel.style.setProperty('--items-to-show', this.itemsToShow);

    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  nextSlide() {
    const maxIndex = Math.ceil(this.reviews.length / this.itemsToShow) - 1;
    this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
    this.updateCarousel();
    this.resetAutoplay();
  }

  prevSlide() {
    const maxIndex = Math.ceil(this.reviews.length / this.itemsToShow) - 1;
    this.currentIndex = this.currentIndex <= 0 ? maxIndex : this.currentIndex - 1;
    this.updateCarousel();
    this.resetAutoplay();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      if (!document.hidden) {
        this.nextSlide();
      }
    }, 5000);
  }

  resetAutoplay() {
    clearInterval(this.autoplayInterval);
    this.startAutoplay();
  }
}

// Location Cards Enhancement
class LocationCards {
  constructor() {
    this.areaCards = document.querySelectorAll('.area-card');
    
    if (this.areaCards.length > 0) {
      this.init();
    }
  }

  init() {
    this.areaCards.forEach(card => {
      // Add neighborhood link tracking
      const neighborhoodLinks = card.querySelectorAll('.area-card__neighborhoods a');
      neighborhoodLinks.forEach(link => {
        link.addEventListener('click', () => {
          const area = card.querySelector('.area-card__title').textContent;
          const neighborhood = link.textContent;
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'neighborhood_click', {
              event_category: 'Location',
              event_label: `${area} - ${neighborhood}`
            });
          }
        });
      });
      
      // Add hover effects
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
}

// Trust Indicators Animation
class TrustIndicators {
  constructor() {
    this.indicators = document.querySelectorAll('.trust-item');
    
    if (this.indicators.length > 0) {
      this.init();
    }
  }

  init() {
    // Count up animation for numbers
    this.animateNumbers();
    
    // Stagger animation for trust items
    this.indicators.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
    });
  }

  animateNumbers() {
    const ratingElements = document.querySelectorAll('.rating-text');
    
    ratingElements.forEach(element => {
      const text = element.textContent;
      const match = text.match(/(\d+\.?\d*)/);
      
      if (match) {
        const finalValue = parseFloat(match[1]);
        let currentValue = 0;
        const increment = finalValue / 50;
        const suffix = text.replace(match[1], '');
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            element.textContent = finalValue + suffix;
            clearInterval(counter);
          } else {
            element.textContent = currentValue.toFixed(1) + suffix;
          }
        }, 30);
      }
    });
  }
}

// Enhanced Quote Form
class QuoteForm {
  constructor() {
    this.quoteButtons = document.querySelectorAll('a[href="/quote/"], a[href*="quote"]');
    
    if (this.quoteButtons.length > 0) {
      this.init();
    }
  }

  init() {
    // Create modal quote form
    this.createQuoteModal();
    
    // Add event listeners to quote buttons
    this.quoteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.openQuoteModal();
        
        // Track quote request
        if (typeof gtag !== 'undefined') {
          gtag('event', 'quote_request_started', {
            event_category: 'Lead Generation',
            event_label: button.textContent.trim()
          });
        }
      });
    });
  }

  createQuoteModal() {
    const modal = document.createElement('div');
    modal.className = 'quote-modal';
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close quote form">&times;</button>
        <div class="modal-header">
          <h2>Get Your Free Quote</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours with a personalized quote.</p>
        </div>
        <form class="quote-form" data-form="quote">
          <div class="form-grid">
            <div class="form-group">
              <label for="quote-name">Full Name *</label>
              <input type="text" id="quote-name" name="name" required>
            </div>
            <div class="form-group">
              <label for="quote-email">Email Address *</label>
              <input type="email" id="quote-email" name="email" required>
            </div>
            <div class="form-group">
              <label for="quote-phone">Phone Number *</label>
              <input type="tel" id="quote-phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="quote-address">Property Address</label>
              <input type="text" id="quote-address" name="address">
            </div>
            <div class="form-group">
              <label for="quote-service">Service Needed *</label>
              <select id="quote-service" name="service" required>
                <option value="">Select a service...</option>
                <option value="air-duct-cleaning">Air Duct Cleaning</option>
                <option value="dryer-vent-cleaning">Dryer Vent Cleaning</option>
                <option value="hvac-maintenance">HVAC Maintenance</option>
                <option value="multiple-services">Multiple Services</option>
              </select>
            </div>
            <div class="form-group">
              <label for="quote-home-size">Home Size (sq ft)</label>
              <select id="quote-home-size" name="home_size">
                <option value="">Select size...</option>
                <option value="under-1500">Under 1,500 sq ft</option>
                <option value="1500-2500">1,500 - 2,500 sq ft</option>
                <option value="2500-3500">2,500 - 3,500 sq ft</option>
                <option value="3500-5000">3,500 - 5,000 sq ft</option>
                <option value="over-5000">Over 5,000 sq ft</option>
              </select>
            </div>
            <div class="form-group form-group-full">
              <label for="quote-message">Additional Details</label>
              <textarea id="quote-message" name="message" rows="4" placeholder="Tell us about your specific needs, when you'd like service, or any questions you have..."></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn--primary btn--large btn--full">
              Get My Free Quote
            </button>
          </div>
          <p class="form-disclaimer">
            By submitting this form, you agree to receive communications from All Pro Duct Cleaning. 
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    `;

    // Add modal styles
    this.addModalStyles();
    
    document.body.appendChild(modal);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => this.closeQuoteModal());
    modal.querySelector('.modal-backdrop').addEventListener('click', () => this.closeQuoteModal());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        this.closeQuoteModal();
      }
    });

    this.modal = modal;
  }

  addModalStyles() {
    if (!document.querySelector('#quote-modal-styles')) {
      const style = document.createElement('style');
      style.id = 'quote-modal-styles';
      style.textContent = `
        .quote-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: var(--z-index-modal);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .quote-modal.open {
          opacity: 1;
          visibility: visible;
        }
        .modal-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
        }
        .modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: var(--radius-xl);
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-2xl);
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--color-gray-500);
          line-height: 1;
        }
        .modal-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        .modal-header h2 {
          color: var(--color-gray-900);
          margin-bottom: 1rem;
        }
        .modal-header p {
          color: var(--color-gray-600);
        }
        .form-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        .form-group-full {
          grid-column: 1 / -1;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: var(--font-weight-medium);
          color: var(--color-gray-700);
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid var(--color-gray-200);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
          border-color: var(--color-error);
        }
        .field-error {
          color: var(--color-error);
          font-size: var(--font-size-sm);
          margin-top: 0.25rem;
        }
        .form-actions {
          margin-top: 2rem;
        }
        .form-disclaimer {
          margin-top: 1rem;
          font-size: var(--font-size-sm);
          color: var(--color-gray-500);
          text-align: center;
        }
        .form-message {
          padding: 1rem;
          border-radius: var(--radius-lg);
          margin-bottom: 1rem;
          text-align: center;
          font-weight: var(--font-weight-medium);
        }
        .form-message.success {
          background: var(--color-success);
          color: white;
        }
        .form-message.error {
          background: var(--color-error);
          color: white;
        }
      `;
      document.head.appendChild(style);
    }
  }

  openQuoteModal() {
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    const firstInput = this.modal.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 300);
    }
  }

  closeQuoteModal() {
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HeroSection();
  new ServiceCards();
  new ReviewsCarousel();
  new LocationCards();
  new TrustIndicators();
  new QuoteForm();
});