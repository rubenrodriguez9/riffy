let fruitNut = require('./backend');

let x = getInput(0)

console.log(fruitNut(x))























function getInput(i) {
    return process.argv[i + 2];
  }