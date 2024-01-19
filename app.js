
// El método Window.alert() muestra un dialogo de alerta con un mensaje opcional, y aguardará hasta que el usuario cierre la ventana de diálogo
//alert ('Hello Word');
// puede usarse comillas simple o comillas dobles
// al final de cada linea de codigo se recomienda terminar con punto y coma

// El método Window.prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
//prompt ("Este es un juego de adivina el numero entre el 1 y 10 para iniciar, Indicame un numero: ");

// Creamos una variable por el momento solo usaremos let, con el nombre en camelCase
// Como buena practica igual que el nombre de la vriable en camelCase la declaracion de variables se hcen al inicio, sabiendo de antemano cuale se van a ocupar
//let numeroSecreto = 6;
//let numeroUsuario = prompt ("Este es un juego de adivina el numero entre el 1 y 10 para iniciar, Indicame un numero: ");

// Console.log() Muestra un mensaje en la consola web (o del intérprete JavaScript).
//console.log (numeroUsuario);

// Condicional if - Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else
// lo usaremos para comprar 2 variables
//if (numeroSecreto == numeroUsuario) {
//    alert("Correcto ese es el numero secreto");
//}



// ejercicio numero 1

//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
//alert('mensajeDeBienvenida');  // como esta entre comillas pasa en automatico como una cadena y no como una variable
//alert(mensajeDeBienvenida); // aqui si se mostrara lo que contiene la variable ya que no esta entre comillas


// ejercicio 2

/* alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 
 */

// ejercicio 3

/* let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
} */


// Desafios 

// 1 Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
alert("Bienvenida y bievenido a nuestro sitio web!");

// 2 Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";
console.log(nombre);

// 3 Crea una variable llamada edad y asígnale el valor 25.
let edad = 25;
console.log(edad);

// 4 Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;
console.log(numeroDeVentas);

// 5 Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;
console.log(saldoDisponible);

// 6 Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");

// 7 Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// 8 Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombreUsuario .
let nombreUsuario = prompt("Nombre del Usuario");
console.log(nombreUsuario);

// 9 Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edadUsuario.
let edadUsuario = prompt ("Ingrese su edad");
console.log(edadUsuario);

// 10 Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
if (edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}