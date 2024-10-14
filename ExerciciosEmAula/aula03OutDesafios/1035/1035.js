// Leia 4 valores inteiros A, B, C e D.
// A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

//Entrada
//Quatro números inteiros A, B, C e D.

//Saída
//Mostre a respectiva mensagem após a validação dos valores.
let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(" ").map((x) => parseFloat(x));

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);

//se B for maior do que C
//e se D for maior do que A,
//e a soma de C com D for maior que a soma de A e B,
// e se C e D, ambos, forem positivos
// e se a variável A for
//
function selecionaValores(a, b, c, d) {
  let somaCcomD = c + d;
  let somaAcomB = a + b;
  if (
    b > c &&
    d > a &&
    somaCcomD > somaAcomB &&
    c >= 0 &&
    d >= 0 &&
    a % 2 === 0
  ) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}

selecionaValores(a, b, c, d);
