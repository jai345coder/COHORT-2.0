//TODO: Arrr  Arrays in JAVASCRIPT
//!===================================

let arr = [23,54,89,75,98 ];

//if you want to acces a n elem which is not in the array  first you are bkl and sceeonfd it will give undefined



//!MeTHODS IN ARRAYS
//!==========================

arr.push(45); //add elem at last
arr.pop(); //remove elem from last
arr.shift(); //remove elem from first
arr.unshift(45); //add elem at first 


arr.indexOf(45); //return index of element
arr.includes(45); //return true or false
arr.reverse(); //reverse the array
//reverse me arr ki copy nahi banti actal array hi reverse hota hai yaha
arr.sort(); //sort the array
let sr = arr.sort(function(a,b){
    return a-b//sort in accending order
})

let sc = arr.sort(function(a,b){
    return b-a//sort in decending order
})

arr.join(); //join the array
arr.slice(); //slice the array
arr.splice(); //splice the array---> remove the a range of elemnts from arr


function fun1(){
    console.log("hello");
}

function fun2(){
    console.log("hi");
}


//!FOR LOOP AND FOR EACH
//!==========================

//for each original array ko effect nhi karta hai
let arr2 = [4,6,2,8,2,9,3,8,4,2]
let ans = new Array();
arr2.forEach(function(elem){
   ans.push(elem*2);
})

let newArr = new Array(5);
newArr.push(10);
newArr.push(20);
newArr.push(30);
newArr.push(40);
newArr.push(50);
console.log(newArr);
//ya ha akk anomaly hai js 

for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}


// ❌ Wrong / Confusing Way
let arr3 = new Array(5); // 5 empty slots bane, but koi value nahi dali
arr3.push(10); //push alredy existing index ko check nahi kat a bas back se new value dal deta hai ye directly end me add karega (index 5)
console.log(arr); 
// Output: [ <5 empty items>, 10 ]  --> length = 6

// ✅ Right Way 1 (empty se start karo)
let arr1 = []; // khali array
arr1.push(10, 20, 30, 40, 50); // ab 5 values push karo
console.log(arr1); 
// Output: [10, 20, 30, 40, 50]

// ✅ Right Way 2 (pehle fill kar lo)
let arrs = new Array(5).fill(0); // sab jagah 0 bhar diya
arr2.push(10); // ab 10 end me add karega
console.log(arr2);
// Output: [0, 0, 0, 0, 0, 10]


//!MAP FILTER REDUCE:
//!======================

//MAP: map tab use karna jab apko new array bana hai  pichale array ke data ko use kar ke basus ki tarah ya us arrr ke har elem val koi opr kar ke new array me store karna hai
 let Mapped = [ 1,2,3,4,5];

 let newMapped = Mapped.map(function(elem){
    return elem+3;
    ///val ya elem return kar mandatoy else undefind ayye ga 
 })


 console.log("Map:",Mapped)




//FILTER: filter given arra yme se accoring to give function ot condition elems ko filter kar tha hai' for example 

let filtered = Mapped.filter(function(elem){
    if(elem%2 === 0) return elem;
});


let filtered2 = Mapped.filter(function(elem){
    if(elem%2 === 0) return true;
});
console.log("filter :" ,filtered);
console.log("filter :" ,filtered2);



//REDUCE: 
//accumulaotor me woo add hoga ga jo reduce kar function return hoga aur jabtak array end tak nahi aa jata tab tak vo operation hota rahe ga aur return hokar accumator me aa jaye ga . End me accumulator ko return karega
let Reduced = Mapped.reduce(function(accumulator , val){
    return accumulator + val;
})
//?Dry run
//?---------------

//accumulator = 0
//val = 1
//accumulator = 0 + 1 = 1
//val = 2
//accumulator = 1 + 2 = 3
//val = 3
//accumulator = 3 + 3 = 6
//val = 4
//accumulator = 6 + 4 = 10
//val = 5
//accumulator = 10 + 5 = 15

console.log(Reduced);




//!FIND AND SOME AND EVERY
//!==========================
//FIND: find value arr me dund kar us value ko return kar  store kar dega
let arr4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let found = arr4.find(function(elem){
    return elem === 5;
})



let obj = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 25},
    {name: "Alice", age: 40}
]



let age = obj.find(function(elem){
    return elem.age === 25;
}   )
//*it will only reutn age 25 of john but not of Bob


//SOME: koi bhi some ke func ki  condstion satify karge (arr ke elemes se) to true retun hoga else false
let arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let some = arr5.some(function(elem){
    return elem > 10;
})//output: true



//Accessing Array elemd in diff variables in one time
//=====================================================

let arr6 = [2,5,1,7,2,4,9];
//let [a,b] = arr6;
console.log(a,b)//a=2 , b=5
let [a,b,,c] = arr6;//c=9 , a=2 , b=5 , jisko nahi lena use ,, layga jat hai



let arrv = [3,5,6,9,2,2,1,3,5,5,6];
let arrn = [...arrv];//spread optr is used for copying an array
//change in arrn will not effect arrv
arrn[0] = 10;
console.log(arrv,arrn);//[ 3, 5, 6, 9, 2, 2, 1, 3, 5, 5, 6 ] [ 10, 5, 6, 9, 2, 2, 1, 3, 5, 5, 6 ]



