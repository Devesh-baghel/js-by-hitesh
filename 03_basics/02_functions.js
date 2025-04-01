

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