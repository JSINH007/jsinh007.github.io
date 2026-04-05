const apps = [
    {
        name: "Shop Inventory",
        package: "com.jsinh.shopinventory",
        image: "shop.png",
        desc: "Professional stock management and real-time profit tracking for retail businesses.",
        status: "In Testing"
    },
    {
        name: "SchoolApp",
        package: "com.jsinh.schoolmanagement",
        image: "school.png",
        desc: "A comprehensive management solution for educational institutions.",
        status: "Live"
    },
    {
        name: "Element Masters",
        package: "com.jsinh.elementmasters",
        image: "element.png",
        desc: "Engaging strategy game featuring elemental combat.",
        status: "Live"
    },
    {
        name: "COLORING GAME",
        package: "com.jsinh.coloringgame",
        image: "coloring.png",
        desc: "Creative and relaxing digital coloring experience.",
        status: "Live"
    },
    {
        name: "Square Bird",
        package: "com.jsinh.SquareBird",
        image: "bird.png",
        desc: "Fast-paced arcade challenge testing reflexes.",
        status: "Live"
    }
];

// 1. Generate the App Gallery
const gallery = document.getElementById('app-gallery');
apps.forEach(app => {
    const playStoreLink = `https://play.google.com/store/apps/details?id=${app.package}`;
    const card = `
        <div class="app-card">
            <div class="status-pill">${app.status}</div>
            <img src="${app.image}" alt="${app.name}" style="width: 60px; height: 60px; border-radius: 12px; margin-bottom: 15px;">
            <h4>${app.name}</h4>
            <p>${app.desc}</p>
            <a href="${playStoreLink}" target="_blank" class="btn">VIEW ON PLAY STORE</a>
        </div>
    `;
    gallery.innerHTML += card;
});

// 2. Hero Slider Logic
function startSlider() {
    // 2. Interactive Transition Logic (Manual Click & Scroll)
const slides = document.querySelectorAll('.glass-card img');
let current = 0;
let isMoving = false;

function nextSlide() {
    if (isMoving) return;
    isMoving = true;

    // Current image exits to the left
    slides[current].classList.remove('active');
    slides[current].classList.add('exit');
    
    // Next image enters from the right
    current = (current + 1) % slides.length;
    slides[current].classList.remove('exit');
    slides[current].classList.add('active');

    // Reset exit classes after animation finishes
    setTimeout(() => {
        slides.forEach((s, i) => { if(i !== current) s.classList.remove('exit'); });
        isMoving = false;
    }, 800);
}

// Click to change
document.querySelector('.hero').addEventListener('click', nextSlide);

// Scroll to change (Debounced for better feel)
window.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > 50) { 
        nextSlide();
    }
}, { passive: true });

// 3. Mouse Tilt (Only for Desktop)
if (window.innerWidth > 768) {
    const heroCard = document.querySelector('.glass-card');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 35;
        const y = (window.innerHeight / 2 - e.pageY) / 35;
        if(heroCard) heroCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}
