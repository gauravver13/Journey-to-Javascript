// can we change the value of pi in .js? If not, Why? 

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

console.log(descripter);
// because its writable, enumerable value is false : hard coded!

const chai = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    OrderChai: function(){
        console.log("code is broken! ")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));         //chai is not a property!
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}