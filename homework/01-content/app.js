const btnContainer = document.querySelectorAll(".btn-container")
const form = document.querySelector(".content-form")
const box = document.getElementById("content-box")
const content = document.querySelector(".content-center")

let edit = false

// eventListener
window.addEventListener("DOMContentLoaded", btns)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const id = new Date().getTime().toString()
  const value = box.value

  if (e.textContent = "입력") {
    addToLocalStorage(id, value)

    createContent(id, value)
  }
})

content.addEventListener('click', checkOne)

// function
// Btns-event: mode
function btns() {
  btnContainer.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-btn")) {
        addM()
      } else if (e.target.classList.contains("edit-btn")) {
        editM()
      }
    })
  })
}

// add mode
function addM() {
  const element = document.querySelector(".submit-btn")
  element.textContent = "입력"
}

// edit mode
function editM() {
  const element = document.querySelector(".submit-btn")
  element.textContent = "수정"
}

// select one
function checkOne(e) {
  const checkboxes = document.getElementsByName("check-box");

  checkboxes.forEach((cb) => {
    cb.checked = false;
  })

  e.target.checked = true;
}

function createContent(id, value) {
  const element = document.createElement("article")
  let attr = document.createAttribute("data-id")
  attr.value = id
  element.setAttributeNode(attr)
  element.classList.add("content-container")
  element.innerHTML = `
  <input type="checkbox" class="check-box" name="check-box">
  <p class="content">${box.value}</p>
  `

  content.appendChild(element)
}

// setupItems
function setupItems() {
  let items = getLocalStorage()

  if (items.length > 0) {
    items.forEach(function (item) {
      createContent(item.id, item.value)
    })
  }
}

// LocalStorage
function getLocalStorage() {
  return localStorage.getItem("content")
  ? JSON.parse(localStorage.getItem("content"))
  : []
}

function addToLocalStorage(id, value) {
  const content = { id, value }
  let items = getLocalStorage()
  items.push(content)
  localStorage.setItem("content", JSON.stringify(items))
}