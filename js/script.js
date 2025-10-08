// Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    let total = 0;

    // Select all Add to Cart buttons
    const buttons = document.querySelectorAll('.add-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Find the closest product div
            const product = e.target.closest('.product');

            // Get product name and price
            const name = product.querySelector('h2').innerText;
            const price = Number(product.getAttribute('data-price'));

            // Create a new list item and add to cart
            const li = document.createElement('li');
            li.innerText = `${name} - ₹${price}`;
            cartItems.appendChild(li);

            // Update total
            total += price;
            totalEl.innerText = total;
        });
    });
});
