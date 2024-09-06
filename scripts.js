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

// Update price based on quantity selected
// function updatePrice() {
//     var quantity = document.getElementById('quantity').value;
//     var priceElement = document.getElementById('price');
    
//     var price = 0;
//     switch (quantity) {
//         case '0.25kg':
//             price = 5.00;
//             break;
//         case '0.5kg':
//             price = 9.00;
//             break;
//         case '1kg':
//             price = 17.00;
//             break;
//     }
    
//     priceElement.textContent = 'Price: $' + price.toFixed(2);
// }
// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to update the price based on selected quantity
function updatePrice(modalId) {
    var modal = document.getElementById(modalId);
    var quantity = modal.querySelector('select').value;
    var priceElement = modal.querySelector('#price-' + modalId);
    
    var price = 0;
    switch (quantity) {
        case '0.25kg':
            price = 5.00;
            break;
        case '0.5kg':
            price = 9.00;
            break;
        case '1kg':
            price = 17.00;
            break;
    }
    
    priceElement.textContent = 'Price: $' + price.toFixed(2);
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
