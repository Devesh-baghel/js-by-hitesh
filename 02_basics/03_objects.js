// singleton constructor se banega 

// object literals 
// Object.create using constructor
const symbol= Symbol("mysymbol");

const JsUser = {
    name:"devesh",
    age:21,
    [symbol]:"mysymbol",
    location:"delhi",
    email: "devesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"]

 }
 //add symbol in object use  [ ] for key in leftside and can't access by JsUser.mysym
  // use JsUser[mysym]
//  console.log(JsUser.email); // accessing
//  console.log(JsUser['email']);

 JsUser.email="lol@gcam.com";  // to change value 

 //Object.freeze(JsUser);  // to stop anyone to change the values of this object

JsUser.greeting = function (){
    console.log("heello Js USer");
    
}
JsUser.greetingTwo = function (){
    console.log(`hello Js User , ${this.name}`);
    
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());





 
 