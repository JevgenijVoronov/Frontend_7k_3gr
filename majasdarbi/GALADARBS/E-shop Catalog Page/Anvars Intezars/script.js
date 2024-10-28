
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

   function showDataForProductCategories(data) {
      let tab =
          `<tr>
            <th>Smarphones</th>
            <th>Laptops</th>
            <th>Fragrances</th>
            <th>Skincare</th>
            <th>Groceries</th>
            <th>Home-decoration</th>
            <th>Furniture</th>
            <th>Tops</th>
            <th>Womens-dresses</th>
            <th>Womens-shoes</th>
            <th>Mens-shirts</th>
            <th>Mens-shoes</th>
            <th>Mens-watches</th>
            <th>Womens-watches</th>
            <th>Womens-bags</th>
            <th>Womens-jewellery</th>
            <th>Sunglasses</th>
            <th>Automative</th>
            <th>Motorcycle</th>
            <th>Lightning</th>
           </tr>`;
   }
   
      // Loop to access all rows
      for (let r of data.list) {
          tab += `<tr>
      <td>${r.smartphones} </td>
      <td>${r.laptops}</td>
      <td>${r.fragrances}</td>
      <td>${r.skincare}</td>
      <td>${r.groceries}</td>
      <td>${r.home-decoration}</td>
      <td>${r.furniture}</td>
      <td>${r.tops}</td>
      <td>${r.womens-dresses}</td>
      <td>${r.womens-shoes}</td>
      <td>${r.mens-shirts}</td>
      <td>${r.mens-shoes}</td>
      <td>${r.mens-shirts}</td>
      <td>${r.mens-watches}</td>
      <<td>${r.womens-watches}</td>
      <td>${r.womens-bags}</td>
      <td>${r.womens-jewellery}</td> 
      <td>${r.sunglasses}</td>
      <td>${r.automative}</td>
      <td>${r.motorcycle}</td>
      <td>${r.lightning}</td>        
  </tr>`;
      }  

function getAllProductCategories () {
   fetch('https://dummyjson.com/products/categories')
   .then(res => res.json())
   .then(data => createList(data))
   .then(showDataForProductCategories(data));
}


let buttonGetAllProductCategories = document.getElementById("getAllProductCategories");
buttonGetAllProductCategories.addEventListener("click", function() {
   getAllProductCategories();

   function showDataForProductCategories(data) {
      let tab =
          `<tr>
            <th>Smarphones</th>
            <th>Laptops</th>
            <th>Fragrances</th>
            <th>Skincare</th>
            <th>Groceries</th>
            <th>Home-decoration</th>
            <th>Furniture</th>
            <th>Tops</th>
            <th>Womens-dresses</th>
            <th>Womens-shoes</th>
            <th>Mens-shirts</th>
            <th>Mens-shoes</th>
            <th>Mens-watches</th>
            <th>Womens-watches</th>
            <th>Womens-bags</th>
            <th>Womens-jewellery</th>
            <th>Sunglasses</th>
            <th>Automative</th>
            <th>Motorcycle</th>
            <th>Lightning</th>
           </tr>`;
   
      // Loop to access all rows
      for (let r of data.list) {
          tab += `<tr>
      <td>${r.smartphones} </td>
      <td>${r.laptops}</td>
      <td>${r.fragrances}</td>
      <td>${r.skincare}</td>
      <td>${r.groceries}</td>
      <td>${r.home-decoration}</td>
      <td>${r.furniture}</td>
      <td>${r.tops}</td>
      <td>${r.womens-dresses}</td>
      <td>${r.womens-shoes}</td>
      <td>${r.mens-shirts}</td>
      <td>${r.mens-shoes}</td>
      <td>${r.mens-shirts}</td>
      <td>${r.mens-watches}</td>
      <<td>${r.womens-watches}</td>
      <td>${r.womens-bags}</td>
      <td>${r.womens-jewellery}</td> 
      <td>${r.sunglasses}</td>
      <td>${r.automative}</td>
      <td>${r.motorcycle}</td>
      <td>${r.lightning}</td>        
  </tr>`;
      }
      
      // Setting innerHTML as tab variable
      document.getElementById("employees").innerHTML = tab;
  }

});
