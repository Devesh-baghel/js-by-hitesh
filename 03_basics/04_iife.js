// Immediately invoked function expressions (IIFE)

function chai (){
    console.log(`DB connected`);
    
}
chai();

// global scope ke pollution ko htane ke liye iife ka use krte hain 
// immediately function execute hoga
// ()()   first parenthesis to contain function and second to call it

(function biscuit(){
    console.log(`db connected`);
    
})();
(()=>{
    console.log(`
    db connected two`);
} )();

//named iife give name to arrow function

( (name)=>{
    console.log(`db connected ${name}`);
    
} )('devesh');