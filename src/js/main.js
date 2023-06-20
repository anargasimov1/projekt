"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.width = "100%" : menu.style.width = "0";
});

// swiper (main)

const btn_left = document.getElementById("btn_left"),
    btn_rigth = document.getElementById("btn_rigth"),
    swiper = document.getElementById("swiper_slide"),
    count = swiper.children.length - 3;
    
    let index = 0;

    btn_rigth.addEventListener("click", () => {

        if (index < count) {
            index++;
            swiper.style.transform = `translateX(${365 * -index}px)`
            if (index === count) {
                index = 0
                swiper.style.transform = `translateX(${index}%)`
            }
        };

    })
btn_left.addEventListener("click", () => {

    if (index > 0) {
        index--;
        swiper.style.transform = `translateX(${365 * -index}px)`
    }

})


setInterval(function () {
    if (index < count) {
        index++;
        swiper.style.transform = `translateX(${365 * -index}px)`
        if (index === count) {
            index = 0
            swiper.style.transform = `translateX(${index}%)`
        }
    };
}, 2000);


// hover contents

const img1 = document.querySelector(".img1"),
    img2 = document.querySelector(".img2"),
    img3 = document.querySelector(".img3"),
    img4 = document.querySelector(".img4"),
    icon1 = document.querySelector(".icon1"),
    icon2 = document.querySelector(".icon2"),
    icon3 = document.querySelector(".icon3"),
    icon4 = document.querySelector(".icon4");

img1.addEventListener("mouseover", () => {
    icon1.style.opacity = "1";
    img1.style.opacity = "0.8";
})

img1.addEventListener("mouseout", () => {
    icon1.style.opacity = "0";
    img1.style.opacity = "1";
})

img2.addEventListener("mouseover", () => {
    icon2.style.opacity = "1";
    img2.style.opacity = "0.8";
})

img2.addEventListener("mouseout", () => {
    icon2.style.opacity = "0";
    img2.style.opacity = "1";
})

img3.addEventListener("mouseover", () => {
    icon3.style.opacity = "1";
    img3.style.opacity = "0.8";
})

img3.addEventListener("mouseout", () => {
    icon3.style.opacity = "0";
    img3.style.opacity = "1";
})

img4.addEventListener("mouseover", () => {
    icon4.style.opacity = "1";
    img4.style.opacity = "0.8";
})

img4.addEventListener("mouseout", () => {
    icon4.style.opacity = "0";
    img4.style.opacity = "1";
})   
