const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let number = input[i].split(" ");
  console.log(parseInt(number[0]) + parseInt(number[1]));
}
