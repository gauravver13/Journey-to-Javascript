// if 
const isUserLoggedIn = true 
let temperature = 42
if (true){

}

if (false){
    
}

if(3 != 2)
{
    console.log("executed",true)
}
// >, <, <=, >=, ==, !=, ===, !==, ? :

// if-else 

if(temperature<50) {
    console.log(`temperature  is less than 50 degree`)
}
else {
    console.log(`temperature is greater than 50`)
}


const balance = 1000

// if(balance>500) console.log("test"), console.log("test2")   ---Immature behavior, if u try to make urself more smarter than what u actually are make u dumb;

if(balance<500)
{
    console.log("less than")
} else if(balance < 750) {
    console.log("less than 750")
} else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedFromEmail) {
    console.log("User logged in");
}
