// Carousel sliding logic
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageWrapperWidth = document.querySelector('.image-wrapper').offsetWidth + 20; // includes margin
let currentPosition = 0;

nextButton.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - document.querySelector('.carousel-window').offsetWidth;
    currentPosition += imageWrapperWidth * 3;
    if (currentPosition > maxScroll) {
        currentPosition = maxScroll;
    }
    track.style.transform = `translateX(-${currentPosition}px)`;
});

prevButton.addEventListener('click', () => {
    currentPosition -= imageWrapperWidth * 3;
    if (currentPosition < 0) {
        currentPosition = 0;
    }
    track.style.transform = `translateX(-${currentPosition}px)`;
});

// Lightbox click to show full image
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

const images = document.querySelectorAll('.image-wrapper img');
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
const toggle = document.querySelector('.mobile-menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}