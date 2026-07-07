let filterdProducts = [...products];

const productsContainer = document.querySelector('.products-container');

function displayProducts () {
  if (filterdProducts < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filterdProducts.map( (product) => {
    const { id, name, image, price } = product;
    return `
      <article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
          <h5 class="product-name">${name}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>
    `
  }).join('');
};

displayProducts();

const companiesBtns = document.querySelector('.companies');

function displayButtons () {
  const btns = [
    'all',
    ...new Set(products.map((product) => product.company))
  ];
  // console.log(btns)
  companiesBtns.innerHTML = btns.map((company) => {
    return `
      <button class="company-btn" data-id="${company}">${company}</button>
    `
  }).join('');
};

displayButtons();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filterdProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

companiesBtns.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filterdProducts = [...products];
    } else {
      filterdProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});