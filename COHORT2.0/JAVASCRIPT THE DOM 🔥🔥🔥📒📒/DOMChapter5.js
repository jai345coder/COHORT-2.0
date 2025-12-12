//TIMER AND INTERVals 
//=====================

//CODE CALLE PAR KUCH DER BAD CALLE
//5 s ec ke bad calle


let hello = setTimeout(function(){
console.log("hello")
},5000)//5s

clearTimeout(hello);//timeout delete hogaya to kuch nahi hga

let count =10;
let x =0;
setInterval(function(){
  //x ko andar intialize ki to har interval par value reset ho jaye to 0
   if(x <= count){
    console.log(x++);
   }
},2000);



//download bar 
let downloadBox = document.querySelector("#download");
let strip = document.querySelector("#strip");
let update = document.querySelector("#download h3")
let number = document.querySelector("#download h4")

downloadBox.addEventListener("click" ,function(){
   
let increment = 0//download count 
    let downloading = setInterval(() => {
           increment = increment + 20;
        if(increment === 100) {
            clearInterval(downloading);
            
            update.innerText = "DOWNLOADED✅"
        }
     strip.style.transition = "smooth"
        strip.style.width = `${increment}%`;
        number.innerText = `${increment}%`
        
    },2000/10);//1s

})













