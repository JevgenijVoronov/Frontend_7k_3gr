
let inputElementSelector = document.getElementById("searchProduct");
let renderProduct = document.getElementById("render-products");
const mainUL = document.createElement('ul')


//Testing new method in order to create list of products in HTML file
function createList(data) {
   console.log(data);

   for (let i = 0; i < data.length; i++) {
      renderProduct.innerHTML += `<li>${data[i].title}</li>`
   //   const productLI = document.createElement('li');
   //   productLI.innerHTML = data.products[i].title;
   }
}

function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => console.log(data));
}

let buttonGetAllProducts = document.getElementById("getAllProducts");
buttonGetAllProducts.addEventListener("click", function () {
   getAllProducts();
});


function findProducts() {
   fetch(`https://dummyjson.com/products/search?q=${inputElementSelector.value}`)
   .then(res => res.json())
   .then(data => createList(data));
}

let buttonFindProducts = document.getElementById("findProducts");
buttonFindProducts.addEventListener("click", function () {
   findProducts();
});


/*
function getAllProductCategories () {
   
const fetchProductCagegoryPromise = fetch('https://dummyjson.com/products/categories')

const renderProductCategories = document.getElementById("render-products-categories");
   
   fetchProductCagegoryPromise.then(response => {
      return response.json();
    }).then(data => {
      const products = data.map(category => category.product).join("\n");
      

      renderProductCategories.innerHTML = products;
    });
   }
   */
   


function getAllProductCategories () {
   fetch('https://dummyjson.com/products/categories')
   .then(res => res.json())
   .then(data => createList(data));
}


let buttonGetAllProductCategories = document.getElementById("getAllProductCategories");
buttonGetAllProductCategories.addEventListener("click", function() {
   getAllProductCategories();
});
