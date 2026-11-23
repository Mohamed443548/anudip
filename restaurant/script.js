
// Shopping Cart
let cart = [];
let total = 0;

// Add Food to Cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    displayCart();

}

// Display Cart Items
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        let li = document.createElement("li");

        li.className =
        "list-group-item d-flex justify-content-between align-items-center";

        let itemText = document.createElement("span");
        itemText.textContent = item.name + " - ₹" + item.price;

        let removeButton = document.createElement("button");

        removeButton.className = "btn btn-danger btn-sm";
        removeButton.textContent = "Remove";

        removeButton.onclick = function() {
            removeItem(index);
        };

        li.appendChild(itemText);
        li.appendChild(removeButton);

        cartItems.appendChild(li);

    });

    document.getElementById("total").innerText = total;

}

// Remove Food
function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    displayCart();

}

// Clear Cart
function clearCart() {

    cart = [];
    total = 0;

    displayCart();

}

// Filter Food Categories
function filterFood(category) {

    let foods = document.querySelectorAll(".food-item");

    foods.forEach(function(food) {

        if (
            category === "all" ||
            food.dataset.category === category
        ) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });

}

// Place Order
function placeOrder() {

    if (cart.length === 0) {

        alert("Please add food items to your cart!");

    } else {

        alert(
            "Thank you for your order!\n" +
            "Your total bill is ₹" + total
        );

        clearCart();

    }

}

// Initial Cart Display
displayCart();
