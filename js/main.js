AOS.init({duration:800, once:true});

// Hero Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(()=> {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add('active');
},4000);

// Dark Mode
document.getElementById('darkToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
});

// Dynamic Gallery from server
const galleryGrid = document.querySelector('.gallery-grid');
fetch('/api/gallery')
  .then(res => res.json())
  .then(images => {
    images.forEach(img => {
      const a = document.createElement('a');
      a.href = `assets/gallery/${img}`;
      a.className = 'gallery-item';
      const image = document.createElement('img');
      image.src = `assets/gallery/${img}`;
      image.loading = 'lazy';
      a.appendChild(image);
      galleryGrid.appendChild(a);
    });
    new SimpleLightbox('.gallery-grid a');
  }).catch(err=>console.error('Gallery load error:', err));

// Contact Form -> WhatsApp
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
contactForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = contactForm.querySelector('input').value;
  const message = contactForm.querySelector('textarea').value;
  const url = `https://wa.me/9779811800000?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
  window.open(url,'_blank');
  successMsg.style.display='block';
  contactForm.reset();
});

