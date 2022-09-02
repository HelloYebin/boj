const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = input[0];
let data;

let arr = [];
for (let i = 0; i < count; i++) {
  data = input[1].split("");
  arr.push(parseInt(data[i]));
}

let result = arr.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(result);
