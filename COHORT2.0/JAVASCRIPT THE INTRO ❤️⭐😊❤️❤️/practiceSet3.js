

//todo Questions
//!==================

//Q1: create a array  with 3 fruits and print the scond fruit
let fruits = ['apple','mango' ,'banana'];
console.log(fruits[1]);


//Q2: Add "Mango" at the end and 'pineapple' at the bginning of this array
fruits.push('mango');
fruits.unshift('pineapple');
console.log(fruits);//['pineapple', 'apple', 'mango', 'banana', 'mango']

fruits[3]



//replace 'Banana' with 'kiwi'
fruits[3] = 'kiwi';
console.log(fruits);//['pineapple', 'apple', 'mango', 'kiwi', 'mango']




//Q5 : Remove the last item from the array
fruits.pop();
console.log(fruits);//['pineapple', 'apple', 'mango', 'kiwi']


//Q6: Insert at index 1 int he array
fruits.splice(1,0,'banana');//index me se kuch bhi hatana nahi hai (0) par 'banana add kar nahai

//Q7 extract Middle three elems from array

let middle = fruits.slice(1,4);
console.log(middle);//['apple', 'mango', 'kiwi']



//Q8: sort the array alphabetically and reverse it
fruits.sort().reverse();
console.log(fruits);//['kiwi', 'mango', 'pineapple']

//Q9 : Use Map to sqr each number
let squer = arr.map(function(val){
    return val*val;
})

console.log(squer);//[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]



//Q9 : Use .Filter ti keep only numbers grster than 10

let greaterThan10 = arr.filter(function(val){
    return val > 10;
})

console.log(greaterThan10);//[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Q10: Use, .reduce() to find the sum of this arrays

let sum = arr.reduce(function(acc , curr){
    return acc + curr;
})
console.log(sum);//210



//Q11: first no greater thasn 10 using .find

let FindgreaterThan10 = arr.find(function(val){
    return val > 10;
})
console.log(FindgreaterThan10);//11



//use every() to check if all the numbers are greater than 10
let every = arr.every(function(val){
    return val > 10;
})
console.log(every);//false



//use some() to check if any of the numbers are greater than 10
let somes = arr.some(function(val){
    return val > 10;
})
console.log(somes);//true