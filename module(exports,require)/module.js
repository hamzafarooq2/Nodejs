// require    -function to use modules (CommonJS)
//  module - info about enviornment where the program is being executed

const names = require('./1-names');
const sayHi = require('./2-arrowFunction');
const data = require('./3-alternative-flavour');

require('./4-function');

sayHi('Zia');
sayHi(names.Ali);
sayHi(names.Hamza);

console.log(data);








