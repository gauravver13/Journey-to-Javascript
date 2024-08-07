// fetch('http://something.com').then().catch().finally()
// no this is not only about fetch, fetch to explore. 

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        // resolve()
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Tea", email: "chai@example.com"})   
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error) {
            resolve({username: "gaurav", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((myUsername) => {
    console.log(myUsername)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// console.log(username);

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error) {
            resolve({username: "javascript", password: "999"})
        } else {
            reject('ERROR: JS went wrong, Its inner devil gonna roar now! cheers:)')
        }
    }, 1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// imp
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)   
//         // console.log(response)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))