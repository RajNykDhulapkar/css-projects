console.log("CSS Projects");

const listOfProjects = [
    {
        title: "CSS Card",
        description: "CSS card with animated hover effect.",
        filePath: "./cards/cards-with-hover-animation-mobile-fallback-kevin-powell/index.html",
        imgFilePath: "./images/cards.png",
    },
    {
        title: "Rolling box animated loader",
        description: "CSS Preloader using css animation. Rolling effect using css keyframes.",
        filePath: "./loading/rolling-box-animated-loader/index.html",
        imgFilePath: "./images/box-rolling-loader.png",
    },
    {
        title: "Simple CSS grid Example",
        description:
            "Testimonial Grid made using css grid. Project showcases basic use of css grid",
        filePath: "./grid/learn-css-grid-kevin-powell/index.html",
        imgFilePath: "./images/simple-css-grid.png",
    },
    {
        title: "SVG Text Loading animation",
        description: "CSS keyframes used to animated the stroke ease forwards animated of svg text",
        filePath: "./loading/svg-animated-text-dev-ed/index.html",
        imgFilePath: "./images/svg-animated-text-loader.png",
    },
    {
        title: "Animated Login and Sign Up from",
        description: "Login and Sign Up form with animated slide switch functionality.",
        filePath: "./login-register-forms/Animated-Login-and-Sign-up/index.html",
        imgFilePath: "./images/animated-sliding-login-n-register-form.png",
    },
];

// const windowWidth = document.getElementById("windowWidth");
// windowWidth.innerText = `width: ${window.innerWidth} : height: ${window.innerHeight}`;

// window.addEventListener("resize", () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     windowWidth.innerText = `width: ${width} : height: ${height}`;
// });

const gridContainer = document.getElementById("gridContainer");

listOfProjects.map((item) => {
    const tab = document.createElement("div");
    const title = document.createTextNode(item.title);
    const description = document.createTextNode(item.description);
    tab.setAttribute("onclick", `location.href='${item.filePath}';`);
    tab.setAttribute("class", "grid-item card");
    tab.innerHTML = `
            <div class="card-media">
                <img src="${item.imgFilePath}" alt="" srcset="">
            </div>
            <div class="card-content">
                 <h3>${title.textContent}</h3>
                 <p>${description.textContent}</p>
            </div>
    `;
    gridContainer.appendChild(tab);
});
