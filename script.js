const apps = [
    {
        name: "Shop Inventory",
        desc: "Real-time stock management and profit tracking for retail shop owners.",
        link: "#" // Add Play Store link later
    },
    {
        name: "SchoolApp",
        desc: "Comprehensive management system for educational institutions.",
        link: "#"
    },
    {
        name: "Element Masters",
        desc: "Interactive strategy game involving elemental powers.",
        link: "#"
    }
];

const gallery = document.getElementById('app-gallery');

apps.forEach(app => {
    const card = `
        <div class="app-card">
            <h4>${app.name}</h4>
            <p>${app.desc}</p>
            <a href="${app.link}" style="color: #38bdf8; text-decoration: none; font-size: 0.8rem; font-weight: bold;">VIEW ON PLAY STORE →</a>
        </div>
    `;
    gallery.innerHTML += card;
});