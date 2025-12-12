//!Javascript functions
//!========================

//code likk diya aur app cahte hai ki vo turant nahi calle tab calle jab me use bullu ya kisi aur se bullva ke chavallu

console.log("tunant chal gaya");

//function kisi bhi nam se bano par number sumbols(&^$&$&$^) ya keywords use nahi kar sakte
function challo() {
    console.log("bulla ne par challa");
}

challo();



//!WAYS TO AMKE A FUNCTION:
//!==========================



//?1. Function Declaration
function functionName2() {
    console.log("bulla ne par challa");
}

functionName2();

//?2.function expression
const functionName3 = function () {
    console.log("bulla ne par challa");
}

//?3. Arrow Function
const functionName4 = () => {
    console.log("bulla ne par challa");
}





//!PARAMERTERS AND ARGUMENTS
//!==========================


function dance(animal) {//animal is a parameter
    console.log(`${animal} dancs kar raha hai`);
}

dance("cat");//real value is parameters
dance("dog");
dance("dinosaur")
dance("sher")


function sum(a, b) {
    console.log(a + b);
}
sum(3, 5)




//how to handle multiple argiuments in function

function printer(...vals) {
    console.log(vals);
    console.log(vals[6]);
}
//sari values ya arguments ki val function ko akk array ke ti tarah call kar sakte hai aur index ke through access kar sakte hai

printer(1, 2, 3, 4, 5, 6, 7, 8);


//!return 
/**
 * return statement is used to return a value from a function
 * jo bhi function me bane fga jike liye fubc call hua tha uska value return hota hai
 */

// function f1(bolo) {
//     if (bola === "kar de") return console.log("bhai ye mene bejj diya")
// }

f1("kar de");



//!FIRST CLASS FUNCTION
//!====================

//*1. function can be stored in a variable ,array , object

//*2. function can be passed as an argument to another function

function f2(f3) {
    f3();
}
//*function jo argument me bejja jaye ga uska nam nahi likte , parameter hi uska nam hota hai function me


f2(function () {
    console.log("bulla ne par challa");
})

//?*3. function can be returned from another function

function parent() {
    return function child() {
        console.log("chall gaya")
    }
}

parent()();


//!HIGHER ORDER FUNCTION
//!========================
//jo function return kare another func ya acept kare another functionas as argument vo higher order functions hote hai.

function HigherOrderFunction(callback) {//*higher order function
    callback();

    return function child() {//first class function
        console.log("chall gaya")
    }
}

HigherOrderFunction(function () {//first class function
    console.log("bulla ne par challa");
})

//!pure vs impure function
//!==========================


//true==> jo bhar ki val ko na badle 
let x = 10;
function ABC() {
    console.log("bulla ne par challa");
}

//impure==> jo bhar ki val ko badl de
function XYZ() {
    x++;//changes a outer value
    console.log("bulla ne par challa");
}

//!CLOSURE
//!==========================
//*ak function jo return kare another function kehlata hai closure, aur return hone val function apne parent func (jis)

function outer() {
    let a = 10;
    let b = 20;
    return function inner() {

        console.log(a, b);
    }

}
outer();



// function sum(a,b){
//     console.log(a+b);
// }
// sum(3,8)//a=3 , b=8---> calll 



function f1(){
    console.log("ye run hoga")
}

f1()

function f2(){

}

f2()


function Fibonacci( n){
    let a =0;
    let b =1;
 
    for(let i=0;i<=n;i++){
       
      
       console.log(a+b);
       b=a ;
       b= a+b;
    }
}

Fibonacci(20);



//!lexical scoping 
//!==========================

/**
 * lexical scoping can be defined as the way in which variables are accessible inside a function . there can be two types of scoping
 */
function abcd(){
   let a = 10;
   function efjg(){
    let b =20;

    function ghjkl(){
        let c = 30;
        console.log(a,b,c);
    }
   
   }
}



//todo : douts

//1. higher order function vs clousers ??
//hof --> anotert function retunr kare ya parameter ki tarah accept kare 



//clousers ---> jab a func return kare akk function aur return hone vala functin parent func ke sare variables ke ko bhi variable .. thats called clouser 

//?key point higer order function ha func ka func return karna par clouser hai us return kiga ye func kar return karn vale function ke variabls ko use kar pana .. that the diff ernce guyes..




//!iifes (immediately invokable function expression)
//!===================================================

//immedialty invoke --- turant callega 
(function(){

}
)();

console.log("this is not doinr")
function sumShip(v , w){
    console.log(v+w);
}


//!hoisting  in function
//!==========================
// abcd();
// abcd()
//function satement hoist hote hai par function expression nahi hoist hote hai


var ABCD = function(){
    console.log("bulla ne par challa");
}


function abcd(){
    console.log("bulla ne par challa");
}


//level 1

//Q1. Whats the diff betw func dec and express in terms of hoisting ?
 //* function dec histing hoti hai par expression me nahi hoti


//Q2 Use rest parameter to accept any number of scores ands the total.
function  sum(...val){
    let sum = 0;
    for(let i=0;i<val.length;i++){
        sum += val[i];
    }
    console.log(sum);
}

sum(2,4,2,4,5,3,2,1,4,6,7,8,9,5,4,3,3,2);


function sum2(...score){
    let sum =0;
    score.forEach(function(val){
        sum += val;
    })

    console.log(sum);
}

sum2(2,4,2);





/**
 * Returns a function that calculates the discount of a given price
 * based on the specified discount percentage.
 * 
 * @param {number} discount - The discount percentage.
 * @return {function} A function that takes a price and returns the
 *                  discounted price.
 */
function discountCalculator(discount){
    return function (price){
        // Calculate the discount amount
        let discountAmount = price * (discount / 100);
        
        // Return the discounted price
        return price - discountAmount;
    };
}


let ten = discountCalculator(10);
let twenty = discountCalculator(20);


console.log(ten(100));
console.log(twenty(100));




function counter(){
    let count =0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());


let d = counter();
console.log(d());




function example(){
     return function(){
        console.log("function is retured")
     }
}


example()();


let evenNumbers = [2,4,6,8,45,56,10.99,12,14,16]; 
function isEven(arrays){
    arrays.forEach(function(val){
        if(val % 2 == 0) console.log(val);
    })
}


isEven(evenNumbers);



function AddTax(amount){
    let tax =0;
    return function(tax){
        return tax++;
    }
}


let taxday1 = AddTax(10);

console.log(taxday1(100));
console.log(taxday1(100));
console.log(taxday1(200));




function welcome(name){
    console.log(`welcome ${name}`);
}

welcome("shubham");






































































