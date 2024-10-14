// Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

// se o ponto estiver na origem, escreva a mensagem “Origem”.
//Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
// Entrada
// A entrada contem as coordenadas de um ponto.
// Saída
// A saída deve apresentar o quadrante em que o ponto se encontra.
let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(" ").map((x) => parseFloat(x));

let x = parseFloat(lines[0]);
let y = parseFloat(lines[1]);

function verificaQuadrante(eixoX, eixoY) {
  if (x === 0 && y === 0) {
    console.log("Origem");
  } else if (x === 0) {
    console.log("Eixo Y");
  } else if (y === 0) {
    console.log("Eixo X");
  } else if (eixoX > 0 && eixoY > 0) {
    console.log("Q1");
  } else if (eixoX < 0 && eixoY > 0) {
    console.log("Q2");
  } else if (eixoX < 0 && eixoY < 0) {
    console.log("Q3");
  } else if (eixoX > 0 && eixoY < 0) {
    console.log("Q4");
  }
}

verificaQuadrante(x, y);
