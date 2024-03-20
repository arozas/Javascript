//Algoritmo para imprimir los primeros 10 numeros de 3 en 3.
// 1, 4, 7, 10
// 1, -2, -5, -8

// While
let rango = -10
let condicion = 1;
let suma = -3;

while (condicion >= rango){
    console.log(condicion);
    condicion+=suma;
}

rango = 10
condicion = 1;
suma = 3;

while (condicion <= rango){
    console.log(condicion);
    condicion+=suma;
}
//====================================================================================================================

//Do while.

rango = 10
condicion = 1;
suma = 3;

do {
    console.log(condicion);
    condicion+=suma;
}while (condicion <= rango);

rango = -10
condicion = 1;
suma = -3;

while (condicion >= rango){
    console.log(condicion);
    condicion+=suma;
}
//====================================================================================================================

//For

for (condicion = 1; condicion >= rango; condicion+=suma){
    console.log(condicion);
}

rango = 10
suma = 3;

for (condicion = 1; condicion <= rango; condicion+=suma){
    console.log(condicion);
}
