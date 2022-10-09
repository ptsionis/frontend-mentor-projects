"use strict";

const cartCounter = document.getElementById("cartCounter");
const productCartCounter = document.getElementById("productCartCounter");

const mainImage = document.getElementById("mainImage");

const overlayThumbnail1 = document.getElementById("overlayThumbnail1");
const overlayThumbnail2 = document.getElementById("overlayThumbnail2");
const overlayThumbnail3 = document.getElementById("overlayThumbnail3");
const overlayThumbnail4 = document.getElementById("overlayThumbnail4");

const thumbnail1 = document.getElementById("thumbnail1");
const thumbnail2 = document.getElementById("thumbnail2");
const thumbnail3 = document.getElementById("thumbnail3");
const thumbnail4 = document.getElementById("thumbnail4");

const lightboxContainer = document.getElementById("lightboxContainer");
const lightboxImage = document.getElementById("lightboxImage");

const cartDetailsObj = document.getElementById("cartDetails");
const emptyCartObj = document.getElementById("emptyCart");
const cartDetailsProductObj = document.getElementById("cartDetailsProduct");
const productCounterObj = document.getElementById("productCounter");
const finalPriceObj = document.getElementById("finalPrice");
const chekcoutButtonObj = document.getElementById("chekcoutButton");

//Used in Add to checkout button
let tempProductCart = 0;
let productCart = 0;

//Used for the lightbox carousel
let lightboxIndex = 1;

//Used in cart details div
let finalPrice = 0;

//Used to know if cart details should be opened or closed when the cart icon at header is clicked
let showCartSwitch = 0;

//Turns cart details div on or off
function showCartDetails() {
    if(showCartSwitch) {
        cartDetailsObj.style.display = 'none';
        showCartSwitch = 0;
    }
    else {
        cartDetailsObj.style.display = 'block';
        showCartSwitch = 1;
    }
}

//Decrement of add to cart product counter
function minusProductCart() {
    if (tempProductCart>0) {
        tempProductCart--;
        productCartCounter.innerHTML = tempProductCart;
    }
}

//Increment of add to cart product counter
function plusProductCart() {
    tempProductCart++;
    productCartCounter.innerHTML = tempProductCart;
}

//Gets the number of add to cart counter and adds it to the total product counter of the cart icon header
function updateCart() {
    productCart += parseInt(tempProductCart);
    finalPrice += tempProductCart * 125;
    tempProductCart = 0;
    productCartCounter.innerHTML = tempProductCart;

    if (productCart==0) {
        cartCounter.style.display = 'none';
        cartDetailsProductObj.style.display = 'none';
        emptyCartObj.style.display = 'block';
        chekcoutButtonObj.style.display = 'none';
    }
    else {
        cartCounter.style.display = 'block';
        cartDetailsProductObj.style.display = 'flex';
        emptyCartObj.style.display = 'none';
        chekcoutButtonObj.style.display = 'block';
    }
    cartCounter.innerHTML = productCart;
    productCounterObj.innerHTML = productCart;
    finalPriceObj.innerHTML = '&dollar;' + finalPrice.toFixed(2);
}

function clearCart() {
    productCart = 0;
    finalPrice = 0;
    cartCounter.style.display = 'none';
    cartDetailsProductObj.style.display = 'none';
    emptyCartObj.style.display = 'block';
    chekcoutButtonObj.style.display = 'none';
    cartCounter.innerHTML = productCart;
}

function showThumbnail(overlayThumbnail) {
    overlayThumbnail1.style.display = 'none';
    overlayThumbnail2.style.display = 'none';
    overlayThumbnail3.style.display = 'none';
    overlayThumbnail4.style.display = 'none';

    overlayThumbnail.style.display = 'block';
}

function showOutline(imageThumbnail) {
    thumbnail1.style.outline = "";
    thumbnail2.style.outline = "";
    thumbnail3.style.outline = "";
    thumbnail4.style.outline = "";

    imageThumbnail.style.outline = "2px solid hsl(26, 100%, 55%)";
}

function changeMainImage(url) {
    mainImage.src = url;
    updateCarouselIndex(mainImage);
}

function updateCarouselIndex(imageObj) {
    let tempImageSrc = imageObj.src;
    let tempIndex = tempImageSrc.substr(-5, 1);
    lightboxIndex = parseInt(tempIndex);
}

function showLightbox() {
    lightboxContainer.style.display = 'block';
    lightboxImage.src = mainImage.src;
}

function closeLightbox() {
    lightboxContainer.style.display = 'none';
}

function changeLightbox(url) {
    lightboxImage.src = url;
    updateCarouselIndex(lightboxImage);
}

function previousLightbox() {
    if (lightboxIndex!=1) {
        lightboxIndex--;
        changeLightbox("./images/image-product-"+lightboxIndex+".jpg");
    }
    else {
        lightboxIndex = 4;
        changeLightbox("./images/image-product-"+lightboxIndex+".jpg");
    }
}

function nextLightbox() {
    if (lightboxIndex!=4) {
        lightboxIndex++;
        changeLightbox("./images/image-product-"+lightboxIndex+".jpg");
    }
    else {
        lightboxIndex = 1;
        changeLightbox("./images/image-product-"+lightboxIndex+".jpg");
    }
}

showThumbnail(overlayThumbnail1);
showOutline(thumbnail1);