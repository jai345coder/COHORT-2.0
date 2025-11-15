//CONTROL FLOW IN JS
//==================
//if else else-if
//swtich case
//early return pattern
//1. Conditional Statements
var value = 10;
if (value > 10) {
    console.log("Value is greater than 10");
} else if (value < 10) {
    console.log("Value is less than 10");
} else {
    console.log("Value is equal to 10");
}
//2. Loops
//3. Switch Statements
val = 3;
switch (val) {
    case 1:
        console.log("Value is 1");
        break;//if brak is not there then it will go to next case
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("Value is not 1 or 2");
        break;
}


//function for marking grades 
function getGrades(scores) {
    if (scores >= 90 && scores <= 100) {
        console.log("A");
    } else if (scores >= 80) {
        console.log("B");
    } else if (scores >= 70) {
        console.log("C");
    } else if (scores >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

console.log(getGrades(68))
var choice2 = ['sissor' , 'rock' , 'paper']

function Computer(choice2) {
    if(!choice2 || choice2.length === 0) return undefined;
    const idx = Math.floor(Math.random() * choice2.length);
    return choice2[idx];
}
//rock paper sissor
function rps(choice1, choice2) {
    if (choice1 == 'rock' && choice2 === 'sissor') {
        console.log('rock wins')
    } else if (choice1 == 'paper' && choice2 == 'rock' || choice1 == 'rock' && choice2 == 'paper') {
        console.log('paper wins')
    } else if (choice1 == 'sissor' && choice2 == 'rock' || choice1 == 'rock' && choice2 == 'sissor') {
        console.log('sissors wins')
    }else{
    console.log('tie')
}
}

rps('rock' , Computer(choice2));

/*LOOPS IN JS
================
1.for loop 
2.while loop 
3.for each 
4. do while loop

.*/


// //loop ==> kaha se jana hai --> kese jana hai ----> kaha tak jana hai
// var start = 3;
// while(start <= 10){
//     console.log(start);
// }

// //print 1 to 10 numbers
// for(let i=0;i<11;i++){
// console.log(i);
// }

// //q2. while loop from 10 to 1
// let x = 10;
// while(x > 0){
//     console.log(x);
//     x--;
// }


// for(let j =10; j>0;j--){
//     console.log(j);
// }

// //Q3: even number from 1 to 20
// for(let i =1;i<=20;i++){
//     if(i%2 == 0) console.log(i);
// }

// //Q4 print odd numbrs from 1 to 20
// for(let i =1;i<=20;i++){
//     if(i%2 != 0) console.log(i);
// }


// //Q5: mutiplication tabl for 5
// for(let m = 5;m<=10;m++){
//     console.log(5 * m);
// }


// //Q6 Sum of Numbers from 1 to 100
// let sum =0;
// for(let i= 0;i<=100;i++){
//     sum = sum + i;
// }
// console.log(sum);


// //Q7 print numrs dvisable by 3
//   for(let x =1;x <= 50;x++){
//     if(x%3 === 0) console.log(x);
// }


// //Q8 : print 1 t0 a  nuber 
// var number = prompt("give a number");
// for(let i=1; i<=number;i++){
// console.log(i);
// }

// //Q9:number divisible by 3 qnd 5 btw 1 and 100'

// for(let i =0;i<=100;i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }
// }

console.log(10)

//break and continue
//Q loop from 1 to 100 and when find th first elem divisible by 7 break the loop
// for(let i=1;i<=100;i++){
//     if(i%7 === 0){
        
//         break;
//     }
//     console.log(i);
// }


//10 loop from 1 to 100 print only first 5 odd numbers
var count =0;
for(let i=1;i<=100;i++){
   
    if(i%2 !== 0 ){
        console.log(i);
      count++;
      

    }if(count === 5){
        break;
    }
}




