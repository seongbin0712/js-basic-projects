const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const list = document.querySelector(".grocery-list")
const container = document.querySelector(".grocery-container")
const submitBtn = document.querySelector(".submit-btn")
const clearBtn = document.querySelector(".clear-btn")

let editElement
let editFlag = false
let editID = ""

// submit
form.addEventListener("submit", addItem)

// clear item
clearBtn.addEventListener("click", clearItems)

// display onload
window.addEventListener("DOMContentLoaded", setupItems)

// ----- function --------

// add items
function addItem(e) {
  e.preventDefault()
  const id = new Date().getTime().toString()
  const value = grocery.value

  if (value !== "" && !editFlag) {
    createListItem(id, value)
  
    container.classList.add("show-container")

    setBackToDefault()
  
    addToLocalStorage(id, value)
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value

    // edit localStorage
    editLocalStorage(editID, value)
    // set back to default
    setBackToDefault()
  }
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item")
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
  }
  container.classList.remove("show-container")
  setBackToDefault()
  localStorage.removeItem("item")
}

// ----- local storage -------
function getLocalStorage() {
  return localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : []
}

function addToLocalStorage(id, value) {
  const grocery = { id, value }
  let items = getLocalStorage()
  items.push(grocery)
  localStorage.setItem("item", JSON.stringify(items))
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage()
  
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item
    }
  })
  
  localStorage.setItem("item", JSON.stringify(items))
}

// edit storage
function editLocalStorage(id, value) {
  let items = getLocalStorage()

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem("item", JSON.stringify(items))
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id

  list.removeChild(element)

  if (list.children.length === 0) {
    container.classList.remove("show-container")
  }

  removeFromLocalStorage(id)
}

// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling
  // set from value
  grocery.value = editElement.innerHTML
  editFlag = true
  editID = element.dataset.id
  //
  submitBtn.textContent = "edit"
}

// set back to default
function setBackToDefault() {
  grocery.value = ""
  editFlag = false
  editID = ""
  submitBtn.textContent = "submit"
}

// ----- setup items -------

function setupItems() {
  let items = getLocalStorage()

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value)
    })
    container.classList.add("show-container")
  }
}

function createListItem(id, value) {
  const element = document.createElement("article")
  let attr = document.createAttribute("data-id")
  attr.value = id
  element.setAttributeNode(attr)
  element.classList.add("grocery-item")
  element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
              `

  const editBtn = element.querySelector(".edit-btn")
  editBtn.addEventListener("click", editItem)
  const deleteBtn = element.querySelector(".delete-btn")
  deleteBtn.addEventListener("click", deleteItem)
  
  list.appendChild(element)
}