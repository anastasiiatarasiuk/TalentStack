const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".mobile-container");
const menuLinks = document.querySelectorAll(".menu-item-nav");


const toggleMenu = () => {
    menu.classList.toggle("show");
btnMenu.classList.toggle("disables");
btnClose.classList.toggle("show");

};

btnMenu.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        btnClose.classList.remove("show");
        btnMenu.classList.remove("disables");
    
    });
});