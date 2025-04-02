// [ {}, {}
// for of loop
const arr = [1,2,3,4,5];

for (const element of arr) {
    //console.log(element);
    
}
arr.forEach((item)=>{
  //  console.log(item);
    
});

// Maps 
const map = new Map();
map.set('IN'," India")
map.set('USA'," United States of America")
map.set('FR',"France")

//console.log(map);

for(const key of map){
    console.log(key);
    
}

for ( const [key,value] of map){
    //console.log(key,':-',value);
    
}

const  myObject = {
    game1: 'NFS',
    game2:'Spiderman'
}
// for(const i of Object){
//     console.log(i);
    
// }  for of does not work with objects
