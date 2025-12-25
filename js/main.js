// ============================
// Hero Slider
// ============================
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove('active');
    if(i===index) slide.classList.add('active');
  });
}

setInterval(()=>{
  currentSlide = (currentSlide+1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// ============================
// Navigation Active Highlight
// ============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(a => a.classList.remove('active'));
  navLinks.forEach(a => {
    if(a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ============================
// Gallery Rendering + Lightbox
// ============================
const galleryContainer = document.querySelector('.gallery');
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');
const closeBtn = document.createElement('span');
lightbox.id = 'lightbox';
closeBtn.id = 'close';
closeBtn.innerHTML = '&times;';
lightbox.appendChild(closeBtn);
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

let galleryImages = ['gallery1.jpg','gallery2.jpg','gallery3.jpg','gallery4.jpg'];

function renderGallery(images){
  galleryContainer.innerHTML = '<h2 style="color:#007bff;">Our Gallery</h2>';
  images.forEach(imgName => {
    const img = document.createElement('img');
    img.src = `assets/gallery/${imgName}`;
    img.alt = imgName;
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
    galleryContainer.appendChild(img);
  });
}
renderGallery(galleryImages);

closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });

// ============================
// Contact Form -> WhatsApp
// ============================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.querySelector('input').value;
  const message = this.querySelector('textarea').value;
  const whatsappURL = `https://wa.me/9779811809093?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
  document.getElementById('successMsg').style.display = 'block';
  this.reset();
});

// ============================
// Dark Mode Toggle
// ============================
const darkToggle = document.getElementById('darkToggle');
if(localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('dark-mode');

darkToggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) localStorage.setItem('darkMode','enabled');
  else localStorage.setItem('darkMode','disabled');
};

// ============================
// Initialize AOS (Animate on Scroll)
// ============================
AOS.init({duration:800, once:true});
