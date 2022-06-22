let productId = localStorage.getItem('product');
let totals = document.getElementById('total');

function renderProduct(data) {
    totals.innerHTML = `
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 class="my-0">${data.title}</h6>
            </div>
            <span class="text-muted">$ ${data.price}</span>
        </li>
    `;
}

function loadProduct () {
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(data => renderProduct(data));
}

loadProduct();

