<script>
let currentSlide = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
const totalSlides = slides.length;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 5000);
</script>