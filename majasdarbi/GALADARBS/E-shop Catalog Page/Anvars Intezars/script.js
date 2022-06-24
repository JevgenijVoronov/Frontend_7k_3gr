function getAboutUs() {
   let aboutUs = document.getElementById("About Us").onclick = 
   console.log("Hello");

}

function getAllProducts() {
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
}

let buttonGetAllProducts = document.createElement("button");
buttonGetAllProducts.innerHTML = "getallproducts";
buttonGetAllProducts.addEventListener("click", getAllProducts () {
   alert("Button is clicked");
});
document.body.appendChild(buttonGetAllProducts);
