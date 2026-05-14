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
    

