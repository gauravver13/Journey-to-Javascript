// Acitivity 1:
const array = [1, 2, 3, 4, 5]

array.map((ele)=>{
    console.log(ele);
})

const firstEle = array[0]
const lastEle = array[array.length-1]

console.log('First Element of Array:', firstEle);
console.log('last Element of Array:', lastEle);

// Activity 2:
array.push(6)

const filteredEle = array.filter((ele) => {
    return ele<=6
})

console.log(filteredEle);

array.pop()
console.log(array);

array.shift()
console.log('Shifted Array: ',array)

array.unshift(1)
array.unshift(1, 2)
console.log(array);


// Activity 3:Array Methods!

const evenArray = array.map((ele) => {
        return ele*2;
})
console.log(evenArray);

array.shift()
array.shift()
console.log(array);

const filteredArray = array.filter(ele => {
    return ele%2==0
})
console.log(filteredArray);

array.push(10)

const reducedArray = array.reduce((acc, curr) => {
    return acc+curr
})
console.log(`Reduced Array: `, reducedArray);

// Activity 4:

for (const ele of array) {
    console.log(ele);
}

for (const key in array) {
    console.log(key, ': ', array[key]);
}
array.forEach(element => {
    console.log(element);
});


// Activity 5:

const twodArray = [[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]]

twodArray.forEach((element)=> {
    element.forEach((ele)=>{
        console.log(ele);
    })
})

twodArray.map((ele)=> {
    console.log(ele);
})

console.log(twodArray[1][3]);
console.log(twodArray[2][0]);