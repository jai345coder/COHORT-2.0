// Get the main element and the h1 element within it
let main = document.querySelector("main");
let h1 = document.querySelector("#main h1");
let text = h1.textContent;




let itr = 0;
// Get the text content of the h1 element
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";




  function randomText(){  // Start an interval that runs every 10 milliseconds

        const str = text.split("").map((char, index) => {//map return an array of random string
            if(index < itr){
                return char;
            }
            return character.split("")[Math.floor(Math.random() * 53)]//
        }).join("");
        h1.innerText = str;

        itr += 0.1;
  
}


setInterval(randomText, 30);

// h1.addEventListener("mouseleave", () => {
//     h1.textContent = text;
// });

