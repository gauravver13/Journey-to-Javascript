// Activity 1:

function oddOrEven(num) {
    if(num%2==0)
        console.log(`${num} is Even!`);
    console.log(`${num} is Odd!`);
}

function square(num) {
    return num*num;
}
oddOrEven(27)

console.log(square(7))

// Activity 2:
function maxNum(numOne, numTwo) {
    if(numOne>numTwo)
        return console.log(numOne);
    return console.log(numTwo);
}

maxNum(12,43)

function concatString(str1, str2) {
    return str1+str2;
}
console.log(concatString("Hello", " World!"));

// Activity 3:

let a=21
let b=23

const arrowFunc = () =>  a+b;

console.log(arrowFunc(a, b));


const str = `asdfghjklzxcvbnmqertyuiop`;

// (str) => {
//     if(str.indexOf("~")!==-1 || str.indexOf("`")!==-1 || str.indexOf("!")!==-1 || str.indexOf("@")!==-1 || str.indexOf("#")!==-1 || str.indexOf("$")!==-1 || str.indexOf("%")!==-1 || str.indexOf("^")!==-1 || str.indexOf("&")!==-1 || str.indexOf("*")!==-1 || str.includes("(") || str.includes(")") || str.includes("{") || str.includes("}") || str.includes("[") || str.includes("]") || str.includes("|") || str.includes(":") || str.includes(";") || str.includes(`"`) || str.includes("'") || str.includes("?") || str.includes("/") || str.includes(".") || str.includes(",") || str.includes("<") || str.includes(">") )
//         return true
//     else 
//         return false
// }



// ((str)=> {
//     if(str.includes(/^[a-zA-Z]+$/) === true)
//         console.log(true);
//     else
//         console.log(false);
// })



// Activity 4:
function product(pro1, pro2) {
    return console.log(pro1*pro2);
}
product(2, 14)

function greet(name, age) {
    console.log(`Hello ${name}, Congratulations, for being the part of earth member for ${age} years, Wish you will have an amazing journey ahead!!`);
}

greet('Gaurav', 22)


// Activiy 5:

function recall(n) {
    if(n==0)
        return;
    recall(n-1)
    console.log(n);
}

recall(3)

function recallAgain(n) {
    console.log(n)
    if(n==0)
        return;
    recallAgain(n-1)
    console.log(n);
}

recallAgain(2)

