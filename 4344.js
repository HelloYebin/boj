const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = input[0];
let student;
let stuNum;
let school = [];
for (i = 1; i <= count; i++) {
  student = input[i].split(" ");
  stuNum = student[0];

  console.log(student.split("\n"));

  for (j = 1; j <= stuNum; j++) {
    school.push(student[j]);
  }
}
