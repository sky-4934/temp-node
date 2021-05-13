//CommonJS, every file is a module (by default)
//Modules - Encapsulated code(only share minimum)
//modules
const names = require("./4-names");
const sayHi = require("./5-utils");
const diff1 = require("./6-altflavor");
console.log(diff1);
console.log(names);

sayHi(names.matilda);
sayHi(names.babbu);
