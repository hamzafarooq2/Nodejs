// -------------Synchronus approach

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/test.txt', 'utf8');

writeFileSync(
    './content/result.txt',
    `Here is the result: ${first}.`, 
    {flag: 'a'}        //  by this it will not override 
)

console.log('done with this task');
console.log('starting with next one');