// 05.Desafios
// Proyecto del Aula anterior
//Variables

// propuesta, que el usuario elija un rango de 2 numeros de los que quiera adivinar y otra propuesta es que cuantos intentos quisiera tener para adivinar

// la propuesta de un rango de 2 numeros sera que por medio de 2 prompt los proporcione y estos a su vez sean numero enteros, por medio de matematicas la siguiente formula es para sacar ese intervalo 
// aqui no se incluye el numero2
// * (numero2-numero1) + numero1
// aqui se incluyen los 2 numeros
// * (numero2-numero1+1) + numero1

// una variable preguntando cuantos intentos quiere tener, como regla tendras 1
// esta sustituira ala de intentos maximos y lo tomaremos de un prompt
//let maximosIntentos = prompt("Cuantos intentos te gustaria tener para adivinar el numero secreto:");
// como opcion a esta variable le colocaremos el parseFloat() para asegurar que sea un numero

// ahora comentaremos y sustituiremos 

let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

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