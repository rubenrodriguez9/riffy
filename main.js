let fruitNoot = require('./backend');

let x = getInput(0)

if(fruitNoot(x) === undefined){
  console.log(`Sorry, we don't know that fruit yet`)
}






















function getInput(i) {
    return process.argv[i + 2];
  }