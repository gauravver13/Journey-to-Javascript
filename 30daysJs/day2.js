// Assingment 1:

function operation(opr1,opr, opr2) {
    if(opr == '+')
        return opr1+opr2;
    else if(opr == '-')
        return opr1-opr2;
    else if(opr == '*')
        return opr1*opr2;
    else if(opr == '/')
        return parseInt(opr1/opr2);
    else if(opr == '%')
        return opr1%opr2;
    else 
        return;
}

result = operation(5, "%", 2)
console.log(result);


// Assignment 2:
let varX = 3;

varX +=  6
console.log(varX);

varX -= 6
console.log(varX);


// Assignment 3:
let x = 2;
let y = 4;

const ans = x>y ? x:y;
console.log(ans);

x=3
y='3'

console.log('X is less than or equals to Y', x<=y);
console.log('X is greater than or equals to Y', x>=y);
console.log('X equals to Y', x==y);
console.log('X is strictly equals to Y', x===y);


// Assignment 4:

let a = 2
let b = '2'

console.log('AND operator:', a==2 && b==2)
console.log('OR operator:', a==2 && b==3)
console.log('Not operator:', a!=b)
console.log('Strictly Not operator:', a!==b)

// Assignment 5

// get back to the assignment 3 ans 3 variable declaration for the use of ternary operator :

const ternaryOperator = ans>0? 'Positive': 'Negative'
console.log(ternaryOperator);