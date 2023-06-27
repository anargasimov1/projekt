"use srtict";

// hamburger menu

const btn = document.getElementById("btn"),
    menu = document.getElementById("menu");

let modal = false;

btn.addEventListener("click", () => {
    modal = !modal;
    modal === true ? menu.style.scale = "1" : menu.style.scale = "0";
});


// section

const section_index = document.querySelector(".section_index");

setInterval(() => {
    section_index.style.scale = "1.05";
}, 1000);

setInterval(() => {
    section_index.style.scale = "1";
}, 2000)


// praducts

const url = "https://hilarious-rectangular-principle.glitch.me/swiper",
    praducts = document.getElementById("praducts"),
    contenier = document.querySelector(".count"),
    urlsweet = "https://grizzly-pastoral-stove.glitch.me/sweets",
    count_hidden = document.querySelector(".count_hidden"),
    serach = document.getElementById("serach");

let arr = [];
let toggle = false;

fetch(url)
    .then(r => r.json())
    .then(data => addpraducts(data))
    .catch(error => praducts.innerHTML = `${error}`)




function addpraducts(data) {
    praducts.innerHTML = "";
    for (let i = 0; i < data.length; ++i) {
        praducts.innerHTML +=
            `
      <div class="swiper_slide_item">
       <div class="img_item"> <img  src=${data[i].img}></div>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
                  <><><><><><><><><><><><><><><><><>
        <button id="btn3" class="card_btn" type="button">$20 | Oreder Now</button>
              <button data-id = ${data[i].id}
               data-src=${data[i].img}
               data-title=${data[i].title}
               data-about=${data[i].description}
               data-boolien =${localStorage.getItem(data[i].title, toggle)}
               type="button"><i class="fa-regular fa-heart"></i></button>
          </div>
        `
    }
}

document.addEventListener("click", e => {
    let id = e.target.dataset.id
    if (id) {
        let title = e.target.dataset.title,
            img = e.target.dataset.src,
            description = e.target.dataset.about,
            id = e.target.dataset.id,
            hearts = { title, img, description, id, color: "green" };
        let color = localStorage.getItem("color")
        e.target.style.backgroundColor = `${color && "green"}`;
        addstronge(hearts)
    }

})


function addstronge(par) {
    chekstronge();
    arr.push(par)
    localStorage.setItem("wishlist", JSON.stringify(arr));
    lengthsweets();
}

function chekstronge() {
    if (localStorage.getItem("wishlist") === null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("wishlist"))
    }

}

function lengthsweets() {
    if (JSON.parse(localStorage.getItem("wishlist")) === null) {
        count_hidden.innerHTML = 0;
        contenier.innerHTML = 0;
    }
    else {
        count_hidden.innerHTML = JSON.parse(localStorage.getItem("wishlist")).length;
        contenier.innerHTML = JSON.parse(localStorage.getItem("wishlist")).length;
    }
}

lengthsweets()


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
