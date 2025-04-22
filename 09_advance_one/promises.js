//A Promise is like a guarantee that something will happen in the future — either it will succeed (✅) or fail (❌). It’s a way to handle asynchronous operations (things that take time, like loading data from the internet).

//The problem is that asynchronous code doesn't run immediately — it runs later, after a delay (like fetching data, reading a file, etc.).

//If we try to use the result of an async method before it finishes, it just doesn't work properly. We'd get undefined, or errors, or weird behavior.
const promise1 = new Promise(function(resolve,reject){
    //Do an async Task
    //DB calls , cryptography , network
    setTimeout(function(){
         console.log('Async task is complete');
         resolve()
         
    },1000)
    
})
promise1.then(()=>{
    console.log('promise consumed');
    
})

const promisethree= new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve({username:'chai',email:'chai@example.com'})
    },1000)
})
promisethree.then((user)=>{
    console.log(user);

})

const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
let error = false
   if(!error){
    resolve({username:'devesh',password:'123'})
   }
   else{
    reject('Error: Something went Wrong')
   }
    },1000)

})
promisefour
.then((user)=>{
        console.log(user);
        return user.username;
        })
.then((username)=>{
            console.log(username);
            
        })
.catch((error)=>{
         console.log(error);
         
        })
.finally(()=>{
    console.log('The promise is either resolved or rejected');
    
})

const promiseFive = new Promise((resolve,reject)=>{
   setTimeout(()=>{
               let error = true
               if(!error){
                resolve({username:'javaScript',password:'123'})
               }
               else {
                reject('Error : Something went Wrong')
               }
   },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}
consumePromiseFive()

// async function getAllUsers(){
// try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       console.log(data);
      


// } catch (error) {
//     console.log('E:',error);
    
    
// }

// }
// getAllUsers()         
//       Other Method using promise

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
console.log(error);

})
