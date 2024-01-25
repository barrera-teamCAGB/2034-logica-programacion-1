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
while (contador <= 10 ) {
    console.log (`bucle numero ${contador}`);
    contador++;
    console.log(contador);
}

// 2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while (contador >= 0) {
    console.log("contador es igual a ", contador);
    contador--;
}

// 3 Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numInicial = 0;
let numUsuario = 0;

numUsuario = prompt("Este es un bucle de donde tu me das un numero y este empezara a contar desde cero hasta llegar a ese numero, que no se mayor a 20");

console.log(numUsuario);

while (numInicial <= numUsuario) {
    //alert("contando " + numInicial);
    console.log("contando" + numInicial);
    numInicial++;
}

// 4 Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numUsuario = 0;

numUsuario = prompt("Este es un bucle de donde tu me das un numero y este empezara una cuenta regresiva hasta llegar a tu numero");

console.log(numUsuario);

while (numUsuario >= 0) {
    console.log("contando" + numUsuario);
    numUsuario--;
}



// Utilizando operadores


// AND (&&)
// El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y evaluar si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado será... verdadero. De lo contrario, lógicamente será falso. Por ejemplo:

let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}



// OR( | | )
// El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. Si ambas son falsas, el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false; let tieneBanana = true;

// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }

  

/*
Otros tipos de operadores lógicos

Operador	    Nombre	        Ejemplo	    Resultado
    ==	       Igual	         A == B	    Verdadero si A es igual a B
    !=	       Diferente	     A != B	    Verdadero si A no es igual a B
    <          Menor que	     A < B	    Verdadero si A es menor que B
    >	       Mayor que	     A > B	    Verdadero si A es mayor que B
    <=	       Menor o igual	 A <= B	    Verdadero si A es menor o igual a B
    >=	       Mayor o igual	 A >= B	    Verdadero si A es mayor o igual a B


Operadores Lógicos
Operador	Nombre	    Ejemplo	                Resultado
    &&	    Y / AND	    (A > B) && (B == C)	    Verdadero si A es mayor que B y B es igual a C
    ||	    O / OR	    (A > B) || (B == C)	    Verdadero si A es mayor que B o B es igual a C
    !	    NEGACIÓN	!(A == B)	            Verdadero si A NO es igual a B


*/


