const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const compareResult = inputData[0];
const count = inputData[1];
let realResult = 0;

for (let i = 0; i < parseInt(count); i++) {
  let data = inputData[i + 2].split(" ");
  realResult += parseInt(data[0]) * parseInt(data[1]);
}

if (realResult === parseInt(compareResult)) {
  console.log("Yes");
} else {
  console.log("No");
}
