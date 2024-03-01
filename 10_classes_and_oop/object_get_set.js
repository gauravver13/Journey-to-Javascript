const User = {
    _email: "potter.ai",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value 
    },
    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value 
    },
}

const ron = Object.create(User)

console.log(ron.email);
console.log(ron.password);