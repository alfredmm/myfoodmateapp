
function hidden(element){
    element.classList.add('hidden');
    setTimeout(() => element.classList.add('none'), 200);
}

function show(element){
    setTimeout(() => element.classList.remove('none'), 200);
    element.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartButton = document.getElementById('view-cart');
    const modal = document.getElementById('cart-modal');
    const closeButton = document.getElementsByClassName('close')[0];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    viewCartButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    updateCartCount();
});

function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    alert(`${name} added to cart!`);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const viewCartButton = document.getElementById('view-cart');
    viewCartButton.textContent = `View Cart (${count})`;
}

function openModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    updateCartModal();
}

function closeModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

function outsideClick(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = 'Total: KES0.00';
    } else {
        let cartHTML = '<ul>';
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartHTML += `<li>${item.name} - KES ${item.price} x ${item.quantity} = KES ${itemTotal.toFixed(2)}</li>`;
        });
        cartHTML += '</ul>';
        cartItems.innerHTML = cartHTML;
        cartTotal.textContent = `Total: KES ${total.toFixed(2)}`;
    }
}
function resetCart() {
    // Clear the cart array
    cart = [];
    
    // Reset the cart total
    cartTotal = 0;
    
    // Update the UI
    updateCartUI();
    
    // Optionally, close the cart modal if it's open
    closeCartModal();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Clear the current cart items display
    cartItemsElement.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Recreate the cart items list
        const ul = document.createElement('ul');
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            ul.appendChild(li);
        });
        cartItemsElement.appendChild(ul);
    }
    // Update the total
    cartTotalElement.textContent = `Total: KES ${cartTotal.toFixed(2)}`;
}

// Attach the resetCart function to the reset button
document.getElementById('reset-cart').addEventListener('click', resetCart);

// Close contact modal
contactClose.onclick = function() {
    contact-modal.classList.remove("show");
}

// Send message
messageBtn.onclick = function() {
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(contactForm);
    console.log("Form data:", Object.fromEntries(formData));
    alert("Message sent successfully!");
    contact-modal.classList.remove("show");
}

// Reset form
resetFormBtn.onclick = function() {
    contactForm.reset();
}

