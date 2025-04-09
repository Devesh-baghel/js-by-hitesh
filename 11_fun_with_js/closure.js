function outer(){
    let username ='devesh';
    function inner(){
        console.log(username);
        
    }
    inner()
}
outer()
console.log(username);
