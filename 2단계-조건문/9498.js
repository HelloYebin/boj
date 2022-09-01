const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin");

const a = inputData;

if (100 >= a && a >= 90) {
  console.log("A");
} else if (a >= 80 && 89 >= a) {
  console.log("B");
} else if (a >= 70 && 79 >= a) {
  console.log("C");
} else if (a >= 60 && 69 >= a) {
  console.log("D");
} else {
  console.log("F");
}
