// primitive  
// 7 types: String, Numebr, Boolean, Null, Undefined, Symbol, BigInt
const outsideTemp = null     // null
let userEmail;  // undefined
const id = Symbol('122')
const anotherId = Symbol('122')
console.log(id === anotherId);   // symbol
const bigNumber = 23456787654347n //bigInt
console.log(bigNumber);


// Referenece (Non remitive)
// Array, Objects, Functions
const heros = ["Krishna", "Ram", "Arjun"]  // array
let myObj ={
    name: "Riya",
    age: 21,
}       // object
const myFunctoin = function(){
    console.log("Hello World");
}