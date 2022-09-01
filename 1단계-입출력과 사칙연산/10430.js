const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

var a = parseInt(inputData[0]);
var b = parseInt(inputData[1]);
var c = parseInt(inputData[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
