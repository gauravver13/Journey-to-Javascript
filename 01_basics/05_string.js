const name = "gaurav"
const repoCount = 17

// console.log(name + repoCount + "Value");  -- Old Method.

// String Interpolation:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String taken as Object-Object invoked
const gameName = new String('gauravver')

console.log(gameName[0])
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))

console.log(gameName.indexOf('v'))

const newName = gameName.slice(1, 4)

console.log(gameName)
console.log(newName)

const anotherString = gameName.slice(-9, 4)

console.log(anotherString)

const newStringOne = "       coolboy__     "

console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://gaurav.com/gaur/aur%20verma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
console.log(url.includes('aur'))  

const originalName = 'some-developers-are-in-the-room'

console.log(originalName)

console.log(originalName.split('-'))


