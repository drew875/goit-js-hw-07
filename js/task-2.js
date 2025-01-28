const categ = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const markup = images.map((v) => `<img class="new-images" src="${v.url}" alt="${v.alt}">`)
  .join("");

categ.insertAdjacentHTML("beforeend", markup);
categ.style.display = "flex";
categ.style.flexWrap = "wrap";
categ.style.gap = "10px";
categ.style.height = "auto";
categ.style.width = "100%";

const addedImages = document.querySelectorAll(".new-images");
for (let x of addedImages) {
  x.style.width = "calc(33.333% - 10px)";
  x.style.height = "auto";
};

