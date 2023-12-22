const score = 300
console.log(score);

const balance = new Number(100)
 
console.log(balance)

// check protoType of Numbers and maths, through mdn, browser engine, chatGPT

console.log(balance.toString().length);
console.log(balance.toFixed(2));   //For precision value. for the e-comm website for the client.

console.log(balance.toFixed(1));

const otherNumber = 123.89666

//use the precision accordingly for safe go
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++***********Maths*********+++++++++++++++++
console.log(Math)

console.log(Math.abs(-2));
console.log(Math.round(4.6))
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.min(2,5,6,7))
console.log(Math.max(2,5,6,7))

// frequently usable:
console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1) + min))