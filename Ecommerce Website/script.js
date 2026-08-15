

let images = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let index = 0;

setInterval(function () {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slider").src = images[index];

}, 3000);



document.getElementById("send").addEventListener("click", function (e) {

    e.preventDefault();

    alert("Thank you! We will contact you soon.");

});


let search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll("#products .card");

    cards.forEach(function (card) {

        let product = card.querySelector("h3").innerText.toLowerCase();

        if (product.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});



let totalItems = 0;
let totalPrice = 0;

let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let price = Number(button.dataset.price);

        totalItems++;
        totalPrice += price;

        document.getElementById("cart-count").innerText = totalItems;

        document.getElementById("items").innerText = totalItems;

        document.getElementById("total-price").innerText = totalPrice;

        button.innerText = "Added ✓";

        button.style.background = "green";

        setTimeout(function(){

        button.innerText = "Add to Cart";

        button.style.background = "";

},1000);

    });

});



document.getElementById("checkout").addEventListener("click", function () {

    if (totalItems === 0) {

        alert("Your cart is empty!");

        return;

    }

    alert("🎉 Order Placed Successfully!\nThank you for shopping with SoftBloom.");

    totalItems = 0;
    totalPrice = 0;

    document.getElementById("cart-count").innerText = 0;

    document.getElementById("items").innerText = 0;

    document.getElementById("total-price").innerText = 0;

});

document.getElementById("subscribeBtn").addEventListener("click",function(){

alert("Thank you for subscribing!");

});

let topBtn = document.getElementById("topBtn");

window.onscroll=function(){

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}