const accountId = 911244
let accountEmail = "gauravcodes@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2   --> not allowed

accountEmail = "gvpdcodes@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId)

/*
Prefer not to use var,
because of issue of block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
