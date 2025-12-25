<script>
/* ================= SLIDER ================= */
let currentSlide = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');

if (track && slides.length > 0) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 5000);
}

/* ================= CHAT POPUP ================= */
const chatBtn = document.getElementById('chatBtn');
const chatPopup = document.querySelector('.chat-popup');
const closeChatBtn = document.querySelector('.close-chat');

if (chatBtn && chatPopup) {
    chatBtn.addEventListener('click', () => {
        chatPopup.classList.toggle('show');
    });
}

if (closeChatBtn && chatPopup) {
    closeChatBtn.addEventListener('click', () => {
        chatPopup.classList.remove('show');
    });
}

/* ================= DRAG CHAT (DESKTOP) ================= */
let isDragging = false, offsetX = 0, offsetY = 0;

if (chatPopup) {
    chatPopup.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = chatPopup.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let left = e.clientX - offsetX;
        let top = e.clientY - offsetY;

        left = Math.max(0, Math.min(left, window.innerWidth - chatPopup.offsetWidth));
        top = Math.max(0, Math.min(top, window.innerHeight - chatPopup.offsetHeight));

        chatPopup.style.left = left + 'px';
        chatPopup.style.top = top + 'px';
        chatPopup.style.right = 'auto';
        chatPopup.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

/* ================= DRAG CHAT (MOBILE) ================= */
if (chatPopup) {
    chatPopup.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        const rect = chatPopup.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
    });

    chatPopup.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        let left = touch.clientX - offsetX;
        let top = touch.clientY - offsetY;

        left = Math.max(0, Math.min(left, window.innerWidth - chatPopup.offsetWidth));
        top = Math.max(0, Math.min(top, window.innerHeight - chatPopup.offsetHeight));

        chatPopup.style.left = left + 'px';
        chatPopup.style.top = top + 'px';
        chatPopup.style.right = 'auto';
        chatPopup.style.bottom = 'auto';
    });

    chatPopup.addEventListener('touchend', () => {
        isDragging = false;
    });
}

/* ================= MINI GOOGLE MAP ================= */
let mapInitialized = false;
let map;

const mapBtn = document.getElementById('mapBtn');
const miniMap = document.getElementById('miniMap');

if (mapBtn && miniMap) {
    mapBtn.addEventListener('click', () => {
        miniMap.classList.toggle('show');

        if (!mapInitialized && window.google) {
            map = new google.maps.Map(miniMap, {
                center: { lat: 27.6675, lng: 85.3200 }, // change if needed
                zoom: 16
            });

            new google.maps.Marker({
                position: { lat: 27.6675, lng: 85.3200 },
                map: map,
                title: "Print Care"
            });

            mapInitialized = true;
        }
    });
}
</script>