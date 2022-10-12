
let inputElementSelector = document.getElementById("searchProduct");
const mainUL = document.createElement('ul')

mainUL.appendChild(productLI);


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
   const mainUL = document.createElement('ol');
   for (let i = 0; i < data.result.length; i++) {
     const productLI = document.createElement('li');
     productLI.innerHTML = data.result[i].title;



let buttonGetAllProducts = document.getElementById("getAllProducts");
buttonGetAllProducts.addEventListener("click", function () {
   getAllProducts();
});


function findProducts() {
   fetch(`https://dummyjson.com/products/search?q=${inputElementSelector.value}`)
.then(res => res.json())
.then(console.log);
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

let buttonGetProductsByCategory = document.getElementById("productsByCategory");
buttonGetProductsByCategory.addEventListener("click", function () {
   getProductsByCategory();
});
