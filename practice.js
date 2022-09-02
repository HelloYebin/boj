const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const chess = [1, 1, 2, 2, 2, 8];

let value = [];
let result = "";
for (let i = 0; i < input.length; i++) {
  value.push(parseInt(input[i]));
  let sub = chess[i] - value[i];
  result += sub + " ";
}
console.log(result);
