const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin");

const a = parseInt(inputData);

// const a = 10;

for (let i = 1; i <= a; i++) {
  let stars = "";
  for (let j = 0; j < a - i; j++) {
    stars += " "; //공백부분
  }
  for (let j = 0; j < i; j++) {
    stars += "*"; //공백 뒤 *
  }
  console.log(stars);
}
