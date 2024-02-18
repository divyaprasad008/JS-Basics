//  JS is loosly typed language as we are not defining the type of the data a variable may have
// Also known as Dynamic typed language
// We use variables as: 
let c_name="Divya" //where Divya is string
console.log(typeof c_name,c_name);

// Later we can also change 
c_name=123 //where 123 is number
console.log(typeof c_name,c_name);

// Typescript is strict type language where you have to define the datatype of the value to be stored in a variable
// const score:number=100

//Symbol has unique value
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId)
console.log(id===anotherId)

const bigNum = 343434534534534534534535345345345
console.log(bigNum);

// 2 types in js on the basis of how they are stored in memory
// 1. Primitive
// 2. Non Primitive 


//1. Primitive

//they are call by value - when the are called, 
//reference of the copy is given not the original value, 
// if you make the change, you are making changes in the copy

// 7 types: String | Number | Boolean | null | undefined | Symbol | BigInt


//2. Non Primitive - Reference Type

//we get direct reference of the memory while accessing them

// Types: Array | Object | Functions

const colors = ["red","blue","pink"];
let myObj = {
    name:"Divya",
    age:23
}

const myFunction = function(){ 
    console.log("Divya");
}
myFunction();
console.log(typeof myObj); //object
console.log(typeof myFunction); //function - it is function object
