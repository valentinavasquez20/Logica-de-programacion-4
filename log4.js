const numero = document.getElementById("numero");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

if (calcular) {
  calcular.addEventListener("click", () => {
    let numeroIngresado = numero.value;

    let numeroFloat = parseFloat(numeroIngresado);

    if (isNaN(numeroFloat)) {
      resultado.textContent = "El dato de entrada no es un número válido.";
      return;
    }

    let secuenciaFibonacci = calcularFactorial(numeroFloat); // Llamar a la función para calcular la secuencia

    resultado.textContent = secuenciaFibonacci.join(" ");
  });
}

function calcularFactorial(numero) {
  let f0 = 0;
  let f1 = 1;
  let f2;

  const secuenciaFibonacci = [];

  for (let i = 0; i < numero; i++) {
    f2 = f0 + f1;
    f0 = f1;
    f1 = f2;

    secuenciaFibonacci.push(f2);
  }

  return secuenciaFibonacci;
}