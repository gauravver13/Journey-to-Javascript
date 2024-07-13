// activity 1: variable declaration
var one = 1
console.log(one);

let day = "One"
console.log(day);

// activity 2: const declaration
const dayOne = true
console.log(dayOne);

// activity 3: data types 

const valNum = 2
const valString = "Two"
const valBool = false
const valObject = {
    "one": 1,
    "two": "string"
}
// const valArray = [1, 2, 3, 'four', true]
const valArray = [1, 2, 3]

// console.log(valObject)
// console.log(valArray);

// feature 1:
console.log(typeof(valNum), valNum)
console.log(typeof(valString), valString)
console.log(typeof(valBool), valBool)
console.log(typeof(valObject), valObject)
console.log(typeof(valArray), valArray)


// feature 2:
let reVar = false 
const reAssignedVar = false

// reAssignedVar = true
reVar = true  
console.log(reVar);
// Here we can conclude that variable can be reassigned to the value only via let declaration of varibles


// valBool = true 
// Re-Assignment to constant variable, which also doesn't make any sense!

// Note: Array is treated as object 

