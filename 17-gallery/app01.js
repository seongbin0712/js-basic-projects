const nature = [
  {
    img: "./images/nature-1.jpeg",
    title: "nature-1",
    id: 1
  },
  {
    img: "./images/nature-2.jpeg",
    title: "nature-2",
    id: 2
  },
  {
    img: "./images/nature-3.jpeg",
    title: "nature-3",
    id: 3
  },
];

const city = [
  {
    img: "./images/city-1.jpeg",
    title: "city-1",
    id: 1
  },
  {
    img: "./images/city-2.jpeg",
    title: "city-2",
    id: 2
  },
  {
    img: "./images/city-3.jpeg",
    title: "city-3",
    id: 3
  },
  {
    img: "./images/city-4.jpeg",
    title: "city-4",
    id: 4
  },
  {
    img: "./images/city-5.jpeg",
    title: "city-5",
    id: 5
  }
];

const sectionNature = document.querySelector(".nature");
const sectionCity = document.querySelector(".city");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const mainImg = document.querySelector(".main-img");
const modalImg = document.querySelector(".modal-images");

window.addEventListener("DOMContentLoaded", function () {
  images(nature, sectionNature, "img");
  images(city, sectionCity, "img");
});

sectionNature.addEventListener("click", function (e) {
  if (e.target.classList.contains("img")) {
    modal.classList.add("open");
    
    mainImg.src = e.target.src;

    images(nature, modalImg, "modal-img");

    
    modalFunction();
  };
});

sectionCity.addEventListener("click", function (e) {
  if (e.target.classList.contains("img")) {
    modal.classList.add("open");
    
    mainImg.src = e.target.src;
    
    images(city, modalImg, "modal-img");

    modalFunction();
  };
});

function images(data, container, imgClass) {
  const elements = data.map( (img) => {
    return `
      <img src=${img.img}
      class=${imgClass}
      title=${img.title}
      data-id=${img.id}
      alt=${img.title}>
    `
  }).join("");

  

  container.innerHTML = elements;

};

function modalFunction() {
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", function () {
      modal.classList.remove("open");
    });

    modalImg.addEventListener("click", (e) => {
      const selectImg = document.querySelectorAll(".modal-img");

      console.log(selectImg)
      // selectImg.forEach( (img) => {
      //   img.classList.remove("selected");
      // });

      mainImg.src = e.target.src;
      
      e.target.classList.add("selected");
    });
};