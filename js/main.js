document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ once:true });

  // Hero Slider
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000);

  // Gallery Render
  const galleryGrid = document.getElementById("galleryGrid");
  for(let i=1;i<=10;i++){
    const img = document.createElement("img");
    img.src = `assets/gallery/gallery${i}.webp`;
    img.alt = `Gallery ${i}`;
    img.loading = "lazy";
    img.classList.add("gallery-img");
    galleryGrid.appendChild(img);

    img.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML = `<img src="${img.src}"><span class="close">&times;</span>`;
      document.body.appendChild(lightbox);
      lightbox.querySelector(".close").addEventListener("click", ()=>lightbox.remove());
    });
  }

  // Contact Form -> WhatsApp
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", e=>{
    e.preventDefault();
    const name = contactForm.querySelector("input").value;
    const msg = contactForm.querySelector("textarea").value;
    window.open(`https://wa.me/977981180?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(msg)}`);
    document.getElementById("successMsg").style.display = "block";
    contactForm.reset();
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
  });
});
