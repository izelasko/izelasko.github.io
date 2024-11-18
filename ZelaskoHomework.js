// write a variable that is a string and output to console (hint: it's console.log(variable name))

let name = "Chowder";
let intro = "Bella's cat is named " + name + "!";

console.log(intro);

// write a variable that is a number and output to console (hint: it's console.log(variable name))

let chowderSize = "16";
let chowderDesc = "Chowder weighs " + chowderSize + " lbs !";

console.log(chowderDesc);

// write a variable that takes any two numbers and adds them 

let x = 5;
let y = 12;
let sum = x + y;

console.log(sum);

// write a variable that takes any two numbers and subtracts them and output to console

let a = 5;
let b = 12;
let difference = a - b;

console.log(difference);


// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 

let n = 5;
let m = 2;
const answer = n % m;
if (answer == 1){
    console.log(`The result of this is 1.`);
}

// write a variable that takes any two numbers and perform an exponential value and output to console 
let w = 6;
let z = 2;
let result = w ** z;
console.log(result);

// write a statement that is false using a conditional statement and output to console 

let value1 = 6;
if (value1 != 5){
    console.log(`This is false.`);
}


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let chowder = {
    breed : "cat", 
    baby: "long hair", 
    furry: "furry", 
    output: function() {

        return `Chowder is a ${this.breed} that is a ${this.furry} ${this.baby}`

    }
}

// console.log the values of that object one by one. 

console.log(chowder.output());
console.log(chowder.breed);
console.log(chowder.baby);
console.log(chowder.furry);

// create an array 

let array = ["bella", "is", "really", "tired"]

// call the value in the 3 position of this array and output to console 

console.log(array[2]);

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

// call all values in the array using a loop 

let i=0;

while(i<array.length){
    console.log(array[i]);
    i++;
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}
 
console.log(`ifStatement is false at value of 5.`);