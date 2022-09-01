const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];

for (i = 0; i < input.length; i++) {
  numbers.push(parseInt(input[i]));
  numbers[i] %= 42;
}

const set = new Set(numbers);
const uniqueArr = [...set];
console.log(uniqueArr.length);
