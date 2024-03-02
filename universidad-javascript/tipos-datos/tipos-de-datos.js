//Tipos de datos en JS.
let miEntero = 10;
console.log(miEntero);

/* Las variables en JavaScript al ser de tipado debil pueden cambiar de tipo de dato.
*  Por su naturaleza dinamica, en JavaScript podemos almacenar cualquier tipo de dato en una variable.*/

miEntero = "Hola";
console.log(miEntero);

/* El tipo de dato flotante en JavaScript es un tipo de dato numerico, JavaScript no hace diferencia entre
*  flotantes y enteros.*/

let miFlotante = 7.9;
console.log(miFlotante);

let miCadena = "Hola";
console.log(miCadena);

let miBoolean = true;
console.log(miBoolean);

// En este caso los valores null y undefined que representan sin referencia de memoria (vacio) y sin valor definido.

let miNull = null;
console.log(miNull);

let miUndefined = undefined;
console.log(miUndefined);

// Stack en memoria:

/*
*   ____________________________
*  |         FRAMES             |
*  |____________________________|
*  |Global frame:               |
*  |    miEntero = "Hola"       |
*  |    miFlotante = 7.9        |
*  |    miCadena = "Hola"       |
*  |    miBoolean = true        |
*  |    miNull = null           |
*  |    miUndefined = undefined |
*  |____________________________|
* */

if (typeof miEntero == "number")
{
    console.log(miEntero*2);
}else {
    console.log("No es un numero.")
}
