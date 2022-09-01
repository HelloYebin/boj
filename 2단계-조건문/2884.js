const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = parseInt(inputData[0]);
let min = parseInt(inputData[1]);

min = min - 45;

if (min < 0) {
  min = min + 60;
  hour = hour - 1;
  if (hour === -1) {
    hour = hour + 24;
  }
}
console.log(hour, min);
