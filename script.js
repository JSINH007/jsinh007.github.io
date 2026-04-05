const apps = [
    {
        name: "Shop Inventory",
        package: "com.jsinh.shopinventory",
        image: "shop.png", // Change this to your uploaded filename
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

const gallery = document.getElementById('app-gallery');

apps.forEach(app => {
    const playStoreLink = `https://play.google.com/store/apps/details?id=${app.package}`;
    
    const card = `
        <div class="app-card">
            <div class="status-pill">${app.status}</div>
            <img src="${app.image}" alt="${app.name} icon" style="width: 64px; height: 64px; border-radius: 12px; margin-bottom: 15px; object-fit: cover; background: #334155;">
            <h4>${app.name}</h4>
            <p>${app.desc}</p>
            <a href="${playStoreLink}" target="_blank" class="btn">VIEW ON PLAY STORE</a>
        </div>
    `;
    gallery.innerHTML += card;
});
