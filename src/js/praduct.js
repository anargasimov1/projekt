"use srtict";

// hamburger menu

const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.width = "100%" : menu.style.width = "0";
});

// section

const section_index = document.querySelector(".section_index");

setInterval(()=>{
    section_index.style.scale = "1.05";
},1000);

setInterval(()=>{
    section_index.style.scale = "1";
},2000)


// praducts

const url = "https://living-chemical-shampoo.glitch.me/swiper",
    praducts = document.getElementById("praducts");


fetch(url)
    .then(r => r.json())
    .then(data => addpraducts(data))
    .catch(error => console.error(error));

function addpraducts(data) {
    for (let i = 0; i < data.length; ++i) {
        praducts.innerHTML +=
            `
        <div class="swiper_slide_item">
       <div class="img_item"> <img src=${data[i].img}></div>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
        <button class="card_btn" type="button">$20 | Oreder Now</button>
          </div>
        `
    }
}





// hover context

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
