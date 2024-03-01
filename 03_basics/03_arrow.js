// const user = {
//     : "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)       //this->current context.
// console.log(this)

// function chill(){ 
//     console.log(this)
// }
// function chill(){
//     let username = "gaurav"
//     console.log(this)
// }

// chill(); 

// const coffee = function () {
//     let username = "gaurav"
//     // console.log(this.username)
// }
// const coffee = () => {
//     let username = "gaurav"
//        console.log(this);
// }
const coffee = () => {
    let username = "gaurav"
       console.log(this);
}


coffee()

//arrow function:
// () => {}  

// Explicit return of the arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


// Implicit return:
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// const addTwo = (num1, num2) => ( username: " gaurav ")     ----wrong
const addTwo = (num1, num2) => ({ username: "gaurav"})

console.log(addTwo(3, 4))
