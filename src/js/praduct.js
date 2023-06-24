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

const url = "https://living-chemical-shampoo.glitch.me/swiper",
    praducts = document.getElementById("praducts"),
    contenier = document.querySelector(".count"),
    urlsweet = "https://grizzly-pastoral-stove.glitch.me/sweets",
    count_hidden = document.querySelector(".count_hidden");

let arr = [];
let color = "";
let toggle = false;

fetch(url)
    .then(r => r.json())
    .then(data => addpraducts(data))
    .catch(error => praducts.innerHTML = `${error}`);

function addpraducts(data) {

    for (let i = 0; i < data.length; ++i) {
        praducts.innerHTML +=
            `
      <div class="swiper_slide_item">
       <div class="img_item"> <img src=${data[i].img}></div>
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
                  <><><><><><><><><><><><><><><><><>
        <button class="card_btn" type="button">$20 | Oreder Now</button>
              <button type="button"><i data-role = ${data[i].id} class="fa-regular fa-heart"></i></button>
          </div>
        `
        document.addEventListener("click", e => {
            toggle = true;
            let id = e.target.dataset.role;
            if (id === data[i].id) {

                let title = data[i].title,
                    img = data[i].img,
                    description = data[i].description,
                    id = data[i].id,
                    hearts = { title, img, description, id };
                if (toggle === true) {
                    color = "green";
                    e.target.parentElement.style.backgroundColor = `${color}`;
                    fetch(urlsweet, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(hearts)
                    }
                    )
                   .catch(error => e.target.innerHTML = `${error}`);

                }
            }

        })
    }
}

fetch(urlsweet)
    .then(r => r.json())
    .then(data => wishlist(data))

function wishlist(data) {
    contenier.innerText = `${data.length}`;
    count_hidden.innerText = `${data.length}`;
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
