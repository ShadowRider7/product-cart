const loadProducts = () => {
  url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayProducts(data);
      const topRatedProducts = data
        .filter((products) => products.rating.rate >= 4.0)
        .slice(0, 3);
      displayTopRatedProducts(topRatedProducts);
    });
};
const displayProducts = (products) => {
  const cardContainer = document.getElementById("productsContainer");
  if (!cardContainer) return;
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = ` 
       <div class="card bg-base-100 shadow-sm">
          <figure class="bg-blue-100">
            <img
              src="${product.image}"
             class="h-80"
            />
          </figure>
          <div class="m-3">
            <div class="flex justify-between">
              <div class="badge bg-blue-100 text-primary font-bold badge-sm">
                ${product.category}
              </div>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-warning"></i>
                <p>${product.rating.rate}(${product.rating.count})</p>
              </div>
            </div>

            <p class="font-semibold truncate my-2">
             ${product.title}
            </p>
            <h2 class="font-bold"><span>$</span>${product.price}</h2>
            <div class="flex justify-between gap-4 my-4">
              <div onclick="my_modal_5.showModal(); loadDetailedProduct(${product.id})" class="btn btn-outline">
                <i class="fa-solid fa-eye"></i> Details
              </div>
              <div class="btn btn-outline">
                <i class="fa-solid fa-cart-shopping"></i> add
              </div>
            </div>
          </div>
        </div>`;
    cardContainer.append(card);
  });
};

const displayTopRatedProducts = (products) => {
  const trendingContainer = document.getElementById("trending");
  if (!trendingContainer) return;
  trendingContainer.innerHTML = "";
  products.forEach((product) => {
    const trendingProducts = document.createElement("div");
    trendingProducts.innerHTML = `
 <div class="card bg-base-100 shadow-sm">
          <figure class="bg-blue-100">
            <img
              src="${product.image}"
             class="h-80"
            />
          </figure>
          <div class="m-3">
            <div class="flex justify-between">
              <div class="badge bg-blue-100 text-primary font-bold badge-sm">
                ${product.category}
              </div>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-warning"></i>
                <p>${product.rating.rate}(${product.rating.count})</p>
              </div>
            </div>

            <p class="font-semibold truncate my-2">
             ${product.title}
            </p>
            <h2 class="font-bold"><span>$</span>${product.price}</h2>
            <div class="flex justify-between gap-4 my-4">
              <div onclick="my_modal_5.showModal(); loadDetailedProduct(${product.id})" class="btn btn-outline">
                <i class="fa-solid fa-eye"></i> Details
              </div>
              <div class="btn btn-outline">
                <i class="fa-solid fa-cart-shopping"></i> add
              </div>
            </div>
          </div>
        </div>
  `;
    trendingContainer.append(trendingProducts);
  });
};

const loadDetailedProduct = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => displayLoadedDetails(data));
};
// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }
const displayLoadedDetails = (product) => {
  const modalView = document.getElementById("modalDetails");
  modalView.innerHTML = `
  <div class="card bg-base-100 shadow-sm">
          <figure class="bg-blue-100">
            <img
              src="${product.image}"
              class="h-60"
            />
          </figure>
          <div class="m-3">
            <div class="flex justify-between">
              <h2 class="font-bold"><span>$</span>${product.price}</h2>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-warning"></i>
                <p>${product.rating.rate}(${product.rating.count})</p>
              </div>
            </div>
            <h2 class="font-semibold text-2xl my-2">
             ${product.title}
            </h2>
             <p>${product.description}</p>
            <div class="flex justify-between gap-4 my-4">
              <div class="btn btn-outline">
                <i class="fa-solid fa-cart-shopping"></i> add
              </div>
              <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
            </div>
          </div>
        </div> `;
};
const loadCategories = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryButton = document.createElement("div");
    categoryButton.innerHTML = `
    <button onclick="loadCategoryProducts('${category.replace(/'/g, "\\'")}')" class="btn btn-outline rounded-full">${category}</button>
    `;

    categoryContainer.append(categoryButton);
  });
};

const loadCategoryProducts = (category) => {
  url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductByCategory(data));
};
const displayProductByCategory = (products) => {
  const cardContainer = document.getElementById("productsContainer");
  cardContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = ` 
       <div class="card bg-base-100 shadow-sm">
          <figure class="bg-blue-100">
            <img
              src="${product.image}"
             class="h-80"
            />
          </figure>
          <div class="m-3">
            <div class="flex justify-between">
              <div class="badge bg-blue-100 text-primary font-bold badge-sm">
                ${product.category}
              </div>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-warning"></i>
                <p>${product.rating.rate}(${product.rating.count})</p>
              </div>
            </div>

            <p class="font-semibold truncate my-2">
             ${product.title}
            </p>
            <h2 class="font-bold"><span>$</span>${product.price}</h2>
            <div class="flex justify-between gap-4 my-4">
              <div onclick="my_modal_5.showModal(); loadDetailedProduct(${product.id})" class="btn btn-outline">
                <i class="fa-solid fa-eye"></i> Details
              </div>
              <div class="btn btn-outline">
                <i class="fa-solid fa-cart-shopping"></i> add
              </div>
            </div>
          </div>
        </div>`;
    cardContainer.append(card);
  });
};
loadProducts();
loadCategories();
