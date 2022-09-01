const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];

for (i = 0; i < input.length; i++) {
  numbers.push(parseInt(input[i]));
}
console.log(Math.max.apply(null, numbers));
console.log(numbers.indexOf(Math.max.apply(null, numbers)) + 1);
