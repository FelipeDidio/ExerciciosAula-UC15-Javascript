function calcularsomaAssincrona(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}
calcularsomaAssincrona(a, b);