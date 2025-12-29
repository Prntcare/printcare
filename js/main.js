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
// WhatsApp Order Form
document.getElementById("whatsappForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const n=custName.value;
  const m=custMsg.value;
  const f=orderFile.files[0];
  const text=`Hello Print Care%0AName: ${n}%0AOrder: ${m}%0AFile: ${f?f.name:'Will send in chat'}`;
  window.open(`https://wa.me/9779811809093?text=${text}`,"_blank");
});

// AI Chat
const aiBtn=document.getElementById("aiChatBtn");
const aiBox=document.getElementById("aiChatBox");
aiBtn.onclick=()=>aiBox.style.display=aiBox.style.display==="block"?"none":"block";
function aiSend(msg){
  window.open(`https://wa.me/9779811809093?text=I want ${msg}`,"_blank");
}

// Admin Mode (?admin)
if(location.search.includes("admin")){
  const p=prompt("Admin Password");
  if(p!=="password123"){
    document.body.innerHTML="<h2 style='text-align:center'>Access Denied</h2>";
  }
}
