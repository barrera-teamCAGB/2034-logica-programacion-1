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


// operador ternario
// este es como un if abreviado; su sintaxis es: condicion ? valor si es verdadero : valor si es falso

// ejemplo
let palabraPersona = "";
let cantidadPersonas = prompt("dame numero de persona(s): ");
if (cantidadPersonas == 1){
    palabraPersona = "persona";
} else {
    palabraPersona = "personas";
}
console.log(palabraPersona);
// usando el operador ternarioa cambiar el codigo de arriba
let cantidadPersonas = prompt("dame numero de persona(s): ");
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";
console.log(palabraPersona);


// funcion Math.random();
// esta funcion genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo) de forma pseudoaleatoria, con una precisión de hasta 16 decimales

// implementacion, nos apoyaremos de la funcion parseInt(); para sacar el numero entero o tambien la funcion Math.floor();
// ejerciocio de numero aleatorio entre los numeros 1 y 3 

// realizando 3 casos veremos cual es el correcto
// aqui se incluye el cero, 1 y 2 pero no el 3)
let numAleatorio1a3 = parseInt(Math.random() * 3);
console.log(numAleatorio1a3);

// aqui incluimos el 1 2 y el 3 y excluimos el 0
let numAleatorio1a3 = parseInt(Math.random() * 3)+1;
console.log(numAleatorio1a3);

// aqui incluimos el 1 2 y 3 pero a su vez estaria el 0
let numAleatorio1a3 = parseInt(Math.random() * 4);
console.log(numAleatorio1a3);

// la opcion correcta seria la segunda

