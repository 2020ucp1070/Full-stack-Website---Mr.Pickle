// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
// const totalCarouselItems = carouselItems.length;
let currentItemIndex = 0;
function showCarouselItem(index) {
    const totalItems = carouselItems.length;
    const adjustedIndex = index % totalItems; // Ensure index is within bounds
    const offset = -adjustedIndex * (100 / totalItems); // Calculate offset
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Handle seamless looping
    if (index >= totalItems) {
        // Reset index if it's at the end
        setTimeout(() => {
            carouselInner.style.transition = 'none'; // Disable transition for instant jump
            showCarouselItem(adjustedIndex); // Reset to the beginning
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50);
        }, 100); // Wait until the transition ends before resetting
    } else if (index < 0) {
        // Handle negative index for previous items
        setTimeout(() => {
            carouselInner.style.transition = 'none'; // Disable transition for instant jump
            showCarouselItem(totalItems - 1); // Jump to the end
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50);
        }, 100); // Wait until the transition ends before resetting
    }
}

function nextImage() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    showCarouselItem(currentItemIndex);
}

function prevImage() {
    currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentItemIndex);
}

setInterval(nextImage, 1000); // Change image every 10 seconds
// ///////////////////////////////////////////////////////////////////////////////////////
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');
const paragraphs = document.querySelectorAll('.story-container .paragraph');
const totalImages = images.length;

function showContent(index) {
    // Show the correct image
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });

    // Show the correct paragraph
    paragraphs.forEach((para, i) => {
        para.classList.remove('active');
        if (i === index) {
            para.classList.add('active');
        }
    });
}

function nextBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showContent(currentImageIndex);
}

function prevBackgroundImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showContent(currentImageIndex);
}

// Automatically move to the next image and paragraph every 5 seconds
setInterval(nextBackgroundImage, 5000);

// Event listeners for arrow clicks
document.querySelector('.left-arrow').addEventListener('click', prevBackgroundImage);
document.querySelector('.right-arrow').addEventListener('click', nextBackgroundImage);
let cartCount =0;
function updateQuantity(change, productId){
    var quantityInput =document.getElementById('quantity-' + productId);
    var currentQuantity = parseInt(quantityInput.value);
    var newQuantity = currentQuantity + change;
    if(newQuantity>=1){
        quantityInput.value = newQuantity;
        updatePrice(productId);
    }
}

function updatePrice(productId){
    var quantityInput=document.getElementById('quantity-' + productId).value;
    var selectedOption = document.getElementById('quantitySelect-' + productId).value;
    var pricePerUnit =document.getElementById('quantitySelect-' + productId).options[document.getElementById('quantitySelect-'+ productId).selectedOption];
    var totalPrice =pricePerUnit*quantityInput;
    document.getElementById('totalPrice-' + productId).innerText='${totalPrice}';

}
function addToCart(productId){
    cartCount++;
    document.getElementById('cart-count').innerText=cartCount;
    showpPopup(productId);
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////
const productContainer = document.querySelector('.product-container');
const productBoxes = document.querySelectorAll('.product-box');
const totalProducts = productBoxes.length;
const productWidth = document.querySelector('.product-box').offsetWidth;
const visibleProducts = 4; // Number of products visible at once
let scrollIndex = 0;

// Duplicate product boxes to create a seamless loop
function duplicateProducts() {
    for (let i = 0; i < totalProducts; i++) {
        const clone = productBoxes[i].cloneNode(true);
        productContainer.appendChild(clone);
    }
}

function updateWidth() {
    const containerWidth = productWidth * totalProducts;
    productContainer.style.width = `${containerWidth * 2}px`; // Two sets of products for seamless loop
}

function scrollRight() {
    scrollIndex++;
    const offset = -scrollIndex * productWidth;
    if (scrollIndex >= totalProducts) {
        scrollIndex = 0;
        productContainer.style.transition = 'none'; // Disable transition for instant jump
        productContainer.style.transform = `translateX(0)`;
        setTimeout(() => {
            productContainer.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
        }, 50);
    } else {
        productContainer.style.transform = `translateX(${offset}px)`;
    }
}

function scrollLeft() {
    scrollIndex--;
    const offset = -scrollIndex * productWidth;
    if (scrollIndex < 0) {
        scrollIndex = totalProducts - 1;
        productContainer.style.transition = 'none'; // Disable transition for instant jump
        productContainer.style.transform = `translateX(${-scrollIndex * productWidth}px)`;
        setTimeout(() => {
            productContainer.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
        }, 50);
    } else {
        productContainer.style.transform = `translateX(${offset}px)`;
    }
}

function autoScroll() {
    scrollRight();
}

// Initialize the loop
duplicateProducts();
updateWidth();
setInterval(autoScroll, 3000); // Adjust timing as needed for automatic scrolling

document.querySelector('.right-arrow').addEventListener('click', scrollRight);
document.querySelector('.left-arrow').addEventListener('click', scrollLeft);
// ////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const reviewBoxes = document.querySelectorAll(".review-box");

    const revealReviews = () => {
        const windowHeight = window.innerHeight;
        reviewBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < windowHeight) {
                box.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealReviews);
    revealReviews(); // Call on page load in case reviews are already in view
});




