
let inputElementSelector = document.getElementById("searchProduct");
let buttonGetAllProducts = document.getElementById("getAllProducts");
let buttonGetProductsByCategory = document.getElementById("productsByCategory");
let renderProduct = document.getElementById("render-products");
const mainUL = document.createElement('ul')

// mainUL.appendChild(productLI);


/*This is old code, which for now I do not want to remove
function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
*/

function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => console.log(data))
}


//Testing new method in order to create list of products in HTML file
function createList(data) {
   console.log(data);

   for (let i = 0; i < data.products.length; i++) {
      renderProduct.innerHTML += `<li>${data.products[i].title}</li>`
   //   const productLI = document.createElement('li');
   //   productLI.innerHTML = data.products[i].title;
   }
}


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


function getProductCategory () {
   fetch('https://dummyjson.com/products/categories')
   .then(res => res.json())
   .then(console.log);
}



buttonGetProductsByCategory.addEventListener("click", getProductCategory);