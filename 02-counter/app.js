let count = 0;

const value = document.querySelector("#value")
const dec = document.querySelector(".decrease")
const re = document.querySelector(".reset")
const inc = document.querySelector(".increase")

dec.addEventListener("click", () => {
  count--;
  text()
  color()
})

inc.addEventListener("click", () => {
  count++;
  text()
  color()
})

re.addEventListener("click", () => {
  count = 0;
  text()
  color()
})

function color() {
  if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "#222"
  }
}

function text() {
  value.textContent = count;
}


// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     // console.log(styles)
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222"
//     }

//     value.textContent = count;
//   })
// })