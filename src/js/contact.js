"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.width = "100%" : menu.style.width = "0";
});