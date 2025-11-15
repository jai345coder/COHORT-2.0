//!JAVASCRIPT THE DOM
//!========================

/**
 * The Document Object Model (DOM) is a programming interface for HTML and XML documents.
 * Matlab pura html ki body hi dom hai aur apni website par chnges ( click abutton par color change  ,  notifications blocks ) basically changes ko lane eke liye hame kar na hai DOM MANIPULATION
 */



//Syllabus:✅✅✅
//=================

//html se element select karna
//txt
//html 
//css 
//attribute 
//event linstener


//html se element select karna

//byID
var h1 = document.getElementById("h1");
//byClassName
var h2 = document.getElementsByClassName("h2");
//byTagName
var h3 = document.getElementsByTagName("h3");
//querySelector
var h4 = document.querySelector(".h4");
//querySelectorAll
var h5 = document.querySelectorAll(".h5");

console.dir(h1);//dir helps us to see the properties of an object
console.dir(h2);
console.dir(h3);
console.dir(h4);
console.dir(h5);



//*Manipulation using Selector
//==============================

//textContent / innerText
//-----------------------------------------

var gali = document.querySelector("h1");
//gali.textContent = "hello bkl";


//innerHTML
//-----------------------------------------
//html ki bhi change kar sakte hai
var gali = document.querySelector("h1");
gali.innerHTML = "<h4> heelo bhai </h4> ";
gali.hidden = false;//hide kar dega


//ATTRIBUTES MANIPULATION : setAttribute , getAttribute , removeAttribute
//-------------------------------------------------------------------
//*Atritus: ki bhi html tag ke <> andar jo lika to hai vo attribute hai

var a = document.querySelector("a");
a.href = "https://www.google.com";
a.setAttribute("href","https://www.google.com");//kaun sa attribute , kya value lete hai
a.removeAttribute("href");
console.log(a.getAttribute("href"));//value ko lete hai


//DYNAMIC DOM MANIPULATION
//================================
//createElement--> js se naya html element bana sakte hai jo html m nai hai

let helloji = document.createElement("h1");
helloji.textContent = "hello bkl";

document.body.append(helloji);
helloji.style.color = "red";
helloji.style.fontSize = "50px";
//removeChild
helloji.remove();


let h3z = document.createElement("h1");
h3z.textContent = "hey mai baahar se aaya hu";
  document.querySelector("div")
  // h3z.prepend(h3z);

//!

let h2s = document.querySelector("h2");
h2s.classList.add("kulu");
h2s.classList.toggle//agarlagi hai to hat adega aur agar hati hui thi to laga de ga



//*PRACTICE:✅✅✅✅✅
//=====================



//  //Q1: 
//  let lis = document.querySelectorAll(".lis")
// let newlis = lis.forEach(function(val){
//  val.style.backgroundColor="red";

// });
  



  let newHeading = document.createElement("h1");
  document.body.append(newHeading);
  newHeading.style.fontSize = "40px";
  newHeading.style.backgroundColor="red";
  newHeading.innerText = "hello this is me";

    


//Q2: how would you get src of img using js on the console
 

let imgs = document.querySelector("img");
console.dir(imgs);
console.log(imgs.src);
































