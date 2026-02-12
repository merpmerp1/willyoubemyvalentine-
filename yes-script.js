// yes-script.js

// Photo Gallery/Slideshow Navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Envelope Opening Animation
const envelope = document.querySelector('.envelope');
const link = document.querySelector('.google-drive-link');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    link.style.display = 'block'; // Reveal the link
});

// CSS for animations (to be included in your stylesheet)
/*
.envelope {
    transition: transform 0.5s;
}

.envelope.open {
    transform: rotateY(180deg);
}
*/

// HTML structure example (for context)
/*
<div class="envelope">Envelope Click to Open</div>
<div class="google-drive-link" style="display: none;">Your private link: https://drive.google.com/your-private-link</div>
<div class="slideshow-container">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
    <button class="prev">Previous</button>
    <button class="next">Next</button>
</div>
*/
