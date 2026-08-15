// ---------- Carousel ----------

let images = [

"images/banner1.jpg",

"images/banner2.jpg",

"images/banner3.jpg"

];


let i = 0;


setInterval(changeImage,3000);



function changeImage(){


i++;


if(i==3){

i=0;

}



document.getElementById("slider")

.src=images[i];



}



// ---------- Product Counter ----------


let p1=0;
let p2=0;
let p3=0;



function add1(){


p1++;



document.getElementById("c1")

.innerHTML=

"Selected : "+p1;



}



function add2(){


p2++;



document.getElementById("c2")

.innerHTML=

"Selected : "+p2;



}



function add3(){


p3++;



document.getElementById("c3")

.innerHTML=

"Selected : "+p3;



}


function goProduct(){

document.getElementById("products")

.scrollIntoView({

behavior:"smooth"

});

}



document.getElementById("sendBtn")

.addEventListener(

"click",

function(){


alert(

"Message Sent Successfully"

);


}


);