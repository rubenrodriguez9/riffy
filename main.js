let fruitNoot = require('./nutrition');
let history = require('./origin');

let fruit = getInput(0);
let origin = getInput(1);


 if(origin === undefined){
   console.log(fruitNoot(fruit))
 } else console.log(history(fruit, origin));























function getInput(i) {
    return process.argv[i + 2];
  }