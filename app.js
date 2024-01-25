//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}


// ejercio Contador 1 - saber cual es resultado final de este codigo en la consola
let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}

// Desafios
// 1 Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador < 10 ) {
    console.log (`bucle numero ${contador}`);
    contador++;
    console.log(contador);
}

// 2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while (contador > 0) {
    console.log("contador es igual a ", contador);
    contador--;
}

// 3 Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numInicial = 0;
let numUsuario = 0;

numUsuario = prompt("Este es un bucle de donde tu me das un numero y este empezara a contar desde cero hasta llegar a ese numero, que no se mayor a 20");

console.log(numUsuario);

while (numInicial <= numUsuario) {
    console.log("contando" + numInicial);
    numInicial++;
}







