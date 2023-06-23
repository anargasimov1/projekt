
"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.scale = "1" : menu.style.scale = "0";
});
