const loadProducts = () => {
  url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};
const displayProducts = (products) => {
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
              <div class="btn btn-outline">
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
              <div class="btn btn-outline">
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
