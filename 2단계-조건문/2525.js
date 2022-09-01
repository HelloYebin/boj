const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let min = parseInt(input[0].split(" ")[1]);
let time = parseInt(input[1]);

min = time + min;
if (min >= 60) {
  hour = hour + Math.floor(min / 60);
  min = min - Math.floor(min / 60) * 60;

  if (hour >= 24) {
    hour = hour - Math.floor(hour / 24) * 24;
  }
}
console.log(hour, min);
