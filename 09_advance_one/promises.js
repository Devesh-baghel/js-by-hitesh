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