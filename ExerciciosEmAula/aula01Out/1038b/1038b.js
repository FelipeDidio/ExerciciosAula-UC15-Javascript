const { listeners } = require("process");

let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(" ").map((x) => Number(x));

const valorLanches = {
  1: 4.0,
  2: 4.5,
  3: 5.0,
  4: 2.0,
  5: 1.5,
};

const codigo = lines[0];
const qtdde = lines[1];

const calculaLanche = (idPedido, quantidade) => {
  let valorFinal = idPedido * quantidade;
  return console.log(`Total: R$ ${valorFinal.toFixed(2)}`);
};

calculaLanche(codigo, qtdde);
