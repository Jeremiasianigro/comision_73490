function generarNumeroSecreto(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verificarIntento(numeroUsuario, numeroSecreto) {
  return numeroUsuario === numeroSecreto;
}

const numeroSecreto = generarNumeroSecreto(1, 10);
const intentos = [];
let intentosRestantes = 3;

while (intentosRestantes > 0) {
  const entrada = prompt(`Adiviná el número secreto (entre 1 y 10). Te quedan ${intentosRestantes} intento(s):`);
  const numeroUsuario = Number(entrada);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
    alert("Por favor, ingresá un número válido entre 1 y 10.");
    continue;
  }

  intentos.push(numeroUsuario);

  if (verificarIntento(numeroUsuario, numeroSecreto)) {
    alert("Adivinaste el número secreto!");
    break;
  } else {
    alert("No es ese número.");
    intentosRestantes--;
  }
}

if (intentosRestantes === 0) {
  alert(" Se te acabaron los intentos. El número secreto era"+ numeroSecreto);
}

console.log("Intentos del usuario:", intentos);