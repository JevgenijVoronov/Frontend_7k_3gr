let categoriesSelector  = document.getElementById('categories');
let productSelector     = document.getElementById('products');
let searchInput         = document.getElementById('product-search');

function renderError() {
    productSelector.innerHTML = `
        <div class="container">
            <div class="bg-light p-5 rounded mt-3">
                <h1>Oops!</h1>
            </div>
        </div>
    `;

}

function renderCategories(categories) {
    categories.forEach(category => {
        categoriesSelector.innerHTML += `<li class="e-shop__menu-item" data-category="${category}">${category}</li>`
    })
}

function renderProducts(data) {
    if (data.total > 0) {
        productSelector.innerHTML = ``;
        data.products.forEach(product => {
            productSelector.innerHTML += `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="${product.thumbnail}">
                    <div class="card-body">
                        <p class="card-text"><b>${product.title}</b></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${product.price} $</small>
                            <button data-id=${product.id} type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        });

        let buttons = document.getElementsByClassName("btn");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                id = this.getAttribute("data-id");
                localStorage.setItem('product', id);
                window.location.href="cartPage.html";
            });
        }

    } else {
        renderError();
    }
}

function renderProductByCategory(e) {
    let categoryClicked = e.target.dataset.category;
    fetch(`https://dummyjson.com/products/category/${categoryClicked}`)
    .then(res => res.json())
    .then(data => renderProducts(data));
}

function searchProducts() {
    fetch(`https://dummyjson.com/products/search?q=${searchInput.value}`)
    .then(res => res.json())
    .then(data => renderProducts(data));
}

function getCategories() {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => renderCategories(categories));
}

getCategories();
categoriesSelector.addEventListener('click', renderProductByCategory);
searchInput.addEventListener('input', searchProducts);

