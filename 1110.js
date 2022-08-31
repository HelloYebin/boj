/*const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let a = inputData;
*/
//const a = 0;
let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let cycle = 0;
let tmp = input;
let sum;

while (true) {
  cycle++;

  sum = Math.floor(tmp / 10) + (tmp % 10);
  tmp = (tmp % 10) * 10 + (sum % 10);

  if (a === tmp) {
    break;
  }
}

console.log(cycle);
