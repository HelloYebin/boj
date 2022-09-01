const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin");

const a = parseInt(inputData);

let star = "";

for (let i = 0; i < a; i++) {
  star += "*";
  console.log(star);
}
