//ADVANCE JAVASCRIPT 
//=========================

//*SCOPE
//------
/**scope kisi variable ya function ke scope ko bata hai
 * 
 */
//functional scope
function abcd() {
    let a = 10;// a ka scope function abcdtak hai uske bahar nahi
}

//block scope 
{
    let a = 10;// a ka scope block({},(),[]) me hoga uske bahr nahi
}


//global scope
let a = 10; // a ka scope global me hoga har jagah ho sakta hai

//EXECUTION CONTEXT
//==================
//js jese hi aapka function dekta hai use time ak exection context bana detah hai , je akk process hai jo ki do different phases mein chalta hai memmory phase and doose ka nam hai execution context---->(Abstract concept)


//Memory creation phase
function afid() {//execution context create ko gaya
    //function ka sab kuch anadar store hoga aur usei me exect=uetion [ase]
    let a = 10;
    let b = 23;
    let c = 30;
}

//execution phase
//garbage collection phase


//LEXICAL SCOPING VS DYNAMIC SCOPING
//==================================


//lexical scoping----> lexical scoping can be defined as the way in which variables are accessible inside a function even if that function has smany sub function it would be ablebale to access thosefunction too . there can be two types of scoping
function abc() {
    let a = 10;
    function bcd() {
        let b = 20;
        function cde() {
            let c = 30;
        }
    }
}


let a3 = 10;
//dynamic scoping------> kaha se call kar rahe ho useke pata cale ga kya value mile gi not uski physical location 
function bfoe() {
    console.log(a3)
}

//
function fnef() {
    let a = 13;
    bfoe();
}

fnef();




//simply lexicall -----> variable ki vslue uske origninal (jaha vo initalize hua that va jo value hai vo li jagi (folled by js))

//dynalic ja se call hu va us variable j=ko jo bhi value h gi vo li jaey gi




//clouser 
//-------

// ak function jo akk parent function ke threought return ho raha hovo
// vo hta ah clouser

function parent() {
    let a = 10;
    return function child() {
        console.log(a);
    }
}

//advantages---->private  variable , gobal pollution  

//issue

function X() {
    let a = 10;
    return function () {//---->(1)
        console.log(a);
    }
}


let fuc = X();//function {1} return hua
fuc();//10---> its not a good practice as a dont even exist till the retured funtion is retured
fuc();//10
fuc();//10



function Counter() {
    let count = 0;
    return function () {
        console.log(count++);
    }
}

// let func1 = Counter();
// func1();
// func1(); 
// func1(); 
// func1(); 
// func1(); 
// func1();

// //kar bar alag call ke liye ye alag counter banega
// let func2 = Counter();//har function jo counter call kare ga uska apna akk count ho ga jo dusare csll se effect nahi hoga
// func2();
// func2();
// func2();
// func2();
// func2();




// let vada = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve();
//     } , 3000)
// });

// //resolved tab ye calega
// vada.then(function(){
//     console.log("123")
// })


// //varna ye calle ga
// vada.catch(function(){
//     console.log("123")
// })

// fetch('')


//ENCAPSULATION
//==============


function xyz(){
    let click =0;//encaptulation---->private varibalre function ki value function ke bahar nahi ho sakti
    return function(){
        if(click  < 5){
            click++;
            console.log(`clicked: ${click} times`);
        }else{
           console.error( "limit exceeded")
        }
    }
}


let f = xyz();
f();
f();
f();
f();
f();
f();
f();





