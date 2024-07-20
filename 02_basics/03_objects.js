// Objects: made through constructor and literals

// Singleton
// Object.create 

const mySym = Symbol("key1")

// Object Literals:
const JsUser = {
    name: "Gaurav",
    "full name": "Gaurav Verma",
    [mySym]: "mykey1",
    age:18,
    location: "Noida",
    email: "gaurav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
    // key: value,
}

// Object access:
console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name)  // wrong
console.log(JsUser["full name"])
// console.log(JsUser.mySym)      //wrong
console.log(typeof JsUser.mySym)
// but we need symbol, if taken in square bracket then it used as a symbol.
console.log(JsUser[mySym])

JsUser.email = "gaurav@open.ai"
console.log(JsUser.email)

// Object.freeze(JsUser)

// email will not be updated because freeze function applied in JsUser object--error will not be there but values will not propagate.
JsUser.email = "gaurav@microHard.ai"
console.log(JsUser.email)
console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting)        // Not working
console.log(JsUser.greeting())
console.log(JsUser.greeting2())