const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let number = input[i].split(" ");
  console.log(parseInt(number[0]) + parseInt(number[1]));
}
