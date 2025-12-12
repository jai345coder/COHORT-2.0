//QUESTION:5->form logic

let form = document.querySelector("form");
let formWarning = document.querySelectorAll("small");
let passwordWaring = document.querySelector("#m");
let done = document.querySelector("#done")
//console.log(form[0], form[1], form[2]);




let email = form.elements[0];
let password = form.elements[1];
//let submit = form.elements[2];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// password must include :
//1.small letters
//2.atleast one capital leter
//symbol
//numbers


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailRegex.test(email.value)) {

        console.log("email not right");
        formWarning[0].innerText = "email wrong"
        formWarning[0].style.display = "initial";

    } else if (!passwordRegex.test(password.value)) {
        
        formWarning[1].innerText = "password wrong"
        formWarning[1].style.display = "block";
    }else{
        // no issue
        done.style.display= "initial";
        
    }

    console.log(input.value, password.value);

});

























