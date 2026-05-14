const deliveryFee = 150; 
let currentCart = [];

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.add-to-cart');
    
    buyButtons.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
});

function handleAddToCart(event) {
    const card = event.target.closest('.product-card');
    const name = card.querySelector('h3').innerText;
    const priceText = card.querySelector('.price').innerText;


        const price = parseInt(priceText.replace);
    
        currentCart.push({ name, price });

    const originalBtnText = event.target.innerText;
    event.target.innerText = "Added ✓";
    event.target.style.background = "#1b4332"; 
    event.target.disabled = true;

    setTimeout(() => {
        event.target.innerText = originalBtnText;
        event.target.style.background = "#2d6a4f";
        event.target.disabled = false;
    }, 1500);
}

function showFinalOrder() {
    if (currentCart.length === 0) {
        alert("Please add items to the order first!");
        return;
    }

    let subtotal = 0;
    currentCart.forEach(item => { subtotal += item.price;
    const grandTotal = subtotal + deliveryFee;

        const landmark = prompt(Subtotal: Ksh ${subtotal.toLocaleString()}\nDelivery Fee: Ksh ${deliveryFee}\nTotal: Ksh ${grandTotal.toLocaleString()}\n\nEnter delivery landmark:);

    if (landmark) {
        alert(Order confirmed for delivery near ${landmark}.);
    }
}

