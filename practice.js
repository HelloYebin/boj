const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(parseInt(input[0] + input[2]));
