const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin");

// const a = 3;
const a = inputData;
let result = 0;

for (let i = 0; i < a; i++) {
  result += i + 1;
}
console.log(result);
