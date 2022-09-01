const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < inputData[0]; i++) {
  let data = inputData[i + 1].split(" ");
  let result = parseInt(data[0]) + parseInt(data[1]);
  console.log(result);
}
