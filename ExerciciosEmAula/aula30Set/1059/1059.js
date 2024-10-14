// Números Pares
// Faça um programa que mostre os números pares entre 1 e 100, inclusive.

let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

let num = parseInt(lines.shift());
for (i = 0; i < 100; i++) {
  if (num % 2 === 0) {
    console.log(num);
    i++;
}
num +=2;
}
