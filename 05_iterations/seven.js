const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.map((num)=>{
// return num+10;
//  })
 //console.log(newNums);
// this is chaining
 const newNums = myNums.map((num)=> num*10).map( (val)=>val+1 ).filter( (val)=> val>=40)
 //console.log(newNums);

 const number= [1,2,3,4]

 const myTotal = number.reduce((acc,currval )=>{
    //console.log(`acc :${acc} and currval : ${currval}`);
    
     return acc + currval

 },0)
 //console.log(myTotal);

 const shoppingCart = [{
    course:"js",
    price:999
 },{
    course: "android dev",
    price:2999
 },{
    course:"full stack web",
    price:5999
 }];
 const totalPrice = shoppingCart.reduce ((acc,item)=>{
    return acc + item.price
 },0)
 console.log(totalPrice);
 
 
 
 