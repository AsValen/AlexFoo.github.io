const app = document.getElementById("app");

const routes = {
    home: "pages/home.html",
    //about: "pages/about.html",
    //contact: "pages/contact.html"
};

async function loadPage(page) {
    const response = await fetch(routes[page]);
    app.innerHTML = await response.text();
}

window.addEventListener("hashchange", () => {
    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});

// initial load
loadPage("home");
