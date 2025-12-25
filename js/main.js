// AOS Init
AOS.init({ duration: 1000, once: true });

// Hero Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);

// Scroll to Section
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
const lightboxImg = document.createElement('img');
const closeBtn = document.createElement('span');
closeBtn.innerHTML = '&times;';
lightbox.appendChild(lightboxImg);
lightbox.appendChild(closeBtn);
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
  img.addEventListener('click', ()=>{
    lightbox.style.display='flex';
    lightboxImg.src = img.src;
  });
});
closeBtn.addEventListener('click', ()=> lightbox.style.display='none');
lightbox.addEventListener('click', e => { if(e.target!==lightboxImg) lightbox.style.display='none'; });

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', ()=> document.body.classList.toggle('dark'));

// Contact Form WhatsApp
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = contactForm.querySelector('input').value;
  const msg = contactForm.querySelector('textarea').value;
  const whatsappNumber = '9779811809093'; // your number
  const url = `https://wa.me/${whatsappNumber}?text=Name:%20${encodeURIComponent(name)}%0AQuery:%20${encodeURIComponent(msg)}`;
  window.open(url,'_blank');
  contactForm.reset();
});
