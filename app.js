
let porcentajeDescuento = 0;

let cantidadMillas = prompt("Ingrese la cantidad de millas");

// Personas con una cantidad de millas inferior a 5,000 no reciben descuento.

// Personas con una cantidad de millas superior a 30,000 reciben un 20% de descuento.

// Personas con una cantidad de millas superior a 5,000, pero inferior a 30,000 reciben un 10% de descuento.

/* if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;	
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;	
} else {
    porcentajeDescuento = 0;
} */


// probando las opciones
// opcion A
/* if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
}
console.log(porcentajeDescuento);

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;	
} else {
    porcentajeDescuento = 0;
} */

// opcion B
/* if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;	
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;	
}  */

// opcion C
/* if (cantidadMillas > 5000) {
    porcentajeDescuento = porcentajeDescuento + 10;
 } else {
        porcentajeDescuento = porcentajeDescuento + 20;
 
    }

console.log(porcentajeDescuento);

if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    porcentajeDescuento = 0;
} */

// opcion D, esta opcion si funciona
if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    if (cantidadMillas > 5000) {
            porcentajeDescuento = porcentajeDescuento + 10; 
    }
} 



console.log(porcentajeDescuento);


