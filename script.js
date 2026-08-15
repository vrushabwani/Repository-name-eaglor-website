let cart = [];

function addToCart(productName, price, button) {
    const product = button.closest(".product");
    const colorSelect = product.querySelector(".product-color");
    const selectedColor = colorSelect.value;

    const existingProduct = cart.find(item =>
        item.name === productName &&
        item.color === selectedColor
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            color: selectedColor,
            quantity: 1
        });
    }

    updateCart();

    alert(
        productName +
        " (" +
        selectedColor +
        ") added to cart."
    );
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">YOUR CART IS EMPTY.</p>';

        cartCount.textContent = "0";
        cartTotal.textContent = "0";

        return;
    }

    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;

        total += itemTotal;
        itemCount += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <span>EAGLOR</span>

                <h3>${item.name}</h3>

                <p>COLOUR: ${item.color}</p>

                <p>QUANTITY: ${item.quantity}</p>
            </div>

            <div>
                <strong>₹${itemTotal}</strong>

                <button onclick="removeFromCart(${index})">
                    REMOVE
                </button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = itemCount;

    cartTotal.textContent =
        total.toLocaleString("en-IN");
}

function removeFromCart(index) {
    cart.splice(index, 1);

    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("YOUR CART IS EMPTY.");
        return;
    }

    alert(
        "EAGLOR CHECKOUT\n\n" +
        "Checkout system will be connected next."
    );
}