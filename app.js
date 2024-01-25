// 04 Buenas practicas de programacion

// break; nos servira para salir de los bucles tanto para frenar la condicion como para no hacerlo infinito

// ejemplos
// salir del bucle despues de 5 intentos de adivinar el numero

// ejemplo 1 con condicion while
let numeroSecreto = Math.floor(Math.random()*2);
let intentos = 0;

while (intentos < 5) {
    let intento = parseInt(prompt("ingresa un numero del 0 al 9: "));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`descubriste el numero secreto ${numeroSecreto}`);
    break;
  }
}

// ejemplo 2 con la condicion for
let numeroSecreto = Math.floor(Math.random()*3);
console.log(numeroSecreto);

for (let intentos = 0; intentos < 5; intentos++) {
	let intento = parseInt(prompt("ingresa un numero del 0 al 9: "));
  if (intento == numeroSecreto) {
    alert(`descubriste el numero secreto ${numeroSecreto}`);
    break;
  } 
}

