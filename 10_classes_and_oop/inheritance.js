class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const devIT = new Teacher("Hitesh", "hitesh@choudhary.com", "777")
const coreIT = new User("Rohit", "hitesh@choudhary.com", "777")

devIT.addCourse();
// coreIT.addCourse();
coreIT.logMe();
devIT.logMe();

console.log(devIT instanceof User)
console.log(coreIT instanceof User)
console.log(devIT instanceof Teacher)
console.log(coreIT instanceof Teacher)