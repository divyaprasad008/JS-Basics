const accountId = 14453
let accountEmail = "divya@gmail.com"
var accountPassword = "12345678"
accountCity = "Rajkot"
let accountState
// accountId = 2 //Assignment to constant variable.
accountEmail = "dp.dp.com"
accountPassword = "fsddsf"
accountCity = "Dang"

/*
Prefer not to use Var
because of issue in Block skope and functional scope

//var - can be redeclared | reassigned | project scope
//let - can be redeclared | reassigned | block scope
//const - not reassigned | 
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])