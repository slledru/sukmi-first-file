const { red, yellow } = require('chalk')
const path = require('path')

const filename = path.join(__dirname, 'test.txt')

console.log(red('Hello'));
console.log(yellow(filename));
