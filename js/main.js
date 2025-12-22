// Hero Slider
let slideIndex=0;
const slides=document.querySelectorAll('.hero-slider img');
function showSlides(){
  slides.forEach(s=>s.style.display='none');
  slideIndex++;
  if(slideIndex>slides.length)slideIndex=1;
  if(slides[slideIndex-1]) slides[slideIndex-1].style.display='block';
  setTimeout(showSlides,4000);
}
showSlides();

// Sample gallery images
let galleryImages = [
  'images/gallery1.jpg',
  'images/gallery2.jpg',
  'images/gallery3.jpg'
];

// Render Gallery
function renderGallery(){
  const container = document.getElementById('gallery-container') || document.getElementById('gallery-page-container');
  if(!container) return;
  container.innerHTML = '';
  galleryImages.forEach((src,i)=>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Gallery ${i+1}`;
    img.draggable = true;
    img.addEventListener('dragstart',dragStart);
    img.addEventListener('dragover',dragOver);
    img.addEventListener('drop',dropImage);
    container.appendChild(img);
  });
}
renderGallery();

// Admin Toggle
document.getElementById('admin-toggle').addEventListener('click',()=>{
  const panel = document.getElementById('admin-panel');
  panel.style.display = panel.style.display==='none'?'block':'none';
});

// Admin Login
document.getElementById('login-btn')?.addEventListener('click',()=>{
  const password = document.getElementById('admin-password').value;
  if(password==='password123'){ alert('Admin Logged In'); }
  else alert('Wrong Password');
});

// Upload Logo
document.getElementById('logo-upload-btn')?.addEventListener('click',()=>{
  const file = document.getElementById('upload-logo').files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>document.getElementById('logo').src = e.target.result;
  reader.readAsDataURL(file);
});

// Upload Gallery Images
document.getElementById('gallery-upload-btn')?.addEventListener('click',()=>{
  const files = document.getElementById('upload-gallery').files;
  if(!files.length) return;
  Array.from(files).forEach(f=>{
    const reader = new FileReader();
    reader.onload = e=>{ galleryImages.push(e.target.result); renderGallery(); }
    reader.readAsDataURL(f);
  });
});

// Drag & Drop Reorder
let dragSrcIndex = null;
function dragStart(e){ dragSrcIndex = [...e.target.parentNode.children].indexOf(e.target);}
function dragOver(e){ e.preventDefault();}
function dropImage(e){
  e.preventDefault();
  const targetIndex = [...e.target.parentNode.children].indexOf(e.target);
  const temp = galleryImages[dragSrcIndex];
  galleryImages[dragSrcIndex] = galleryImages[targetIndex];
  galleryImages[targetIndex] = temp;
  renderGallery();
}
