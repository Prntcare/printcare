// Hero Slider
const slides = document.querySelectorAll('.hero .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide,i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial display
showSlide(currentSlide);
