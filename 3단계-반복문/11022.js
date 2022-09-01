const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = inputData[0];

for (let i = 1; i <= count; i++) {
  let num = inputData[i].split(" ");
  let result = parseInt(num[0]) + parseInt(num[1]);
  console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${result}`);
}
