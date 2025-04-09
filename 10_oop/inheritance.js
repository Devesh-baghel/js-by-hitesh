class User{
    constructor(username){
        this.username= username
    }

    login(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password= password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
    
}
const chai = new Teacher('chai','Chai@gmail.com','123')

chai.login()

const tea = new User('tea')
tea.login()

