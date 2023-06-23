
"use srtict";
// hamburger menu
const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.scale = "1" : menu.style.scale = "0";
});

// hearts

const contenier = document.querySelector(".contenier"),
    url = "https://grizzly-pastoral-stove.glitch.me/sweets";

fetch(url)
    .then(r => r.json())
    .then(data => items(data));

function items(data) {
    for (let i = 0; i < data.length; ++i) {
        contenier.innerHTML +=
            `
        <div class="swiper_slide_item">
        <div class="img_item"> <img src=${data[i].img}></div>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
                  <><><><><><><><><><><><><><><><><>
        <button class="card_btn" type="button">$20 | Oreder Now</button>
              <button type="button"><i data-role = ${data[i].id} class="fa-solid fa-trash"></i> </button>
          </div>
        `
}

}
