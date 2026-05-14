const deliveryFee = 150; 
let currentCart = [];

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.add-to-cart');
    
    buyButtons.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
