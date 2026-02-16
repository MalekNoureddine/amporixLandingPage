// Language switcher functionality
let currentLang = 'fr';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all language content
    document.querySelectorAll('[lang]').forEach(el => {
        el.classList.remove('active-lang');
    });
    
    // Show selected language content
    document.querySelectorAll(`[lang="${lang}"]`).forEach(el => {
        el.classList.add('active-lang');
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth scroll for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});