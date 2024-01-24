// //Variables
// let numeroSecreto = 2;
// let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

// console.log(numeroUsuario);
// /*
// Este código realiza
// la comparación
// */
// if (numeroUsuario == numeroSecreto) {
//     //Acertamos, fue verdadera la condición
//     // la comilla invertida (interpolacion) sirve para colocar tanto para combinar valor literal con variables conocido tambien con la concatenacion pero aqui todo va entre las comillas invertidas, las variables se colocan iniciando con el simbolo de peso y la variable va entre corchetes, tambien se puede colocar codigo java pero eso se vera despues 
//     alert(`Acertaste, el número es: ${numeroUsuario}`);
// } else {
//     //La condición no se cumplió
//     alert('Lo siento, no acertaste el número');
// }

// // ejercio 1 
// let edad = prompt("Ingrese su edad:");

// if (edad >= 18) {
//   console.log("Eres mayor de edad.");
// } else {
//   console.log("Eres menor de edad.");
// }



//javascript
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert(`Acertaste el numero es ${intento}`);
} else {
    // prueba con inciso A
    //alert('El número secreto era ' + numeroSecreto, ' y elegiste ' + intento);
    // prueba con codigo de inciso B
    //alert('El número secreto era ' + numeroSecreto + intento);
    // prueba con inciso C
    //alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
    //prueba con inciso D
    alert('El número secreto era numeroSecreto, y elegiste intento');    
}
