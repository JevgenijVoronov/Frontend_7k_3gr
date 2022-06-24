function getAboutUs() {
   let aboutUs = document.getElementById("About Us").onclick = 
   console.log("Hello");

}

function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
}

const buttonGetAllProducts = document.querySelector("Get All Products");
buttonGetAllProducts.addEventListener("click", function () {
   getAllProducts();
});

/*
function findProducts() {
   fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);
}

let
*/