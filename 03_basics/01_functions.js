// Easy peasy lemon squizzy:

// console.log("G")
// console.log("A")
// console.log("U")
// console.log("R")
// console.log("A")
// console.log("V")


function sayMyName() {
    console.log("G")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}

sayMyName();
// for reusable code-

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNumber(num1, num2) {

    let result = num1 + num2;
    return result;
}

addTwoNumber(2,3);
addTwoNumber(2,"4");
addTwoNumber(2,"a");
addTwoNumber(2,null);

const result = addTwoNumber(3,5)

// console.log("Result:", result);

// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "Sam-Altman") {
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
 
console.log(loginUserMessage("gaurav"))
console.log(loginUserMessage())

// ************more to functions-with objects'**********

// function calculateCartPrice(num1){
//     return num1;
// }
// rest operator sometimes cz spread operator always
// function calculateCartPrice(...num1){
//     return num1;
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400))
// console.log(calculateCartPrice(200,300,400))
console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username: "gaurav",
    price: "10n9",
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
// check whether the key is available to allow for the  function or not!

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,800,1000,2000,4000]))





