// retrieve the app container in the document as inside index.html contain <!DOCTYPE html>
const app = document.getElementById("app");

// define routes mapping page names to HTML files using an object
const routes = {
    home: "./pages/home.html",
    about: "./pages/about.html"
    //contact: "pages/contact.html"
};

// function to load a page based on the route, then fetch the HTML content and insert it into the app container
async function loadPage(page) {
    const response = await fetch(routes[page]);
    // the request returns a promise that resolves to a string containing the HTML content of the requested page
    app.innerHTML = await response.text();
}

// listen for hash changes in the URL to handle navigation between pages

// hashchange is a built-in browser event, defined by the web platform which will be triggered whenever the fragment identifier of the URL has changed
// fragment identifier means the part of a URL that comes after the # symbol, it identifies a specific section or state of a web page

// window means its tied to the window tab of the browser
window.addEventListener("hashchange", () => {
    // location is a built-in browser object that represents the current URL of the document
    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
});

// initial load
loadPage("home");
