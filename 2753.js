const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin");

const a = inputData;

if (a % 4 == 0 && (a % 100 !== 0 || a % 400 == 0)) {
  console.log("1");
} else {
  console.log("0");
}
