const { red, yellow } = require('chalk')
const path = require('path')
const fs = require('fs')

// const filename = path.join(__dirname, 'test.txt')
//
// console.log(red('Hello'));
// console.log(yellow(filename));

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(red(err));
  } else {
    console.log(files);
  }
})

console.log(yellow('Hello!'));
