const user = {
    username: "gaurav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DataBase")
        // console.log(`Username: ${this.username}`)
        console.log(this);      //this -> current context
    }
}

console.log(user.username)
console.log(user.getUserDetails())

// const promiseOne = new promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }
    // return this          // Implicit function, default defined
}

const userOne = new User("gaurav", 12, true)
const userTwo = new User("Hitesh", 17, false)

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

