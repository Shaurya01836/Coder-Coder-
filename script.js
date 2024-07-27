document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

   
    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
