//*Reference Data Types
//=======================

//bracket me hai to ref value hai 
//copy nahi kar sakte ===>  arr1 != arr2 varna agar arr2 me changes hue to arr1 me bhi honge

//Dynamic Typing
//=======================

/**
 * js me dynamic data typing hoti hai matlab app data ko change kar sakte ho with its type
 */

var a =10;//number
a = true;//boolean
a= 'jai'//string

//how check type ?
console.log(typeof a);//typeof me humne array bhi check kar sakte hai


//! why this is this?? type of galat bata deta hai
typeof NaN;//number-> NaN is a faild number or (string * int == NaN) so its type is number
typeof null;//object
typeof undefined;//undefined


//quirks--💡💡💡💡
//*Type Coercion--->concept one type converts to another to type
"5" + 1// no possible in other programming languages
console.log("5" + 1);//51
//?'+' do kam kart hai numerical add ke alva string concat bhi karta hai
//ak bhi operand string nikal gaya  to add  concat ka kam kare ga
 

//add do kam karta hai add and concat but sub tract akk akam hi karta hai to subtract to string aur num ka (-) ke sath subtraction hi hoga
'5' - 1;//4
console.log('5' - 1) ;//4




//*truthy and  falsey
//===========================
//falsey values -> false, null, undefined, 0, "", NaN ,document.all

//truthy values -> not falsey values


//prompt vs Alert
//===============
//prompt is a blocking function
//alert is a non blocking function


let value = prompt("hello");
console.log();//non blockingjai
alert("hello");



//*Assignment , Arithmetic , Logical unary , ternary operator
//===========================================================


//Arthmetic operator
//===================
//+ , - , * , / , % , ** , ++ , -- , += , -= , *= , /= , %= , **=
//Example
let c = 10;
let v = 30;
console.log(c + v , c - v, c * v, c / v, c % v, c ** v, c++, c--, c += v, c -= v, c *= v, c /= v, c %= v, c **= v);//40

//Compaisonal operator
//=====================
//== , != , > , < , >= , <=
//Example
let a = 10;
let b = 30;
console.log(a == b , a != b, a > b, a < b, a >= b, a <= b);//false , true , false , true , false , true\

//note ⚠️⚠️⚠️
//== , != are not strict 
//=== , !== are strict



//Logical operator
//=====================
//&& , || , ! (not)
//Example
let a = 10;
let bs = 30;
console.log(a == bs && a > bs, a == bs || a > bs, !a == bs);//false , true , true

//?truthu and falsy? !!
//Example
let a = 10;
let bx = 30;
console.log(!!a , !!bx);//true , true



//Ternary operator
//=====================
//condition ? true : false
//Example
let a = 10;
let bass = 30;
console.log(a == bs ? "true" : "false");//false


//12 == '12' //true doubl equal keval value dekta hai type nahi
//12 === '12' //false triple qual value aur type dono dekk ta hai



// Assignment operator
// =====================
// += , -= , *= , /= , %= , **=


//unary operator
//=====================
//++ , --
//Example
let a = 10;
let bz = 30;
console.log(++a , --bz);//11 , 29


//ternary operator
//=================

//?:
var condition = true;
condition ? true : false
//Example
12 > 13 ? console.log("true") : console.log("false");//false


//typeof instanceof
//=================
//typeof
typeof null //object


//instanceof --> instance of means 

//is variable or object is instance of class or body
//Example
var a = 10;
var arr = [1,2,3];
console.log(typeof a , a instanceof Number);//number , true
console.log(typeof arr , arr instanceof Array);//object , true

//trick to convet int to str
//="5"

//a++ ---> 
let x =10;
x++;
console.log(x);//10
++x;
console.log(x);//12




















