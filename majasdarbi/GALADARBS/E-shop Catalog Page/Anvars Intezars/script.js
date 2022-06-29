
function getAboutUs() {
   alert("Hello!");
}
/*
element.addEventListener("click", getAboutUs);

function getAboutUs() {
   document.getElementById("About Us").innerHTML = "Hello World";
 }
 */

let buttonAboutUs = document.getElementById("About Us");
buttonAboutUs.addEventListener("click", function () {
});

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
   fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);
}

let buttonFindProducts = document.getElementById("findProducts");
buttonFindProducts.addEventListener("click", function () {
   findProducts();
});


function getProductsByCategory () {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
}

let buttonGetProductsByCategory = document.getElementById("productsByCategory");
buttonGetProductsByCategory.addEventListener("click", function () {
   getProductsByCategory();
});

