// const fs = require("fs");

// const inputData = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map(Number);

const chess = [1, 1, 2, 2, 2, 8];
const pick = [0, 1, 2, 2, 2, 7];

let answer = 0;

for (i = 0; i < chess.length; i++) {
  answer = chess[i] - pick[i];
}
console.log(answer);
