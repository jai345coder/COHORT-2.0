//EVENT BUBBLING
//==================
// jab ka hum kisi elm par event lagate hai par va use uka lister nahi mila ta hai tan vo us elem ke parent ke pass jata hai listermr to dundne aur asa karte karte vo filnal parent par cala jata hai agar nahi mila aur milga in an y course of time to event shoe ho jata hai jo bho hon a hu=ot ahai

//bubbling me hum kisi elm par event lagate hai par vo us elem ke parent ke pass jata hai us elem ke parent ke parent ke pass jata hai

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");


//? NOTE: EVENT BUUBLING ME ===>>>  akk parent ke val apna event challa sakta hai par child apne parent aur sare next parents kar event bhi aur apna bhi event challa sakta hai
// div1.addEventListener("click", function(){
//    console.log("You clicked on Div 1");
// });//click di1 par hua par uska effect do child(div2 and div3) par bhi use hua that event bubbling

// div2.addEventListener("click", function(){
//     console.log("You clicked on Div 2");
// })


// div3.addEventListener("click", function(){
//     console.log("You clicked on Div 3");
// })





//create a list and when click on any it should b stricked through

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(event){
//     event.target.style.textDecoration = "line-through";
// });





//EVENT CAPTURING
//====================

/**
 * event capturing opposite of event bubbling
 * bass ab parent parent ane sare child ke event challa sakta hai par child ke val ana aur ane sub child k vent ko chala sak ta hai par 
 * !apne parent ka nahi calla sakta 
 */


// div1.addEventListener("click", function(){
//     console.log("You clicked on Div 1");
// });//click di1 par hua par uska effect do child(div2 and div3) par bhi use hua that event bubbling

// div2.addEventListener("click", function(){
//     console.log("You clicked on Div 2");
// })


// div3.addEventListener("click", function(){
//     console.log("You clicked on Div 3");
// })




//!Note:
/**
 * jab ham ki elem par click kar te hai aur event raise karte hai to aapka jo event flow hai vo do phases me chalta hai
 * 
 * 
 * PHASE 1 : event top level se neeche ki taraf aayegay----> by defalt off rahata hai
 * 
 * PHASE 2 :  event raised elem se parent ki taraf ayega 
 * 
 */


// div3.addEventListener("click", function(){
//     console.log("You clicked on Div 3");
// },{capture : true});



// div2.addEventListener("click", function(){
//     console.log("You clicked on Div 2");
// }, );




// div1.addEventListener("click", function(){
//     console.log("You clicked on Div 1");
// },{capture : true});




//CHARACTER COUNTER
//==========================

let words = document.querySelector("input");

let counter = document.querySelector("#main h3");

let totalspaces = 0;
let totalWords =0;
words.addEventListener("input", function () {
    if (words.value.toString() !== " ") {
       
        totalWords++;
        counter.textContent = totalWords;
        
    } else {
        totalspaces++;
        counter.textContent =totalspaces;
    }

    console.log(totalWords , totalspaces);
})







































