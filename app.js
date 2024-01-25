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

// comentamos esta linea y creamos una nueva variable donde despues se la pediremos al user y sera el primer intervalo
//let numeroMaximoPosible = 100;
let intervalo1;
// creamos el segundo intervalo donde tambien se lo pediremos
let intervalo2;
// comentamos la siguiente y solo crearemos la variable
// let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroSecreto;
// la siguiente l dejamos
let numeroUsuario = 0;
// la siguiente la dejamos y por lo menos tendra un intento
let intentos = 1;
// la siguiente ya no se utiliza por que se izo con no recuerdo el nombre pero es donde se abrevia el if
//let palabraVeces = 'vez';
// la comentamos y solo la creamos para despues pedirserla al usuario
// let maximosIntentos = 6;
let maximosIntentos;

// iniciamos donde explicamos como se juega
alert("este es un juego de adivinar el numero, primero se le pedira 2 numeros que definiran el intervalo de los numeros donde aleatoriamente existira un numero incluyendose esos 2 numeros");
// podemos colocarle la funcion de parsefloat para crear el numero entero ese va antes del prompt lo cual lo incluira sintaxist de como quedaria parseFloat(prompt) pero para efector de operaciones sera el intervalo1 con Math.ceil y el intervalo2 con Math.floor para que el resultado de la operacion este correcto
intervalo1 = Math.ceil(prompt("primer numero donde iniciara el primer intervalo, este sera incluido en el intervalo"));
console.log("vemos que el primer numero es: " + intervalo1);
intervalo2 = Math.floor(prompt("segundo numero donde terminara el intervalo, este sera incluido en el intervalo"));
console.log("vemos que el segundo numero fue: " + intervalo2);

//creamos la formula para crear el numero secreto o aleatorio * (numero2-numero1+1) + numero1
numeroSecreto = Math.floor(Math.random()*(intervalo2-intervalo1+1)+intervalo1);
// verificamos cual fue
console.log("el numero secreto es: " + numeroSecreto);

// ahora le pedimos en cuantos intentos lo quiere adivinar
maximosIntentos = prompt("En cuantos intentos te gustaria adivinar el numero secreto:");
// comprobamos que numero coloco
console.log("el numero de intervalo fue de: " + intentos);


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${intervalo1} y ${intervalo2}  por favor:`));

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