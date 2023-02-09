const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav-bar");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

menuButton.onclick = function() {
    navBar.classList.toggle("nav-active");
    openMenu.classList.toggle("occult");
    closeMenu.classList.toggle("show");
};