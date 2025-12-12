//*THIS KEYWORD
//============
//bakki special keyword same rati hai par this keyword risto ki tarah hai entity ke paspective me chage ho ja ta hai ex me ani mom ke liye beta hu bar apne mama  ka bhanja hu

//GOBAL---WINDOW
//FUNCTION ---->window
//function es5 ke andar function es5 ---> object
//function (es5)---> function(es6)---> window
//method with es5 function -> object
//method with es6 function -> window
//es5
//CLASS ---->OBJECT

console.log(typeof (this), this);

function func() {
    console.log(typeof (this), this);
}

func();
const obj5 = {
    name: "jai",
    func: () => {
        console.log(typeof (this), this);//ya this window ho jaye ga
    }
}



const obj = {
    name: "jai",
    func: function () {
        console.log(typeof (this), this);
    }
}
obj.func()


function func6() {
    return function () {
        console.log(typeof (this), this);
    }
}

func6()();

//EVENT HANDLER
//================
document.querySelector("h1").addEventListener("click", function () {
    //jaha this = text--> h1
    this.style.color = "red";
    this.textContent = `${this.textContent} clicked`;
    console.log(typeof (this), this);//
})

//Arrow function apne this ki value hamese pane parent se leta hai
//Arrow function alexical this


class Abcd {

    constructor() {
        console.log("hehehe")
        this.a = 12;
    }
}


let val = new Abcd();
console.log(val);

//!MANUAL BINDING:
//=====================
//function ko call karte vakte ham ye decide kar sakte hai this ki value kya hogi
//call , apply , bind

//!CALL
//===========================================================


let obj8 = {
    name: "harsh"
}

//we want the value of this in the function shpould become the object above
function abcd() {
    console.log(this);//this == window
}

abcd();

abcd.call(obj8, 12, 2, 3);//this == obj8

//!APPLY
//===================================================================

let obj9 = {
    name: "harsh"
}

function abcd() {
    console.log(this);//this == window
}

abcd();

abcd.apply(obj9, [1, 2, 3]);//this == obj9, [1,2,3]--> parameters




//!BIND
//======================================================================
//bind ki value akk nai varibale me dala impportant hai
let newAbcd = abcd.bind(obj9, 1, 2, 3);//this == obj9, 1,2,3--> parameters

newAbcd();//this == obj9


//creted a form tsking uswerinput for name email password  bio and url for profile pic and nw going tosee the use of this 


const userManger =
{
    user: [],
    init: function () {
        FormData.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log(this);//this == form that we dont want
            //we want this to be the object == userManger
        })
    }, addUser: function () { },
    removeUser: function () {

    }
}

userManger.init();


const userManger2 =
{
    user: [],
    init: function () {
        FormData.addEventListener("submit", this.submitForm.bind(this));
    }, addUser: function () { },
    submitForm: function (e) {
        e.preventDefault();
        console.log(this);//this == form but if use bind int he event lister function call then it  this == userManger

        this.user.push({
            username: username.value, role: role.value, bio: bio.value, img: img.value
        })

        form.reset();
    },
    removeUser: function () {

    }
}

userManger.init();





















































































