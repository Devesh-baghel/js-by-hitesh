const user = {
    username:'devesh',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(this.username);
        
    }
}
// console.log(user['username']);
// console.log(user.getUserDetails());

//const promiseOne = new Promise()
//const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount=loginCount
    this.isLoggedIn= isLoggedIn
    return this
}
const userOne = new User('devesh',12,true)
const userTwo = User('chai Aur codea',11,false)
console.log(userOne.constructor);

// when we use new keyword an empty object is created
// a constructor function is called because of new keyword .
//it packes the arguments in new and injected in this keyword
