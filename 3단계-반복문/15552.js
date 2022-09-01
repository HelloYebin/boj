const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = parseInt(inputData[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  let num = inputData[i].split(" ");
  result += parseInt(num[0]) + parseInt(num[1]) + "\n";
}
console.log(result);
