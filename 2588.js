const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = input[0];
const b = input[1];

let sum = 0;
let tmp = b;
let rest = 0; //tmp의 1의 자리
let result = 0; //a와 rest곱
let jari = 1;

while (tmp != 0) {
  /* 현재 tmp값의 1의 자리 연산 진행*/
  rest = tmp % 10;
  result = a * rest;
  console.log(result);
  sum += result * jari;

  /* 다음 자리 연산 준비 */
  jari *= 10;
  tmp -= rest;
  tmp /= 10;
}

console.log(sum);
