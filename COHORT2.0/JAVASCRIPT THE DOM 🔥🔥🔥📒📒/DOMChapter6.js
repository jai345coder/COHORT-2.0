//*LOCAL STORAGE & SESINOAL STORAGE
//=================================

//LOCAL STROGAGE===> aake browser ke andar data store karna jo ki browser k band kone par bhi rahe ga delete nahi hoga


//sessional storag -->ye aapka data temperorly store karta hai matlab ki tab band hua aur data gaya.


//cookies ---> ye bhi permant data rage ga par only for  data 


localStorage.setItem("name" , "jai");
let value = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name" , "prashant");



sessionStorage.setItem("name" , "jai");

sessionStorage.setItem("name" , "jai");
let value2 = localStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.setItem("name" , "prashant");



//cookies
//------------
//bowser me chota dta me store karne ke liye cookies use hot ahia
//jo data cookies me stoe hot ahai vo page t=reload karne par backend me servwr me cala jata hai automatically
//appox--->~4kb
//localstorage----> ~5MB

//cannot store obje ct arrays and function or huge code in storges else it will be all in strings.
//to store these aributrs you need to stringify them

//to convert string to object use JSON.parse()

//JSON.stringify() //converts object to string
localStorage.setItem("name" , JSON.stringify({name:"prashant" , age:20}));//JSON.stringify---> converts to string
localStorage.setItem("name" , JSON.stringify([1,2,3,4,5,5]));
//JSON.parse() //converts string to object
localStorage.getItem("name");


//we can acces those data from string to normal form using parse
let obj = JSON.parse(localStorage.getItem("name"));
console.log(obj);

console.log(obj[0]);



//  QUESTIONS
//==================

//how to get the operating system display theme in hte website using js

































































