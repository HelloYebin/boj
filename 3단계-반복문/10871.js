const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputs = [];
inputs = inputData[0].split(" ");

let count = parseInt(inputs[0]);
let standard = parseInt(inputs[1]);

let result = "";
let num = inputData[1].split(" ");
for (let i = 0; i < count; i++) {
  if (num[i] < standard) {
    result += num[i] + " ";
  }
}
console.log(result);
