const myObject = {
    js:'javascript',
    cpp:' c++',
    py: 'python'
};

for (const key in myObject) {
    console.log(`key for ${key} is ${myObject[key]}`);
    
}

const programming = ['js','rb','py','cpp'];

for (const key in programming) {
    console.log(programming[key]);
    
}
const map = new Map();
map.set('IN'," India")
map.set('USA'," United States of America")
map.set('FR',"France")

for (const key in map) {
   console.log(key);
   
}