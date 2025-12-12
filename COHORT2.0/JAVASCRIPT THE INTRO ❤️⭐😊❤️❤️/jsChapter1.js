//!JS KI KAHANI
//!=================


//1995 me Brendan Eich ne 15 din me js banai thi
//computr reads ---> jai--> interpreter/ compliler ---->101010100101010101
//js ke papa Brendan Eich
//company Netscape
//first name Mocha, then LiveScript, finally JavaScript
//JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic content on the web. It is a versatile language that can be used for both client-side and server-side development.
//15 din me eic ne js bana to error aur bugs honge hi
//badd me kaii version aayi  par biggst change aya ES6 me (major issu fix kardia)js kafi badal gaya pura

//js only brower ke liye banai gai thi
//ecma international ne standardize kar diya js ko taaki alag alag browser me same behave kare
//js ko hum html me <script> tag ke andar likhte hai ya alag se .js file bana ke link karte hai



//why js important
//its used in animation , form validation, interactive maps, dynamic content updates etc
//1. Client-Side Scripting: js se hum web pages ko interactive bana sakte hai
//2. Server-Side Scripting: js se hum server side applications bhi bana sakte hai(node.js ke through)
//3. Versatility: js se hum web, mobile aur desktop applications bana sakte hai
//4. Large Community: js ke paas bahut bada community support hai jisme kaii developers hai jo naye naye tools aur libraries banate rehte hai
//1. Web Development: js web development me sabse jyada use hota hai
//2. Versatility: js se hum front-end aur back-end dono bana sakte hai
//3. Large Ecosystem: js ke paas bahut bada ecosystem hai jisme kaii libraries aur frameworks hai jaise react, angular, vue, node.js etc
//5. Career Opportunities: js developers ki demand bahut jyada hai job market me


console.log("JavaScript is working!");
//SCOPE in JavaScript


var a = 10; // global scope -- har jagah acessable hai ye

{
    //var wont respect its block scope
    let c = 30; // block scope--- only in blockes
}
function testScope() {
    var d = 40; // function scope -- only acssable in a function

    console.log("Inside function:", a, b, c, d, e, f);
}



//!Reassignment and Redeclaration
//!================================
var x1 = 20
x = 30; // reassignment--- value change kar diya variable
//var window me add karta hai
var y1 = 20
var y1 = 30; // redeclaration(problem hai ye)--- already declared hai fir se kar diya (let me nahi hoga)

//*Temporal Dead Zone (TDZ)-->js ko pata hai ki variable exist katrta to hai par use asses kar ke nahi dekk sakta abhi. uintialization se pehle access karne ki koshish karna
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a2 = 12;


//Hoisting--> JavaScript me variable aur function declarations ko unke scope ke top par leke jata hai kon javascript 




// console.log(b); // undefined
// var b2 = 10;




//69------above code is equal to
var b2 = undefined;
b2 = 10;
/**
 * var --> hoist --> undefined
 * let --> hoist -->X
 * const --> hoist -->X
 * 
 */

var x3 = 1;
{
    var x3 = 2;/*var block ki rspect nahi kata func ki karta haiisilye block ka hona na hona uske liye same hai
    thats why dono x3s global scope hojaye ge aurx3 =2  x3= 1   ko overwrite kardega*/
}

console.log(x3);//2



let a4 = 30;

{
    let a4 = 12;
    console.log("inside block", a4);
}
console.log("outside block", a4);

if (true) {
    // let f = 20;//notdefined
    var g = 30;//var if for ki respect nahi karta par func ki karta hai
    const h = 40;
}
//   console.log(f);
console.log(g);
/* const person ={name:"jai"}
// person.name = "jai2";
// console.log(person);
// person ={};
// console.log(person);*/



//!DATA TYPES-> Primitive vs reference type
//!=========================================


//premitive = string, number , boolean , null, undefined, symbol
/**data copy hota hai directly
 * 
 */
var h = 3;
var k = h;//k me h ki value par h ki value change kare par k ki value change nahi hoga
console.log(k, h + 1);
//reference = object, array, function, date, regex, error etc
//any thing in asny tpe of brackets[]{}() are reference typr of data

var arr = [1, 2, 3];
var arr2 = arr;
arr2.push(4);
console.log(arr, arr2);//[1, 2, 3, 4] [1, 2, 3, 4]
/**
 * arr2 me arr ko copy kar dene se jab arr me change hoge to arr me bhi show hoge knuki arr2 me arr ka reference gaya hai proper value copy nahi hui hao
 */


