const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const a = Number(inputData[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
