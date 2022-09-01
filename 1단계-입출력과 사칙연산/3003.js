const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const chess = [1, 1, 2, 2, 2, 8];

let result = "";
for (let i = 0; i < chess.length; i++) {
  let substract = parseInt(chess[i]) - parseInt(input[i]);
  result += substract + " ";
}
console.log(result);
