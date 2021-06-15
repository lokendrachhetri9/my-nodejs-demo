console.log("your module is accessed now...");

var myDateTime = () =>{ 
    return new Date();
}

var some = () =>{
    console.log('some fun!!')
}
//module.exports = myDateTime;
module.exports.myDateTime = myDateTime;
module.exports.some = some;
console.log(module);  