function sayHello(){
    console.log("Hello from NodeJS!");
}

function sayHelloToDavid(){
    console.log("Hello David");
}

function getDate(){
    return new Date().toLocaleDateString();
}

//module.exports = sayHello;

exports.sayHello = sayHello;
exports.sayHelloToDavid = sayHelloToDavid;
exports.getDate = getDate;