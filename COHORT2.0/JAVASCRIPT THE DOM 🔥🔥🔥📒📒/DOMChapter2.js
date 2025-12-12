//*Event Listener in js
//==========================

//Event -> huch hua 
//event listener --> kuch hua to usa reaction diya

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color = "red";
//     h1.style.fontSize = "50px";
// })


// //HANDLING INPUT DETAILS
// let doublereaction = h1.addEventListener("dblclick" ,function(){
//     h1.style.color = "green";
//     h1.style.fontSize = "50px";
// })

// let name = document.querySelector("input");
// name.addEventListener("input", function(val){
// if(val.data === null){
//     console.log(" ")
// }else{
//     console.log(val.data);
// }
// })



//change event tab chalta hai jab apka koi input select ya inoput area me koi change ho jaye

// let select = document.querySelector( "select");
// select.addEventListener("change",function(){
//     h1.innerText = `${select.value} is selected`;
//     console.log(select.value);
// })




//PR0JECT
//========
//Q what ever key i pres wil be visivble on my screen

// let target = document.querySelector("#main h1");
//  window.addEventListener("keydown",function(e){
//    if(e.key === " "){
//     target.innerText = "space"
//    }else{
//     target.innerText = e.key
//    }
//  })




//  let btn = document.querySelector (" #btn");
//  let input = document.querySelector("input");
//  let btnH5 = document.querySelector("#btn h5");
//  btn.addEventListener("click",function(){
// const file = input.files[0];
// if(file){

// }
//  })




function BGSColor(){
  let R = Math.floor(Math.random()*255);
let G = Math.floor(Math.random()*255);
let B = Math.floor(Math.random()*255);
let color = `rgb(${R},${G},${B})`;

 return color;
}


// function WhatIwantToSay(){
//  const words = [
//     "resilience",
//     "empathy",
//     "kindness",
//     "happiness",
//     "peace",
//     "joy",
//     "wisdom",
//     "thrill",
//     "courage",
//     "friendship",
//     "gratitude",
//     "patience",
//     "self-discipline",
//     "confidence",
//     "authenticity",
//     "compassion",
//     "generosity",
//     "humility",
//     "forgiveness",
//     "self-awareness",
//     "open-mindedness",
//     "curiosity",
//     "love",
//     "hope",
//     "faith",
//     "perseverance",
//     "determination",
//     "motivation",
//     "effort",
//     "persistence"
// ];

//   let idx = Math.floor(Math.random()*words.length);
//   return words[idx];
// }


// let ClickMe = document.querySelector(".click-me");
// ClickMe.style.zIndex = "1000";
// ClickMe.addEventListener("click",function(){
//   let x = Math.random()*100;//
// let y = Math.random()*100;
//   let newBox = document.createElement("div");


//   newBox.style.height="100px";
//   newBox.style.width="100px";
//   newBox.style.backgroundColor="red";
//   newBox.style.backgroundColor = BGSColor();


//   newBox.style.position="absolute";
//   newBox.style.left = `${x}%`;
//   newBox.style.top = `${y}%`;
//   newBox.style.display = "flex";


//   newBox.style.justifyContent = "center";
//   newBox.style.alignItems = "center";
//   newBox.innerText = WhatIwantToSay();
//   document.body.append(newBox);
//   console.log(newBox);
// })





// //uoploading a file and showing its name on the screen

// let upload = document.querySelector(".upload");
// let inputupload = document.querySelector("#input");
// // inputupload.style.display = "none";
// upload.addEventListener("click", function () {
//     inputupload.click();
//     if (file) {
//         const fileName = inputupload.files.name;//files[0] means first file
//         upload.innerText = fileName;
//     }
// })


// //take details from user using from and show those details on the screen
// let page = document.querySelector(".page");
// let inputs = document.querySelectorAll("input");
// let pic = document.querySelector("#pic");
// let form = document.querySelector("form");
// console.log(inputs);

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let pic = inputs[1];
//     let name = inputs[2];
//     let email = inputs[3];
//     let age = inputs[4];
//     let newCard = document.createElement("div");
//    newCard.id = "card";
  
//    newCard.innerHTML = `<div id="card">
//         <img src=${pic.value} alt="" >
//         <h3 id="cname">${ name.value}</h3>
//         <h3 id="cage">${age.value}</h3>
//         <h3 id="cemail">${email.value}</h3>
//     </div> `
// newCard.style.backgroundColor = BGSColor();
// page.classList.add("newCard");
//     return document.body.append(newCard);
//     //console.log(inputpic.files.name.value);
// })



// let inputpic = document.querySelector("#inputpic")
// inputpic.style.display = "none";

// pic.addEventListener("click", function () {
//     inputpic.click();
//     if (file) {
//         const filepic = inputpic.files[0].name;
//         pic.src = URL.createObjectURL(filepic);
//         return pic.src;
//     }


// })




// //on hovr color colorof page changes
// let tezxt = document.querySelector("#wd");
// let page2 = document.querySelector("#page2");
// tezxt.addEventListener("mouseenter", function(){
//    page2.style.backgroundColor = BGSColor();
// })


// //
let box = document.querySelector("#boxes");

// box.addEventListener("mouseover", function(){
//     console.log("hovered");
// box.style.backgroundColor = "yellow";
// })

// box.addEventListener("mouseout", function(){
//     box.style.backgroundColor = "pink";
//     })


window.addEventListener("mousemove", function(e){
    console.log(`X axis : ${e.clientX} , Y axis : ${e.clientY}`);
    box.style.left = e.clientX+"px";
    box.style.top = e.clientY+"px" ;
})







