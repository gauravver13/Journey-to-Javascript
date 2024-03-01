// const coding = [ "js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num>4)

// if use scope return the CSSMathValue, but in implicit returned value is default:
// const newNums = myNums.filter( (num) => {
//     return num>4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book1', genre: 'LifeScience', publish: 1992, edition:2003},
    {title: 'Book2', genre: 'Maths', publish: 2005, edition:2005},
    {title: 'Book3', genre: 'DS', publish: 1993, edition:2007},
    {title: 'Book4', genre: 'Mint Money', publish: 2010, edition:2011},
    {title: 'Book5', genre: 'Novel', publish: 2011, edition:2017},
    {title: 'Book6', genre: 'Self Growth', publish: 2007, edition:2019},
    {title: 'Book7', genre: 'Science', publish: 2003, edition:2020},
    {title: 'Book8', genre: 'History', publish: 1999, edition:2006},
    {title: 'Book9', genre: 'Javascript', publish: 1998, edition:2022},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === 'Science'
} )

console.log(userBooks);