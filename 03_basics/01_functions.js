function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result;

}
const result = addTwoNumbers(4,6);
//console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        
        return
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage());

// here it is called rest operator ... and also it is a spread operator
function calculatePrice(...num1){
    return num1;
}

//console.log(calculatePrice(200,500,400));

const user = {
    username: "devehs",
    price:199
}
function handleObject(anyobject){
 return ` Username is ${anyobject.username} and price is ${anyobject.price}`;
}
handleObject({
    username:"Sam",
    price:399
});

