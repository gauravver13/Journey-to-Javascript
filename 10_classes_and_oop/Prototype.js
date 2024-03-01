// Property:
// let myName = "Wisely   "
// let mySurname = "Ronald  "

// console.log(myName.length)          //False Wisely have only 6 character value. 
// // console.log(myName.trim().length)        -- has a deep understanding way of prototype just by not doing this!

// Method:
let myHero = ["Thor","Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
myHero.hitesh()
myHero.heyHitesh()
// heroPower.heyHitesh()



// Inheritance:

const User = {
    name: "coffee",
    email: "coffe@starbucks.io"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// New Approach to inheritance, modern syntax::

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Hermione    "

console.log(`Length of string Hermione with using spaces: ${anotherUsername.length}!`)
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"Hitesh".trueLength()
"Gaurav".trueLength()
"iceTea  ".trueLength()