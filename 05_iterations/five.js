const coding = ['js','rb','java','python','cpp'];

coding.forEach( (item)=>{
      console.log(item);
      

}  );

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe);

const myCoding = [{
    languageName:'javascript',
    languageFileName:"js"
},{     
     languageName:"java",
       languageFileName:"java"
},{
       languageName:"python",
       languageFileName:"py"
}];

myCoding.forEach(  (item)=>{
    console.log(item.languageName,":-",item.languageFileName);
    
}   )

