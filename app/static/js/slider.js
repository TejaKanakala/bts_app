let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = slides.length;
let autoSlideInterval;

// Create dots dynamically
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        changeSlide(i);
        resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
}
sliderContainer.appendChild(dotsContainer);

const dots = document.querySelectorAll('.dot');

// Next & Prev Buttons
document.querySelector('.next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
    resetAutoPlay();
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
    resetAutoPlay();
});

// Change Slide Function
function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto-Play Function
function autoPlay() {
    autoSlideInterval = setInterval(() => {
        changeSlide(currentSlide + 1);
    }, 4000);
}

// Reset Auto-Play when manually clicked
function resetAutoPlay() {
    clearInterval(autoSlideInterval);
    autoPlay();
}

// Pause on hover
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
sliderContainer.addEventListener('mouseleave', () => autoPlay());

// Start auto-play on load
autoPlay();

document.querySelectorAll('.mic').forEach(mic => {
    mic.addEventListener('click', () => {
        const info = mic.nextElementSibling;
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.bts-background span').forEach(span => {
    const randomDeg = Math.floor(Math.random() * 30) - 15; // -15deg to +15deg
    span.style.setProperty('--angle', `${randomDeg}deg`);
});


document.querySelectorAll('.bts-background span').forEach(span => {
    const randomX = Math.floor(Math.random() * 90); // % from left
    const randomY = Math.floor(Math.random() * 90); // % from top
    const randomDeg = Math.floor(Math.random() * 30) - 15; // -15deg to +15deg

    span.style.left = `${randomX}%`;
    span.style.top = `${randomY}%`;
    span.style.setProperty('--angle', `${randomDeg}deg`);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bts-background span').forEach(span => {
        const randomX = Math.floor(Math.random() * 90); // position left %
        const randomY = Math.floor(Math.random() * 90); // position top %
        const randomDeg = Math.floor(Math.random() * 30) - 15; // rotate -15 to +15 deg

        span.style.left = `${randomX}%`;
        span.style.top = `${randomY}%`;
        span.style.setProperty('--angle', `${randomDeg}deg`);
    });
});