var lib = require("./clase01Lib");
var util = require("util");

console.log("LIB", lib);
//lib();

lib.sayHello();
lib.sayHelloToDavid();
console.log(lib.getDate());

console.log("Date", util.types.isDate(new Date()));