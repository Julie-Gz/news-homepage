"use strict"
const openMenuBtn = document.querySelector(".hamburger-menu-open-container");
const closeMenuBtn = document.querySelector(".hamburger-menu-close-container");
const menu = document.querySelector(".menu");
const mobileOverlay = document.querySelector(".mobile-overlay");

openMenuBtn.addEventListener("click", () => {
    menu.classList.add("open");
    mobileOverlay.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    mobileOverlay.style.display = "none";
})