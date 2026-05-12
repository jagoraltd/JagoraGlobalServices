// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle between burger and close icon
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.style.overflow = 'auto';
    }
  });
}

// Close mobile menu when clicking a link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto';
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form validation (for contact page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple mock submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}
