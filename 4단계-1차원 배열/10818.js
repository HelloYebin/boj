const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let number = input[1].split(" ");
let numbers = [];

for (i = 0; i < number.length; i++) {
  numbers.push(parseInt(number[i]));
}

const minValue = Math.min.apply(null, numbers);
const maxValue = Math.max.apply(null, numbers);

console.log(`${minValue} ${maxValue}`);
