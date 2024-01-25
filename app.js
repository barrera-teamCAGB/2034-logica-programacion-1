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


// otras funciones de ayuda
// typeof, no sirve para saber que tipo de variable es una variable, puedes ser un string o number
// parseInt, nos va a retornar la parte entera de un string esto sucede mucho cuando usamos el promt y ahi se coloca un numero en realidad esta recibiendo un string y ya con esa funcion  aseguramos que trabajaremos con numeros

let variableRecibida = prompt ("dame un numero: ");
// aqui recibiremos en la caja de texto del prompt el numero pero java lo tomara como un string para ver con que estamos trabajando usaremos typeof en la consola

console.log (typeof(variableRecibida));

// aqui otro ejemplo
let cadena = "texto en esta variable";
let supuestamenteNumero = "42";
let numero = 42;
// imprimimos que tipo de variable tiene cada una
console.log (typeof(cadena));
console.log (typeof(supuestamenteNumero));
console.log (typeof(numero));

// ahora con parseInt, la variable supuestamenteNumero la cambiaremos a entero
let cambioANumero = parseInt(supuestamenteNumero);

// imprimimos el resultado en la consola
console.log (typeof(cambioANumero));




/// copia del proyecto de adivinar numero empleando todo lo visto
//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}