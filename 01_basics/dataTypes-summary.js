// Primitive:

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3456432324522n

console.log(bigNumber)

// Reference (Non Primitive):

// Array, Objects, Functions.

// Array:
const heros = ["IronMan", "ScarletWitch", "Wednesday"];

// Objects: {Key:value, -pairs-,}:
let myObj = {
    name: "gaurav",
    age: 21,
}

// Functions:
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof outsidetemp)
console.log(typeof myFunction)  //Object-Function



// ++++++++++++++++++++ Memory +++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myOfficialName = "gaurav"

let anotherName = myOfficialName
anotherName = "gauravCodes"

console.log(myOfficialName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "gauravcodes@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
