const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = input[0];
let score = input[1].split(" ");
let scores = [];
let fake = [];
for (let i = 0; i < count; i++) {
  scores.push(parseInt(score[i]));
}
for (let j = 0; j < count; j++) {
  fake.push((scores[j] / Math.max.apply(null, scores)) * 100);
}

let sum = fake.reduce(function (acc, curr) {
  return acc + curr;
});

console.log(sum / fake.length);
