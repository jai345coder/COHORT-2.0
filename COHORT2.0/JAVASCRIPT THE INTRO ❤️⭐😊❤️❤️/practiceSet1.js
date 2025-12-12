

let age  = prompt("apni age bataoo")
function Age(age){

 if(age === null || age < 0 ) {
     console.error("bata na bhai! pada nahi hu kya bhi");
 }   

else if(isNaN(age)){
     console.error("bkl age bata ne me teri gand fat rahi hai kya ");
 }

else if(age.trim() === "") {
     console.error("ma cuda bharve ");
 }
else if(age >= 18){
    console.log("adult");
}
else{
    console.log(`minor: abhi ${18 - age} sal wate kar cuzze ` );
}
}


Age(age);      




for(let i =1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}



let count=0;

for(let i=1;i<=15;i++)
{
    if(i > 8){
        count++;
    }
}

console.log(count);


let x = " 456"
//let password = prompt("enter password");
function Password(password) {

    if (password === null || password.trim() === "") {
        console.error("bkl password bata ne me teri gand fat rahi hai kya ");

    }
    if (password === x) {
        console.error("password is invalid");
    }
    else {
        console.log("password is valid");
    }
}
//  Password(password);




//level 2
//allow only 3 attempts to enter the correct password
// let x2 = "24343"


function attempt_to_enter_password(pass) {
    let attempt = 0;
    while (attempt != 3) {
        let pass = prompt("password bataooo....")
        if (pass === null || pass.trim() === "") {
            console.error("bkl password bata ne me teri gand fat rahi hai kya ");
            attempt++;
        }
        if (pass === x2) {
            console.log("password is valid");
            break;
        } else {
            alert("password is invalid");
            attempt++;
        }
    }

    if (attempt === 3) {
        console.log("password is blocked");
    }
}


let isValid = function (pass) {
    if (pass === null || pass.trim() == "") {
        console.error("bkl  bata ne me teri gand fat rahi hai kya ");
        //  attempt++;
        return false;

    }
}

//tesattempt_to_enter_password(x2);





//Q12: Ask user for words until they type "stop" . count how many times they typed "stop"
let word;
function Word_Counter() {
    let count = 0;
    while (word !== "stop") {

        word = prompt("enter word");
        if (isValid(word) === false) continue;
        if (word === "yes") count++;
    }
    console.log(count);
}

//Word_Counter();



// //Q13:print no divisble by 7 from 1 to 50
for(let i=1;i<=50;i++){
    if(i%7 === 0) console.log(i);
}



//doult❌❌❌❌
let val = 0;
function numberCountUnlessEven(val){
    while(val %2 !== 0){
       val =parseInt(prompt("enter number"));
       if(isValid(val) === false) continue;
        console.log(val);

    }
}

//numberCountUnlessEven(val);

let Add = 0;
//Q15:loop from 1 to 30 and take sum of odd nums
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) Add++;
}
console.log(Add);


//Q 16:print num btw two user input , inoput start and end using prompt
let start = prompt("enter the starting elem");
let end =prompt("enter the end number");

if(start === end) console.log(start);
if(start > 0 && end > 0 && end > start){
    console.error("backcodi matt kar dharve");
}

//handle negative numbers
for(let i = start ; i<=end;i++){
    console.log(i);
}


//Q17:print first three odd SVGAnimatedNumberL

const number =0;
let f =1
while(number != 3){
if(f %2 !== 0) console.log(f);
number++;
f++;
}


//q18:Ask user 5 numbrs . cou t how many are prositivee Uselops + consdtins + countewr
let a = 5;
let even = 0;
let odd = 0;
function countPostive_Negative(number) {
    while (a != 0) {
        let number = prompt("enter a number");
        if (isValid(number) === false) continue;
        number = parseInt(number);
        if (number % 2 === 0) even++;
        if (number % 2 !== 0) odd++;
        a--;
    }

    console.log("even number:", even, "odd number:", odd)
}
//countPostive_Negative(5)





//Q19:ATM STIMULATOR - Allow 3 withdralls start with $1000 balance .Ask withdrawll amount 3 times else ---> print insufficient funds
//also ask for pin
let balance = 1000;

let code = 2345;
function check_Balance(amount) {

    let attempt = 0;
    let pass = prompt("enter the pin")
    if (pass != code) {
        console.error("password invalid");
    } else {
        while (attempt !== 3) {

            let withdraw = prompt("enter amount");

            if (isValid(withdraw) === false) { continue; } else if (withdraw === "stop") {
                break;
            }
            withdraw = parseInt(withdraw)
            if (amount >= withdraw) {
                amount = amount - withdraw;
                console.log(`withdraw of ${withdraw} is successful`)
                console.log(`Amount (After withdraw) = ${amount}`)
            } else {
                console.log("insufficent balance")
                break;
            }
       attempt++; }
    }
}

check_Balance(balance);




