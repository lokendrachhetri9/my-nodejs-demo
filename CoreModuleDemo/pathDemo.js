const path = require('path');

const myPath = "./hello.txt"

console.log(path.basename(myPath));
console.log("Dir name : "+ path.dirname(myPath));
console.log("Ext name: "+ path.extname(myPath));
console.log("isAbsolute : " + path.isAbsolute(myPath));
