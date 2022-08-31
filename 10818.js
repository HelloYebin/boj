const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

var a = parseInt(inputData[1]);

console.log(Math.min(a), " ", Math.max(a));
