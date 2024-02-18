let score = 33

// console.log(typeof score) //number

score = "33"
// console.log(typeof(score)) //string

score = "33a" //js will convert the string in numberwithletter (33a) it will be NaN - not a number
score = null //js will convert null to 0 when converted to number, it will be 0
score = undefined //js will convert undefined to NaN when converted to number
score = true //js will convert undefined to 1 when converted to number
score = false //js will convert flase to 0 when converted to number
score = "Divya" //js will convert String(Divya) to NaN when converted to number

let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

let isLoggedIn = 1 //return true when converted to Boolean
isLoggedIn = 1 //return false when converted to Boolean
isLoggedIn = "Divya" //return true when converted to Boolean
isLoggedIn = "" //return fales when converted to Boolean
let booleanLoggedIn = Boolean(isLoggedIn);
// console.table([isLoggedIn,typeof booleanLoggedIn,booleanLoggedIn])

let someNum = 33
let stringNum = String(someNum)
// console.log(typeof stringNum,stringNum)

// *****************operations*********************
let val = 3
let negVal = -val
// console.log(typeof negVal,negVal) // number -3
// console.log(2+2,2-2,2*2,2/2,2**3,2%3) //4 0 4 1 8 2

let str1 = "Test"
let str2 = " Divya"
let str3 = str1+str2
console.log(str3)

// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32
// console.log((3+4)*5%3) //2
// console.log(true) //true
// console.log(+true) //1

let num1,num2,num3
num1=num2=num3 = 2+2 //instead write 4 because better code redability

let gamecounter = 100
// gamecounter++
// ++gamecounter
console.log(++gamecounter,gamecounter++,gamecounter)

