const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let price = 0;
let maxNum = 0;

if (a === b && a === c) {
  price = 10000 + a * 1000;
} else if (a === b || b == c || a == c) {
  if (a === b || a == c) {
    price = 1000 + a * 100;
  } else if (b == c) {
    price = 1000 + b * 100;
  }
} else {
  maxNum = Math.max(...input);
  price = maxNum * 100;
}
console.log(price);
