//!OBJECTS IN JAVASCRIPT
//!=======================

let obj ={
    //kitni bhi key value pair bana sakte hai(func ,str ,arr, obj ,varilable ,etc)
    name:"prashant",
    age:20
}
console.log(obj);


let obj2 = new Object();
obj2.name = "prashant";
obj2.age = 20;
console.log(obj2);

//methid 2
obj2["gender"] = "male";
obj2["age"] = 20;
console.log(obj2["age"]);


const user = {
    name:"jai tiwari",
    age:30, 
    address:{
        city:"Bhopal",
        pin:4976,
        location:{
            lst:344.5,
            lng:234.4
        }
    }
}

//!OBJECT DESTRUCTURIN
//!=====================
console.log(user.address.location.lng);//bar bar ye nahi likna cahte to
//property ko new variable (As object) stor kar lo

let {lst ,lng} = user.address.location;//destructuring of object
console.log(lst);
console.log(lng);


//looping in object
//===================

let val = {
    name:"kai", 
    age:58,
    email:"kai@123"
};
for(let key in val){
    console.log(key, val[key]);//key--> property name , val[key]--> property value
    //!par val.key nahi karenge ye kam nahi karge 
}


Object.keys(val);//apke object ke keys ka array bana deta hai

Object.entries(val);//apke object ke key-value pair ka array bana deta hai

Object.values(val);//apke object ke values ka array bana deta hai


//!OBJECT COPING :SPREAD OBJ.ASSIGN , DEEP CLONE
//!==============================================

let objx ={
    name:"prashant",
    age:20,
    email:"prashant@123"
}


let objz = {...objx};//its a complete copy 
console.log(obj2);


objz.email = "prashant@456";
console.log(objx);//change in objz does not effect objx
console.log(objz);


//!OBJECT ASSIGN
//====================
//not very used
let objd= Object.assign({} , objz);//objx me objz ke values ko add kardeta hai
let obje = Object.assign({price:Infinity} , objz);//objx me objz ke values ko add kardeta hai , infinty ke sath use obj ki propeerties bhi add ho jaye gi
console.log(objd);


//!DEEP CLONE
//====================
 let nestedobj = {
    name:"prashant",
    age:20,
    address:{
        city:"bhopal",
        pin:4976
    }
 };

let objk = {...nestedobj};
console.log(objk);


objk.address.city = "indore";
console.log(objk);
console.log(nestedobj);//!problem: change in objr does  effect nestedobj

//issue ye hai nested me core vales to copy hoti hai par nested vales fir se reference kar ne lagte hai 

//fix: deep clone
//====================
//deep clone
/**
 * Deep clone a nested object.
 *
 * @param {Object} nestedobj - Nested object to be cloned.
 * @returns {Object} - Deep cloned nested object.
 */
let objl = JSON.parse(JSON.stringify(nestedobj));

// JSON.parse and JSON.stringify are used to deep clone the nested object.
// The JSON.stringify method converts the nested object to a JSON string.
// The JSON.parse method parses the JSON string and returns a new object.
// This approach is used to avoid the problem of references in nested objects.
console.log(objl);
objl.address.city = "indore";
console.log(objl);
console.log(nestedobj);//problem: change in objr does  effect nestedobj




//!OPTIOAL CHAINING
//====================
let objm = {
    name:"prashant",
    age:20,
    addressS:{
        city:"bhopal",
        pin:4976
    }
 };
 
 


obj?.address?.city;//property hai to de do agar nahi hai mat dena par error mat do 

//!Computed Property Name
//=======================
//simply ye akk variabl (outside obj) ani value obj ki property ko store karega ex [keys] == "address" address{
//     city:"bhopal",
//     pin:4976}
let key = "address";
let objn = {
    name:"prashant",
    age:20,
    [key]:{
        city:"bhopal",
        pin:4976
    }
 };
console.log(objn);




//!practice🟥🟥🟥
//!=============

//Q1: Create an obj for a std with name roll and age isEnrolled

let Student = {
    name:"prashant",
    age:21,
    isEnrolled:true
}


//Q2: Can an obj key can be number or bool  ? try this 
//ANs: yes

let objs = {
    1:"prashant",
    true:"prashant",
    "1":"prashant"
}
console.log(objs);//output: { '1': 'prashant', true: 'prashant' }



//Q3Acess the first names val from obj

let objf  = {
    "first-Name":"prashant"//agar proprert my( - )use hoga tab (obg. )notation lam nah karege
}

console.log(objf.firstName);//undefined
console.log(objf["first-Name"]);//output: prashant



//Q4: Give a dynamic key , let key = "age" , how will you access userf[key]?


let kex = "age";
let objh ={
    name:"prashant",
    [kex]:20
}


console.log(objh , objh[kex]);

//Q6 : from the obj below print the latitude

const loca = {
    city:'Bhopal', 
    coordinates :{
        lat:23.2,
        long:45.6
    }
}

loca.coordinates.lat;//output: 23.2



//Q7: Destructure the city and latitubde from the location above

let {city} = loca;
let {lat} = loca.coordinates;
console.log(city , lat);//output: Bhopal 23.2



//Q7 : Use for-in to log all keys in this object

for(let key in loca){
    console.log(key);
}//output: city coordinates lat long


Object.entries(loca);//output: [ [ 'city', 'Bhopal' ], [ 'coordinates', { lat: 23.2, long: 45.6 } ] ]

Object.entries(loca).forEach(function(val){
    console.log(val[0] , val[1]);//output: city Bhopal coordinates { lat: 23.2, long: 45.6 }
})



















