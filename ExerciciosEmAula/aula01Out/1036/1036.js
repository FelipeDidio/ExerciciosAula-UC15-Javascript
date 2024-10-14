
//Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente
// conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

//formula de báskara = x = (-b ± √(b² - 4ac)) / (2a)
let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

function bhaskara(a, b, c) {
  let delta = b * b - 4 * a * c;
  let base = 2 * a;
  if (delta <  0 || base === 0) {
    return "Impossivel calcular";
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    x1 = x1.toFixed(5);
    x2 = x2.toFixed(5);
    return `R1 = ${x1}\nR2 = ${x2}`;
  }
}
let resultado = bhaskara(a, b, c);
console.log(resultado);