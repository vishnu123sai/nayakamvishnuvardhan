document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const header = document.getElementById('siteHeader');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const printResumeBtn = document.getElementById('printResumeBtn');
    const heroPrintBtn = document.getElementById('heroPrintBtn');
    const contactForm = document.getElementById('contactForm');
    const formAlertContainer = document.getElementById('formAlertContainer');
    const currentYear = document.getElementById('currentYear');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Theme persistence
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(current);
        });
    }

    // Print / Save ATS Resume PDF
    function handlePrintResume() {
        window.print();
    }
    if (printResumeBtn) printResumeBtn.addEventListener('click', handlePrintResume);
    if (heroPrintBtn) heroPrintBtn.addEventListener('click', handlePrintResume);

    // Mobile Navigation Toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Sticky Header Shadow & Active Link Highlight
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 24);
        }

        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const matchingLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (matchingLink) {
                if (scrollPos >= top && scrollPos < top + height) {
                    matchingLink.classList.add('active');
                } else {
                    matchingLink.classList.remove('active');
                }
            }
        });
    }, { passive: true });

    // Core Stack Category Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            skillCards.forEach(card => {
                const categories = (card.getAttribute('data-category') || '').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Contact Form Submission (preserving existing Google Sheets endpoint)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            const formData = new FormData(contactForm);
            const payload = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            try {
                const scriptURL = 'https://script.google.com/macros/s/AKfycbxNSSfOnasWZILm36KGrc3ar9WJ4OiHykImHQ7uvfLDutqrIZtsyARenXJE4H8xYxII/exec';
                await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                showFormAlert('Message received! Thank you for reaching out — I will get back to you soon.', 'success');
                contactForm.reset();
            } catch (err) {
                console.error('Contact form error:', err);
                showFormAlert('Could not send via web form. Please email vishnu123sai@gmail.com directly.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
            }
        });
    }

    function showFormAlert(message, type) {
        if (!formAlertContainer) return;
        formAlertContainer.innerHTML = `<div class="form-alert ${type}">${message}</div>`;
        setTimeout(() => {
            formAlertContainer.innerHTML = '';
        }, 6000);
    }
});
