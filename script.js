const apps = [
    {
        name: "Shop Inventory",
        package: "com.jsinh.shopinventory",
        desc: "Professional stock management and real-time profit tracking for retail businesses.",
        status: "In Testing"
    },
    {
        name: "SchoolApp",
        package: "com.jsinh.schoolmanagement",
        desc: "A comprehensive management solution for educational institutions and administrators.",
        status: "Live"
    },
    {
        name: "Element Masters",
        package: "com.jsinh.elementmasters",
        desc: "Engaging strategy game featuring elemental combat and progression systems.",
        status: "Live"
    },
    {
        name: "COLORING GAME",
        package: "com.jsinh.coloringgame",
        desc: "Creative and relaxing digital coloring experience for all ages.",
        status: "Live"
    },
    {
        name: "Square Bird",
        package: "com.jsinh.SquareBird",
        desc: "Fast-paced arcade challenge testing reflexes and timing.",
        status: "Live"
    }
];

const gallery = document.getElementById('app-gallery');

apps.forEach(app => {
    // Replace '#' with 'https://play.google.com/store/apps/details?id=' + app.package when live
    const playStoreLink = `https://play.google.com/store/apps/details?id=${app.package}`;
    
    const card = `
        <div class="app-card">
            <span style="font-size: 0.7rem; color: #94a3b8; text-transform: uppercase;">${app.status}</span>
            <h4>${app.name}</h4>
            <p>${app.desc}</p>
            <a href="${playStoreLink}" target="_blank" style="color: #38bdf8; text-decoration: none; font-size: 0.8rem; font-weight: bold;">VIEW ON PLAY STORE →</a>
        </div>
    `;
    gallery.innerHTML += card;
});
