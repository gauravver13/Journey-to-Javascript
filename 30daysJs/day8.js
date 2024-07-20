// Activity 1:
let personName = 'Gaurav'
let personAge = '22'

const str = `Hello ${personName}, Congrats you have the experience of ${personAge} years, don't loose hope! amazing journey Ahead`

const str1 = `\n be precautious how you going to proceed.. You have 2 months left to celebrate your 23rd birth day and you haven't even earn a single penny till now...\n Start earning ASAP so that you get the experience of how real world works \n at the same time don't forget to do excercise to keep yourself healthy! and be the best version of yourself..!`

console.log(str + str1);


// activity 2:
const array = [1, 2, 3, 4, 5, 6]

const [ first, second, ...rest ] = array

console.log(first);
console.log(second);
console.log(rest);

const book = {
    'title': 'Harry Potter and the Deathly Hollows',
     author: 'JK Rolling',
     genre: 'Adventure',
}

// const { title: name, author } = book
const { ["title"]: movie, genre } = book

// console.log(name);
// console.log(author);
console.log(genre);
console.log(movie);

// activity 3:

// spread operator!
const newArray = [7, ...array, 8, 10]
console.log(newArray);


function sum(...restArgs) {
    let total = 0;
    for (const args of restArgs) {
        total +=args
    }
    return total;

    // if(restArgs)
    //     return restArgs+sum(...restArgs)
}
console.log(sum(2, 3));
console.log(sum(2, 3, 5));
console.log(sum(2, 3, 5, 7));
console.log(sum(2, 3, 5, 7, 13));

// activity 4: 
const product = function (pro1, pro2) {
    return pro1*pro2;
}
const pro2 = 1

console.log(product(3, 3));
console.log(product(2));        //NaN = Not a number!
console.log(product(2, pro2));


// activity 5:

let dog = 'German Shephard'
let snake = 'python'
let Name = 'dog'
let horse = 'Friesian'

const sound = (animal) => {
    if(animal==dog)
        return 'Bho Bho'
    else if(animal==snake)
        return 'seeuu'
    else if(animal==[horse])
        return 'dhrr'
}

const objEnhanced = { dog, snake, Name, horse, sound }

console.log(objEnhanced, sound(horse));

console.log(objEnhanced.Name);
console.log(objEnhanced[Name]);