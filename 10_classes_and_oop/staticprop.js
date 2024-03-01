class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const gaurav = new User("Gaurav")
// console.log(gaurav.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone", "i@phone.com")
iPhone.logMe();
console.log(iPhone.createId())