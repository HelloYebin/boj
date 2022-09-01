const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = input[0];

for (let i = 1; i <= count; i++) {
  let num = [];
  num = input[i].split("");
  console.log(num[1]);
}
