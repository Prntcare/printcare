// GALLERY LOAD
const gallery = document.getElementById("galleryGrid");
for(let i=1;i<=10;i++){
  const img=document.createElement("img");
  img.src=`assets/gallery/gallery${i}.jpg`;
  img.loading="lazy";
  img.onclick=()=>openLightbox(img.src);
  gallery.appendChild(img);
}

// LIGHTBOX
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");

function openLightbox(src){
  lightboxImg.src=src;
  lightbox.style.display="flex";
}
lightbox.onclick=()=>lightbox.style.display="none";

// CONTACT → WHATSAPP
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value;
  const msg=document.getElementById("message").value;
  window.open(`https://wa.me/+9779811809093?text=${encodeURIComponent(
    `Name: ${name}\nMessage: ${msg}`
  )}`);
});
