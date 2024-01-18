
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

javascript
alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 