//*Primitive typs
//Strings("" '' ``)

var name = "jai";
var name2 = name;
name2 = "jai2";
console.log(name, name2);//jai jai2

//calcution using `` is called template literals
console.log(`jai ${2+2}`);


//split
var str = "jai is great student";
var str3 = str.split()
var str2 = str.split("");
console.log(str2);//['j', 'a', 'i']
console.log(str3);
 var st4 = str.split("e");//['jai is gr', 'at student'] here e is a separator


//includes
//checks whether a string contains a substring
var str = "jai is great student";
console.log(str.includes("great"));//true
console.log(str.includes("great2"));//false

//indexof
//returns the index of the first occurrence of a substring in a string
var str = "jai is great student";
console.log(str.indexOf("great"));//6
console.log(str.indexOf("great2"));//-1

//Statements
//fixed code jo ak anser de  de is statement in js
var x = 34;//koi output produce naho karta 



//Expressions
//dynamic code jo ak anser de  de is expression in js
var y = 45 + 89;//value produce huii to expression
console.log(y);//134



var num = 10;
var num2 = num;
num2 = 20;
console.log(num, num2);//10 20


//Boolean
var bool = true;
var bool2 = bool;
bool2 = false;
console.log(bool, bool2);//true false


//Null(null ar a value ham dete hai variable me)
var null1 = null;//null janbuch kar koi value nahi di
var null2 = null1;
null2 = null;
console.log(null1, null2);//null null

//undefined = variable banaya , value nahi di , default value undefined hota hai (ham nahi dete)




//*symbols.❌❌⭐⭐
//=========
/**
 * unique immutable primitive value
 * Symbol is a primitive data type introduced in ES6.
It’s used to create unique identifiers —


*even if two symbols have the same description, they’re never equal.

Symbols are often used when you want to add properties to an object that shouldn’t accidentally conflict with other keys.
 */

const user ={
    name:"Prashant",
    age:18
}

const id= Symbol("id");
user[id] = 101;

console.log(user);
console.log(Object.keys(user));//[name ,age ] Symbol is hidden beause it is unique value

//*BigInT

// BigInt is a special numeric type introduced in ES2020.
// It’s used for very large integers that can’t fit in JavaScript’s normal Number (which can safely go only up to 2^53 - 1).
var s = 9007199254740991n;// n at the end makes it bigint for larger value than Number (which can safely go only up to 2^53 - 1)



//console.log vs console.info
console.log("hello");//print the contnt in console
console.info("hello");//ℹ️ ak i icone bas ajata hai 
console.alert("hello");//alert
console.warn("hello");//warning
console.error("hello");//error


//!Assignment
//!=================
// var sum2 =0;
// for(let x =1 ;x<=20;x++){
//     if(x%2 == 0) {
//         sum2 = sum2 + x;
//     console.log(x);}
// }
// console.log(sum2);


//?print a pattern
for(let i=1;i<=4;i++){
    let star =""
    for(let j=1;j<=i;j++){
        console.log(star + "*")
    }
   // console.log(" ")
}

// for (let i = 1; i <= 3; i++) {
//   for (let j = i; j <= 3; j++) {
//     console.log(i + j);
//   }
// }



// /**
//  * i=1,j=1,2,3--> 2,3,4
//  * i=2, j=2,3-->4,5
//  * i=3,j=3-->6
//  */

// for(let i =10; i>= 0;i--){
//     if(i == 5) continue;
//     console.log(i);
// }


var num = 432;
var newNum ="";
while(num != 0) {
    newNum =newNum + Math.floor( num%10);
    num = Math.floor(num/10);
}
console.log(newNum);



for(let i=1;i<=50;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBizz")
    }
    if(i%3 == 0){
        console.log("Fizz");
    }
    if(i%5 == 0){
        console.log("Buzz");
    }
    
}




/**
 * i=1,j=1,2,3===>2,3,4
 * i=2,j=2,3===>4,5
 * i=3,j=3===>6
 */

function sum(a,b){
    return a+b;
}

console.log(sum(3,6));





 //first order function
 function f1(){
    console.log("jai")
}



 function f2(val) {
val()
 }

 f2(f1)//call 