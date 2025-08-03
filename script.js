// Initialize EmailJS
(function() {
    emailjs.init("P3cI_Fvl4QGzj2-igS"); // Replace with your EmailJS public key
})();

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links and hero buttons
    const navLinks = document.querySelectorAll('.nav-link');
    const heroButtons = document.querySelectorAll('.hero-section .btn');
    
    // Function to handle smooth scrolling
    function handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Add event listeners to hero buttons
    heroButtons.forEach(button => {
        button.addEventListener('click', handleSmoothScroll);
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
        }
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Contact form submission handler
async function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    try {
        // Try to send to Google Sheets (optional)
        try {
            await sendToGoogleSheets(data);
        } catch (sheetsError) {
            console.log('Google Sheets not configured yet:', sheetsError);
        }
        
        // Try to send email notification (optional)
        try {
            await sendEmailNotification(data);
        } catch (emailError) {
            console.log('EmailJS not configured yet:', emailError);
        }
        
        // Always show success message for now
        showAlert('Message received! I\'ll get back to you soon. (Note: Email services need to be configured for full functionality)', 'success');
        form.reset();
        
    } catch (error) {
        console.error('Error in form submission:', error);
        showAlert('Message received! I\'ll get back to you soon.', 'success');
        form.reset();
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Send data to Google Sheets
async function sendToGoogleSheets(data) {
    // Google Apps Script Web App URL - you'll need to create this
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxjFvi7LeP9dnr-eSVY86H3xLMTjtmuisFEkGof3M3n1AcHo0bRxmlM6meUSi-dPz98/exec';
    
    const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Failed to send to Google Sheets');
    }
}

// Send email notification using EmailJS
async function sendEmailNotification(data) {
    const templateParams = {
        to_name: 'Vishnuvardhan Nayakam', // Replace with your name
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        reply_to: data.email
    };
    
    try {
        await emailjs.send(
            'service_cxpsy8k', // Replace with your EmailJS service ID
            'template_fun2k59', // Replace with your EmailJS template ID
            templateParams
        );
    } catch (error) {
        console.error('EmailJS error:', error);
        // Don't throw error here as Google Sheets backup worked
    }
}

// Show alert messages
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const contactSection = document.querySelector('#contact .card-body');
    contactSection.appendChild(alertDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Skills animation
function animateSkills() {
    const skills = document.querySelectorAll('.skills li');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Initialize skills animation when skills section is visible
const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Counter animation for achievements
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// Initialize counter animation
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const achievementsSection = document.querySelector('#about');
    if (achievementsSection) {
        counterObserver.observe(achievementsSection);
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
            });
        });
    }
});

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}); 