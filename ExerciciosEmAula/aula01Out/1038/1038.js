let input = require("fs").readFileSync("dev/stdin", "utf-8");
let values = input.split(" ").map((x)=> Number(x));

const lanches = [4.00, 4.50, 5.00, 2.00, 1.50];

const calculaLanche = (idPedido, quantidade) => {
    let valorFinal = lanches[idPedido -1] * quantidade;
    return console.log(`Total: R$ ${valorFinal.toFixed(2)}`);
}

calculaLanche(values[0], values[1]);
