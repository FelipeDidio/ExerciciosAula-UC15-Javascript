//a1 a2 a3 . a4 a5 a6 . a7 a8 a9-b1 b2

// Para descobrirmos o dígito b1, procedemos da seguinte maneira:
// multiplicamos o primeiro por 1, o segundo por 2, o terceiro por 3, o quarto por 4 e vamos assim até multiplicarmos o nono por 9.
//Então, somamos tudo isto. Após termos somado tudo, dividimos por 11.
//O dígito b1 será o resto da divisão (ou 0, caso o resto seja 10).

//Para o segundo dígito verificador, temos o seguinte:
//multiplicamos o primeiro por 9, o segundo por 8, o terceiro por 7, o quarto por 6 e vamos assim até multiplicarmos o nono por 1.
// Então, somamos tudo isto e dividimos por 11. O dígito b2 será o resto da divisão (ou 0, caso o resto seja 10).

let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

function verificaCpf(lines) {
  let multiplicador = 1;
  let somaDigitos10 = 0;
  let somaDigitos11 = 0;

  for (let i = 0; i <= 10; i++) {
    if (lines[i] != ".") {
      somaDigitos10 += lines[i] * multiplicador;
      multiplicador++;
    }
  }

  multiplicador = 9;

  for (let i = 0; i <= 10; i++) {
    if (lines[i] != ".") {
      somaDigitos11 += lines[i] * multiplicador;
      multiplicador--;
    }
  }

  let digito10 = somaDigitos10 % 11;
  if (digito10 == 10) {
    digito10 = 0;
  }

  let digito11 = somaDigitos11 % 11;
  if (digito11 == 10) {
    digito10 = 0;
  }
  return digito10 == lines[12] && digito11 == lines[13];
}
for (let i = 0; i < lines.length; i++) {
  if (verificaCpf(lines[i])) {
    console.log("CPF valido");
  } else {
    console.log("CPF invalido");
  }
}
