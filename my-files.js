const { red, yellow, cyan } = require('chalk')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'test.txt')

// console.log(red('Hello'));
// console.log(yellow(filename));

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(red(err));
//   } else {
//     console.log(files);
//   }
// })
//
// console.log(yellow('Hello!'));

// fs.readFile(filename, 'utf8', (err, data) => {
//   if (err) {
//     console.log(red(err))
//     return
//   }
//
//   const lines = data
//     .split('\n')
//     .filter(x => x.length > 0)
//     .map((line, index) => `${index}: ${line}`)
//   console.log(lines);
// })

// try {
//   const syncContents = fs.readFileSync('23eq2r323r23r', 'utf8')
//   console.log(cyan(syncContents));
// } catch (err) {
//   console.log(red(err));
// }

// fs.unlink(filename, (err) => {
//   if (err) {
//     console.log(red(err))
//     return
//   }
//   console.log('file has been deleted');
// })

function addFruit(type, count, filename='things.csv') {
  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      console.log(red(error))
      return
    }
    const lines = data
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line, index) => line.split(','))
      .reduce((last, line) => {
        last[line[0]] = line[1]
        return last
      }, {})

    lines[type] = count
    console.log(lines);

    const newLines = []
    Object.keys(lines).forEach(key => {
      newLines.push(`${key},${lines[key]}`)
    })
    const writeMe =  newLines.join('\n')
    fs.writeFile(filename, writeMe, { encoding : 'utf8', flag : 'w' }, (err) => {
      if (err) {
        console.log(red(err))
        return
      }
      console.log('file has been saved');
    })
  })
}

addFruit('Apples', 111)
