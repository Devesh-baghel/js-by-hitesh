

const userEmail = "h@hitesh.ai";

if(userEmail){
    console.log("got the user email");
    
}
else {
    console.log("dont have user email");
    
}

//falsy values

// false , 0 , null , "", undefined , NaN, -0 , BigInt 0n

// "0", 'false', " ", [], {}, function(){}

const emptyObj = {};

if(Object.keys(emptyObj).length===0){
    console.log('empty object');
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1);
let var1;
var1= null ?? 10;   // 10 assigned if null returns from api
//var1 = undefined ?? 10


