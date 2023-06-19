"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.display = "flex" : menu.style.display = "none";
});

// swiper (main)

const btn_left = document.getElementById("btn_left"),
    btn_rigth = document.getElementById("btn_rigth"),
    swiper = document.getElementById("swiper_slide");
let index = 0;

btn_rigth.addEventListener("click", () => {
    index++;
    if (index < swiper.children.length - 1)
      {  swiper.style.transform = `translateX(${20 * -index}%)`};

})
btn_left.addEventListener("click", () => {
    index--;
    if (index > 0)
      {  swiper.style.transform = `translateX(${20 * -index}%)`}

})
