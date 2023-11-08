let score = "45"

console.log(typeof score)
console.log(typeof(score))

let valInNumber = Number(score)
console.log(typeof valInNumber)
console.log(valInNumber)

// "45" => 45
// "45abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33

someNumber = String(someNumber);

console.log(someNumber)
console.log(typeof someNumber)

// ************** Operations ***************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = "gaurav"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log((3+4) * 5 % 3)
// Use parenthesis rather than hephazard mathematical tricky code.

// console.log(+true)  //worst code, due to readability
// console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++ //Postfix
++gameCounter //Prefix

console.log(gameCounter)

