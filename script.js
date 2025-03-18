
AOS.init({
    duration: 1000,
    once: true
});

particlesJS('particles-js', {
    particles: { 
        number: { value: 80 }, 
        color: { value: '#a2d5f2' }, 
        shape: { type: 'circle' }, 
        opacity: { value: 0.5 }, 
        size: { value: 3 }, 
        move: { enable: true, speed: 2 }
    },
    interactivity: { 
        detect_on: 'canvas', 
        events: { 
            onhover: { enable: true, mode: 'repulse' }, 
            onclick: { enable: true, mode: 'push' }
        }
    },
    retina_detect: true
});


document.addEventListener('DOMContentLoaded', function() {
const testimonials = document.querySelectorAll('.testimonial-text');

testimonials.forEach(testimonial => {
    const fullHeight = testimonial.scrollHeight;
    const maxHeight = parseInt(window.getComputedStyle(testimonial).maxHeight);
    
    if (fullHeight > maxHeight) {
        const button = testimonial.nextElementSibling;
        button.style.display = 'block';
        
        button.addEventListener('click', function() {
            if (testimonial.classList.contains('expanded')) {
                testimonial.classList.remove('expanded');
                button.textContent = 'Read More';
            } else {
                testimonial.classList.add('expanded');
                button.textContent = 'Show Less';
            }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
// Read More functionality
const testimonials = document.querySelectorAll('.testimonial-text');
testimonials.forEach(testimonial => {
    const fullHeight = testimonial.scrollHeight;
    const maxHeight = parseInt(window.getComputedStyle(testimonial).maxHeight);
    if (fullHeight > maxHeight) {
        const button = testimonial.nextElementSibling;
        button.style.display = 'block';
        button.addEventListener('click', function() {
            if (testimonial.classList.contains('expanded')) {
                testimonial.classList.remove('expanded');
                button.textContent = 'Read More';
            } else {
                testimonial.classList.add('expanded');
                button.textContent = 'Show Less';
            }
        });
    }
});

// Check number of carousel items and show/hide controls
const carousel = document.querySelector('#testimonialsCarousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');

if (carouselItems.length > 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
} else {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
}
});



document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for subtitle
    const subtitle = document.getElementById('typewriter-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Speed of typing (50ms per character)
        }
    }

    // Start typewriter effect after a slight delay to sync with animation
    setTimeout(typeWriter, 1500); // Starts after 1.5s to follow fade-in
});
