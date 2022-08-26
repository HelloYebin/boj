const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const chess = [1, 1, 2, 2, 2, 8];
for (i = 1; i <= chess.length; i++) {
  let result = input.map((i) => chess[i] - input[i]);
}
console.log(result);
