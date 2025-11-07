/* ===================================
   ALL PRO DUCT CLEANING - MAIN JS
   Modern, Performance-First JavaScript
   =================================== */

// Utility Functions
const utils = {
  // Debounce function for performance
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle function for scroll events
  throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollToElement(element, offset = 0) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Mobile Menu Handler
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('.header__nav');
    this.isOpen = false;
    
    if (this.toggle && this.nav) {
      this.init();
    }
  }

  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Close menu on window resize (desktop)
    window.addEventListener('resize', utils.debounce(() => {
      if (window.innerWidth >= 1024 && this.isOpen) {
        this.closeMenu();
      }
    }, 250));
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;
    this.toggle.setAttribute('aria-expanded', 'true');
    this.nav.classList.add('mobile-nav-open');
    document.body.style.overflow = 'hidden';
    
    // Focus first menu item for accessibility
    const firstLink = this.nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  closeMenu() {
    this.isOpen = false;
    this.toggle.setAttribute('aria-expanded', 'false');
    this.nav.classList.remove('mobile-nav-open');
    document.body.style.overflow = '';
    this.toggle.focus();
  }
}

// FAQ Accordion Handler
class FAQAccordion {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    if (this.faqItems.length > 0) {
      this.init();
    }
  }

  init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      if (question && answer) {
        question.addEventListener('click', () => this.toggleFAQ(question, answer));
        
        // Keyboard support
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleFAQ(question, answer);
          }
        });
      }
    });
  }

  toggleFAQ(question, answer) {
    const isOpen = question.getAttribute('aria-expanded') === 'true';
    
    if (isOpen) {
      this.closeFAQ(question, answer);
    } else {
      // Close other open FAQs (optional - remove for multiple open)
      this.closeAllFAQs();
      this.openFAQ(question, answer);
    }
  }

  openFAQ(question, answer) {
    question.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }

  closeFAQ(question, answer) {
    question.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
    answer.style.maxHeight = '0';
  }

  closeAllFAQs() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (question && answer) {
        this.closeFAQ(question, answer);
      }
    });
  }
}

// Intersection Observer for animations
class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.animate-on-scroll');
    if (this.elements.length > 0 && 'IntersectionObserver' in window) {
      this.init();
    }
  }

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.elements.forEach(element => {
      this.observer.observe(element);
    });
  }
}

// Scroll to Top Button
class ScrollToTop {
  constructor() {
    this.button = document.querySelector('.scroll-to-top');
    if (!this.button) {
      this.createButton();
    }
    this.init();
  }

  createButton() {
    this.button = document.createElement('button');
    this.button.className = 'scroll-to-top';
    this.button.innerHTML = '↑';
    this.button.setAttribute('aria-label', 'Scroll to top of page');
    this.button.setAttribute('title', 'Scroll to top');
    document.body.appendChild(this.button);
  }

  init() {
    // Show/hide button based on scroll position
    const toggleButton = utils.throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 300) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    }, 100);

    window.addEventListener('scroll', toggleButton);

    // Smooth scroll to top on click
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Lazy Loading for Images
class LazyLoading {
  constructor() {
    this.images = document.querySelectorAll('img[loading="lazy"]');
    if (this.images.length > 0) {
      this.init();
    }
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            this.loadImage(img);
            this.lazyImageObserver.unobserve(img);
          }
        });
      });

      this.images.forEach(img => {
        this.lazyImageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      this.images.forEach(img => this.loadImage(img));
    }
  }

  loadImage(img) {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });

    img.addEventListener('error', () => {
      img.classList.add('error');
    });

    // Trigger loading
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  }
}

// Form Handler with Validation
class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form[data-form]');
    if (this.forms.length > 0) {
      this.init();
    }
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', utils.debounce(() => this.validateField(input), 300));
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const isValid = this.validateForm(form);
    
    if (isValid) {
      this.submitForm(form);
    }
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    this.clearFieldError(field);

    // Required field validation
    if (required && !value) {
      isValid = false;
      errorMessage = 'This field is required.';
    }

    // Email validation
    if (type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }

    // Phone validation
    if (type === 'tel' && value && !this.isValidPhone(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number.';
    }

    // Show error if invalid
    if (!isValid) {
      this.showFieldError(field, errorMessage);
    }

    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  }

  showFieldError(field, message) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'field-error';
      errorElement.setAttribute('role', 'alert');
      field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    field.setAttribute('aria-describedby', errorElement.id || 'error-' + Date.now());
  }

  clearFieldError(field) {
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  async submitForm(form) {
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    submitButton.classList.add('loading');

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Add timestamp and page URL
      data.timestamp = new Date().toISOString();
      data.page_url = window.location.href;
      data.user_agent = navigator.userAgent;

      // Here you would typically send to your form handler
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.showSuccessMessage(form);
      form.reset();
      
      // Track conversion (replace with your analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: form.dataset.form || 'Contact Form'
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.showErrorMessage(form);
    } finally {
      // Restore button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      submitButton.classList.remove('loading');
    }
  }

  showSuccessMessage(form) {
    const message = document.createElement('div');
    message.className = 'form-message success';
    message.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
    message.setAttribute('role', 'alert');
    form.parentNode.insertBefore(message, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => message.remove(), 5000);
  }

  showErrorMessage(form) {
    const message = document.createElement('div');
    message.className = 'form-message error';
    message.textContent = 'Sorry, there was an error sending your message. Please try again or call us directly.';
    message.setAttribute('role', 'alert');
    form.parentNode.insertBefore(message, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => message.remove(), 5000);
  }
}

// Click to Call Handler
class ClickToCall {
  constructor() {
    this.phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    if (this.phoneLinks.length > 0) {
      this.init();
    }
  }

  init() {
    this.phoneLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Track phone click for analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'phone_click', {
            event_category: 'Contact',
            event_label: link.href
          });
        }
        
        // For desktop users, show a message
        if (window.innerWidth > 768 && !this.isMobile()) {
          e.preventDefault();
          this.showPhoneMessage(link);
        }
      });
    });
  }

  isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  showPhoneMessage(link) {
    const phone = link.href.replace('tel:', '');
    const message = `Call us at ${phone}`;
    
    // Create temporary tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'phone-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
      position: absolute;
      background: #1f2937;
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      z-index: 1000;
      pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = link.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 5) + 'px';
    
    setTimeout(() => tooltip.remove(), 2000);
  }
}

// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    if ('performance' in window) {
      this.init();
    }
  }

  init() {
    window.addEventListener('load', () => {
      // Measure Core Web Vitals
      this.measureLCP();
      this.measureFID();
      this.measureCLS();
    });
  }

  measureLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if needed
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lcp', {
            event_category: 'Performance',
            value: Math.round(lastEntry.startTime)
          });
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.log('LCP not supported');
      }
    }
  }

  measureFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'fid', {
              event_category: 'Performance',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('FID not supported');
      }
    }
  }

  measureCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      let clsEntries = [];
      
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += entry.value;
          }
        }
        
        console.log('CLS:', clsValue);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'cls', {
            event_category: 'Performance',
            value: Math.round(clsValue * 1000)
          });
        }
      });
      
      try {
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('CLS not supported');
      }
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  new MobileMenu();
  new FAQAccordion();
  new ScrollAnimations();
  new ScrollToTop();
  new LazyLoading();
  new FormHandler();
  new ClickToCall();
  new PerformanceMonitor();
  
  // Add focus-visible polyfill class to body
  document.body.classList.add('js-focus-visible');
  
  console.log('All Pro Duct Cleaning website initialized successfully!');
});

// Service Worker Registration
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}