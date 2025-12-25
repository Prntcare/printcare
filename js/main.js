// HERO SLIDER
let slides=document.querySelectorAll('.slide');let current=0;
function showSlide(index){
  slides.forEach(s=>s.classList.remove('active'));
  slides[index].classList.add('active');
}
setInterval(()=>{current=(current+1)%slides.length;showSlide(current)},5000);

// GALLERY LIGHTBOX
const gallery=document.getElementById('galleryGrid');
let galleryImgs=[];
for(let i=1;i<=10;i++){
  const img=document.createElement('img');
  img.src=`assets/gallery/gallery${i}.jpg`;
  img.loading="lazy";
  img.dataset.index=i-1;
  gallery.appendChild(img);
  galleryImgs.push(img.src);
}

const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
let currentImg=0;
gallery.querySelectorAll('img').forEach(img=>{
  img.onclick=()=>{
    currentImg=parseInt(img.dataset.index);
    lightboxImg.src=galleryImgs[currentImg];
    lightbox.style.display='flex';
  };
});

document.querySelector('.lightbox .close').onclick=()=>lightbox.style.display='none';
document.querySelector('.lightbox .left').onclick=()=>{
  currentImg=(currentImg-1+galleryImgs.length)%galleryImgs.length;
  lightboxImg.src=galleryImgs[currentImg];
};
document.querySelector('.lightbox .right').onclick=()=>{
  currentImg=(currentImg+1)%galleryImgs.length;
  lightboxImg.src=galleryImgs[currentImg];
};

// CONTACT FORM → WHATSAPP
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  const msg=document.getElementById('message').value;
  window.open(`https://wa.me/9779811809093?text=${encodeURIComponent(`Name: ${name}\nMessage: ${msg}`)}`);
});

// HAMBURGER MOBILE NAV
const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');
hamburger.onclick=()=>nav.classList.toggle('active');
