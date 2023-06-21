"use srtict";

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
        <img src=${data[i].img}>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
        <button type="button">$20 | Oreder Now</button>
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
