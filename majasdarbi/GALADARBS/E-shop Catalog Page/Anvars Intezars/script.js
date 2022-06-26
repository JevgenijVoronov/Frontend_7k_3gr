function getAboutUs() {
   let aboutUs = document.getElementById("About Us").onclick = 
   console.log("Hello");

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

