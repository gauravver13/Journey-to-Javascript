// Global Scope 
// Local Scope 
// var c = 300

// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ",a)

// }


// console.log(a);

function one() {
    const username = "gaurav"

    function two(){
        const website = "youtube"
        console.log(username);
        //should be accessed
    }
    // console.log(website);
    // two(); 
}

// one()
// two()

if(true) {
    const username = "gaurav"
    if(username === "gaurav"){
        const website = " codes"
        console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);
console.log(addone(5))
function addone(num){
    return num+1
}


// console.log(addTwo(6)) hold declared function doesn't work before defining because the variable memory size will be initialized later one, but the function calls .
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(6))






