// Primitive 

// 7 types: String ,Number ,Boolean ,null , undefined, Symbol, ,BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTamp = null

const id =Symbol('123')
const anotherId=Symbol('123')

// const bigNumber = 32165465n       BigInt = n at end


// Reference ( Non primitive)

//Array ,Objects , Functions

const heros = ["shaktiman","naagraj", "doga"];

let myobj = {
    name:"hello",
    age:22,
};

const variable = function myFunction(){
    console.log("hello world")
}

console.log(typeof variable);