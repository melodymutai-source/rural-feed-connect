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


        const price = Number(priceText.replace(/\D/g, ''));
    
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

        let subtotal = 0;
        let grandtotal = 0;
    currentCart.forEach(item => subtotal += item.price);
    grandTotal = subtotal + deliveryFee;
    const landmarkInput = document.querySelector('textarea').value;

    if (!landmarkInput) {
        alert("Please enter a landmark so our drivers can find you!");
        return;
    }

        const summary = "Order Total: Ksh " + grandTotal.toLocaleString() + "\nDelivery to: " + landmarkInput;
    alert("Confirming Rural Feed Connect Order:\n\n" + summary);
}

    const proceedToPay = confirm("Total amount: Ksh " + grandTotal.toLocaleString() + "\n\nWould you like to initiate M-Pesa payment?");

    if (proceedToPay) {
        alert("M-Pesa STK Push sent to your phone. Please enter your PIN to complete the order for " + landmarkInput);
    } else {
        alert("Payment cancelled. Your items are still in the cart.");
    }



