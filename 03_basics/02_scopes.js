

var c= 300;  // global scope 
if(true){
    let a =20;
    const b = 30;
    var c = 40;
    // block or local scope 
    //values outside {} wont work for let and const 
}
//console.log(a);
//console.log(b);
console.log(c);

function one(){
    const username = "devesh";

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    two();
}
one();

// +++++++++++++++++ interesting +++++++++++

function addOne(num){
   return num+1;

}
addOne(5);
addTwo(5);    
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(2));
