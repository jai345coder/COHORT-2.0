//Class expression , hoisting , inheritence , getter and setter
//================================================================


//class expression ---> ak class ko ak variable me store kar sakte hai

let profile = class{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

//hoisting ---> initialise kar ne se pehle hi entity ko use kar pana
//*class hoiting hoti hai par class expression me nahi hoti hai



class Animal{
    constructor(){
       this.animal = this.animal;
       this.sound = this.sound;
       this.food = food;
    }

    Eat(){
        console.log(`${this.animal} eats ${this.food}`);
    }
    Breaths(){
        console.log(`${this.animal} breaths Air`);
    }
}

class lion extends Animal{
    constructor(){
       // super();
        this.animal = "Lion";
        this.sound = "roar";
        this.food = "meat";
    }

    susu(){
        consdole.log("sususususususususus....😊😊")
    }
}



//lion me apna susu prototype  to hoga hi par use ke
//alavajo vo Animal class ko  extend karta hai uske ke prototype vale function bhi hoga.
//ak class jab akk purani (alredy extending class ) ko extend karti hai to vo use class ke sare prototype ecess kar sakti hai aur apne inndependly new d=function design kar sakte  hai 


class Marker{
  constructor(){   
    this.codename = codename
      this.id = id;}
}


//GETTER AUR SETTER
//======================
//kisi class ki private ua protected property ko change kar na without direct interaction is done through getter and setter
class Person{
    //private property
   
     constructor(name , age){
       // this.name = name;
        this.age = 24;
        this._salary = 10000;//private property
     }
get Salary(){
        return this.age; //isko direct change  se protect kar deta hai
     }
    set Salary(age){
        if(this.age < 20){
           console.log("experience is not enough for increment");
        }
        this._salary = _salary + 1000;
     }
    //  get salary(){
    //     return this._salary;//isko direct change  se protect kar deta hai
    //  }
     
}
  

// const newEmployee = new person("prashant" , 20);
// console.log(newEmployee.salary);//10000
// newEmployee.SalaryINcrement = 20000;
// console.log(newEmployee.salary);
   

const p1 = new Person("jai" , 21);
p1.age = 12;
console.log(p1.Salary);






























