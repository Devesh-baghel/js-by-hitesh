function SetUsername(username){
    this.username = username
    console.log('called');
    
}

function createUser (username ,email ,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai','chao@gb.com',112)
console.log(chai);
