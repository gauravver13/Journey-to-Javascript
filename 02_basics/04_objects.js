// Objects madeWith Singleton or constructor 

const Bumbleuser = new Object()       //Singleton Object
const tinderUser = {}                 //Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gaurav",
            lastname: "verma"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// Object.assign(target,source)
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// spread:
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "greet@gmail.com"
    },
    {
        id: 2,
        email: "ver@gmail.com"
    },
    {
        id: 3,
        email: "grate@gmail.com"
    },
    {
        id: 4,
        email: "man@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// Interesting and useful:
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLogged'))


// *****************Objects further-De-structure and JSON API**********************

const course = {
    coursename: "Deep JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// De-structure clone 
const {courseInstructor: instructor} = course

// console.log(courseInstructor); 
console.log(instructor)

// const navbar = ({company}) => {

// }

// navbar(company = "breeze")

// JSON:
{
    "name": "gaurav",
    "coursename": "JavaScript in Deep",
    "price": "free"
    "key":"value"
}

[
    {},
    {},
    {}
]