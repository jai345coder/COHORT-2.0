console.log("good to go");

//EASY
//======
//Q1 function to great 

 function Greet(name){
    return `hello ${name}`
 }



Greet("jai");



//Q2 create  functon retunr ing another function giving " welcome"

function MakeGreet(){
    return function (){
        console.log("welcome")
    }
}

MakeGreet()();


//Q3 function sum pf two numbers returned''

function sum(a,b){
return a+b;
}
sum(4,7);

//Q4 function takes a another func and excutes it twice
function runTwice(func){
    func()
    func()
}

runTwice(function(){
    console.log("hello this runs code")
})


//Q5 create Counter Closure:
// Write a function createCounter() that returns two functions:

// increment() → increases count by 1

// getCount() → returns the current count

 function CreateCounter(){
    let count =0;
    return function ADDCount(count){// return two functions
        return count++;
    } , function GetCount(count){
        return count;
    }
 }
//Q6 Custom Multiply:
// Write a function multiplyBy(num) that returns a new function that multiplies its argument by num.
// Example:

function MultiplyBy(num){
    return function multoply(val){
        return  num*val
    }
}

let multi = MultiplyBy(3);//this value is passed to function
console.log(multi(3))//9



//Q7 Write a higher-order function repeat(fn, times) that runs fn exactly times times.
function repeat(fn , times){
    for(let i=0;i<times;i++){
        fn();
    }
}

// repeat(function (){
//     console.log("hello")
// } , 5);






//Q8 Fix the Closure Bug:
// Predict and fix this code so it logs 0,1,2 (not 3,3,3):
//not studeied ❌❌⚠️⚠️⚠️
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


//Q9 Create a function once(fn) that allows a function to be called only once.
// Example:

console.log("Q9");
function AttemptCounter(){
    let count =0;//1
  
    return function(){
       if(count === 1) {
        console.log("Nothing")
       }else{
        console.log("hello" + count);
        count++;
       }
       
    }
   


}

let attempt = AttemptCounter();
attempt();
attempt();
attempt();


//CUSTOM MAP
//===============
//*Q10 Write your own version  of the map() function called myMap(arr , fn) using loops and callbacks
function myMap(arr , func){
    let N = arr.length;
    let newArr = new Array(N);
    for(let i =0;i<=N-1;i++){
    newArr[i] = func(arr[i]);
    }

    return newArr;
}

let arr = [1,2,3,4,5];
let arr2 = myMap(arr , function(val){
    return val*2;
})
 console.log(arr2);




//Data Privacy  Example
//============================

//Create a closure-based object account() that hides the balance but allows deposit() and checkBalance() methods.

let Account5756 = {
    Name:"Prashant Tiwari",
    AccNo:"AC4u9r04",
    Balance:function(){
        const pass = prompt("enter the password");
        const balance = 1000;
       if(pass === "1234"){
       console.log("your balance is " + balance);
       }else{
        console.log("wrong password");
       }
    }
}


console.log(Account5756.Name)
let amount = Account5756.Balance();
console.log(amount);



//*Simple Logger(HOF)
//*=====================
//Write a higher-order function withLogging(fn) that prints "Function start" and "Function end" before and after running fn.

function hello(){
    console.log("hello")
}

console.log("start of function");
hello();
console.log("end of function");




