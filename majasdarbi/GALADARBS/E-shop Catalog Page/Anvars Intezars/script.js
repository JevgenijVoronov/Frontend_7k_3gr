
let inputElementSelector = document.getElementById("searchProduct");
var mainContainer = document.getElementById("allProductData")

function appendData(data) {
   var mainContainer = document.getElementById("allProductData");
   for (var i = 0; i < data.length; i++) {
     var div = document.createElement("div");
     div.innerHTML = 'product: ' + data[i].brand + ' ' + data[i].category;
     mainContainer.appendChild(div);
   }
 }

function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
}

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
