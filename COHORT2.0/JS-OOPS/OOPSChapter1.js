//OBJECT ORIENTED PROGRAMING
//===========================
//CODE CLEAN AUR MODULAR Aur scable maintanable hoo isko achive karne ke liye OOPS ka use kiya jata hai
//CODE CLASSES OBJECT AUR FUNCTIOIN KE THROUGH AUTOMATE KARTE 
let user1 = {
    name: "prashant tiwari",
    age: 24
}

let user2 =
{
    name: "Aryan Rastogi",
    age: 13
}


class Bottle {
    //class-->bluprint of object

//construnctor ---> class ke obj ke liye value aur properties bana ta hai   
    constructor() {
        this.name = "dogesh";
        this.price = 100;
    }
    // constructor(name, price) {//construnctor ---> class ke obj ke liye value aur properties bana ta hai        this.name = name;
    //     this.price = price;
    // }
    fill() {
        console.log(`${this.name} is filled`);
    }
    drink() {
        console.log(`${this.name} is drunk`);
    }
}

//new object bottle type lkar creted
let newBottle = new Bottle("Coke", 20);//value diff hogi khar object ki
//object class kw blue print ko follow karta hai


//let nayaBottle = new sameBottle();//object ki valued of properties same hogi

console.log(newBottle);

//PROTOTYPES:
//===============

// class ki ase property so ya  function jo sare obects ke liye same hogi use class melikna stupidity hogui use ham class ke bahar prototype ka use karenge

//example:
  

class Car{
    constructor(name, price){
this.name = "ferrari";
this.price = 100;

    }//constructor-->class ke obj ke liye value aur properties bana ta ha
}


Car.prototype.Engine = function(){
    //code for engine of car which will be samr for all object og Car class.
}


//this keyword
//==================

/**
 * this special keyword ---> iski value use hone vali jagah se badal jati
 * this keyword risto ki tarah hai entity ke paspective me chage ho ja ta hai ex me ani mom ke liye beta hu bar apne mama  ka bhanja hu 
 */

//ALL RELATIONS WHERE CHANGE IS SCEAN IN THIS KEYWORD
//----------------------------------------------------

//GLOBALLY-----> window
console.log(typeof(this),this);

//IN FUNCTION0---> window
function func(){
    console.log(typeof(this),this);
}


//obj---> func(ES5)
const objz = {
    x:function(){
        console.log(typeof(this),this)//THIS  is parent object objz  ko hi reffer kar ga 
    }
}
objz.x();

const objx = {
    x:()=>{
        console.log(typeof(this),this)
    }
}
objx.x();

//obj-->function(ES5)--> functi(es5)====> obj
const obj2 = {
    x:function(){
       function func(){
         console.log(typeof(this),this)
       }
       func();
    }
}
obj2.x();

//obj-->function(ES5)--> functi(es6)====> obj
const obj3 = {
    x:function(){
        ()=>{
            console.log(typeof(this),this)
        }  
      
    }
    
}

obj3.x();

//akk func me this ki val window hoti hai aur ham cahte hai ki vo object ho koi aur sa thr=en ham use kar sakte hai call apply and bind ka



//obj---> func(ES5)

let obj = {
    name:"jai"
}

function abcd(){
    console.log(this);
}

//APPLY CALL BIND
//==================
abcd.call(obj , 1,2,3);//1,2 3 are the parameters of thwe function 

abcd.apply(obj,[1,2,3]);///first val this ki value , and next akk array of parameters

let newAbcd = abcd.bind(obj,1,2,3);
//console.log(newAbcd);r






























