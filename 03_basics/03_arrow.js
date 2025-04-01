const user = {
  username: "devesh",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username},welocome to the website`);
    
  }
}
// user.welcomeMessage();

// user.username="sammmy";
// user.welcomeMessage();

//console.log(this)
// function chai(){
//     let username = "krishna"
//     console.log(this.username);
    
// }
// chai();

const chai = ()=>{
    let username="black heart"
    console.log(this.username);
    
}
chai();

const addTwo = (num1,num2) =>{
    console.log(num1+num2);
    
}
addTwo(4,3)
//other way 
// no curlly braces then no need to write return staatement 
// it is assumed your are goint to write only one statement
const addThree = (num3,num4) => console.log(num3+num4);
addThree(5,6);
