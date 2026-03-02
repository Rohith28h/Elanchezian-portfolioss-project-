// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Animation for Skill Bars
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
}, observerOptions);

document.querySelectorAll('.progress').forEach(bar => {
    // Store original width in data attribute and reset to 0 for animation
    const targetWidth = bar.style.width;
    bar.setAttribute('data-width', targetWidth);
    bar.style.width = '0';
    observer.observe(bar);
});