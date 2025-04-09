let myHeros = ['thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`Spider Power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh= function(){
    console.log('this function is present in all objects');
    
}
heroPower.hitesh()
myHeros.hitesh()
Array.prototype.myNameCall = function(){
    console.log('hey devesh');
    
}
//myHeros.myNameCall()
//injecting function in objects 


//Inheritance

const User= {
    username:'chai',
    email:'chai@google.com'
}



const Teacher = {
    makeVideo:false
}

const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = 'chai        '

String.prototype.trueLength = function(){
  console.log(`${this}`);
  //console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
  

}
anotherUserName.trueLength()
'black'.trueLength()
