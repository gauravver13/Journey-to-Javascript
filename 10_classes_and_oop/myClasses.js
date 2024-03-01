// Check it first then go to under the hood:

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase() }`
//     } 
// }

// const gaurav = new User("gaurav", "gaurav@gmail.com", "123")

// console.log(gaurav.encryptPassword());

// console.log(gaurav.changeUsername());



// Behind the Scene (What exactly is happening):

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "111")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());