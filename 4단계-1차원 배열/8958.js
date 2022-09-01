const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input[0];

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count += 1;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
