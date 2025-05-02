let products = [];
let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        products = data;
        displayProducts();
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = "";

    products.forEach(product => {
        const box = document.createElement("div");
        box.className = "box";

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h2");
        title.textContent = product.title;

        const price = document.createElement("h5");
        price.textContent = `$${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.onclick = () => addToCart(product);

        box.appendChild(img);
        box.appendChild(title);
        box.appendChild(price);
        box.appendChild(button);
        container.appendChild(box);
    });
}

function addToCart(product) {
    const found = cart.find(item => item.id === product.id);
    if (found) {
        found.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.image = `${item.image}`;
        li.textContent = `${item.title} x ${item.quantity}`;
        cartList.appendChild(li);
    });
}

fetchProducts();
