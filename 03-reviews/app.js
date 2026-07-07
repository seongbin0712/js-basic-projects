// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./images/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./images/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "./images/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "./images/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const review = document.querySelector(".review")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
          
function showPerson(person) {
  review.innerHTML = `
            <div class="img-container">
            <img src="${reviews[person].img}" id="person-img" alt="">
            </div>
            <h4 id="author">${reviews[person].name}</h4>
            <p id="job">${reviews[person].job}</p>
            <p id="info">
            ${reviews[person].text}
            </p>
            
            <!-- prev next buttons -->
            <div class="button-container">
            <button class="prev-btn">
            <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn">
            <i class="fas fa-chevron-right"></i>
            </button>
            </div>
            
            <!-- random button -->
            <button class="random-btn">surprise me</button>
            `;

  const prevbtn = document.querySelector(".prev-btn");
  const nextbtn = document.querySelector(".next-btn");
  const randombtn = document.querySelector(".random-btn");

  nextbtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });

  prevbtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });

  randombtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
};