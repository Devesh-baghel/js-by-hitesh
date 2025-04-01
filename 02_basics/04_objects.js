const tinderUser = {}
tinderUser.id="12ab";
tinderUser.name = "sam";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    userCredential: {
        userFullName: "Devesh baghel ",
        userAge:18,
    }
};

//console.log(regularUser.userCredential.userFullName);
 
const obj1= {1:"a",2:'b' };
const obj2= {3:"a",4:'b' };
const obj3= {5:"a",6:'b' };

// const obj4 = {obj1 , obj2} same problem as array arises object inside object
//const obj4 = Object.assign({},obj1,obj2,obj3);
//console.log(obj4);
const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));





