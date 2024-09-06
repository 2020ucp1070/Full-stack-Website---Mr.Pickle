// function updateQuantity( change, productId){
//     var quantityInput = document.gerElementById('quantity-' + productId);
//     var currentQuantity = parseInt(quantityInput.value);
//     var newQuantity = currentQuantity + change;
//     if (newQuantity >=1){
//         quantityInput.value = newQuantity;
//         updatePrice(productId);
//     }
// }

// function updatePrice(productId){
//     var quantityInput = document.getElementById('quantity-' + productId).value;
//     var selectedOption = document.getElementById('quantitySelect-' + productId).value;
//     var pricePerUnit = document.getElementById('quantitySelect-' + productId).options[document.getElementById('quantitySelect-' + productId).selectedIndex].getAttribute('data-price');
//     var totalPrice = pricePerUnit * quantityInput;
//     document.getElementById('totalPrice-' + productId).innerText = '${totalPrice}';
// }
document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdown = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });
});

// Toggle product details
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.classList.contains('active')) {
        details.classList.remove('active');
    } else {
        details.classList.add('active');
    }
}
 function toggleCategoryOverlay() {
            var overlay = document.getElementById("category-overlay");
            overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
        }

        // Close the overlay if the user clicks outside of it
window.onclick = function(event) {
    var overlay = document.getElementById("category-overlay");
        if (event.target == overlay) {
            overlay.style.display = "none";
         }
    }
    function updateQuantity(change, productId) {
        var quantityInput = document.getElementById('quantity-' + productId);
        var currentQuantity = parseInt(quantityInput.value);
        var newQuantity = currentQuantity + change;
        if (newQuantity >= 1) {
            quantityInput.value = newQuantity;
            updatePrice(productId);
        }
    }
    
    function updatePrice(productId) {
        var quantityInput = document.getElementById('quantity-' + productId).value;
        var selectedOption = document.getElementById('quantitySelect-' + productId).value;
        var pricePerUnit = document.getElementById('quantitySelect-' + productId).options[document.getElementById('quantitySelect-' + productId).selectedIndex].getAttribute('data-price');
        var totalPrice = pricePerUnit * quantityInput;
       // Display the price in rupees
        document.getElementById('totalPrice-' + productId).innerText = totalPrice;
    }
    