//EJERCICIO ACUMULADOR SUMA.

//Realizar la suma de los primeros 5 números utilizando los ciclos de JS.

//Ciclo For:
let cantidadNumerosSumar = 5, sumaAcumulada = 0;

for(let contadorVueltas = 1; contadorVueltas <= cantidadNumerosSumar; contadorVueltas++)
{
    sumaAcumulada += contadorVueltas;
}
console.log(sumaAcumulada);

//====================================================================================================================
// Ciclo While

sumaAcumulada = 0;
let contadorVueltas = 0;
while (contadorVueltas <= cantidadNumerosSumar){
    sumaAcumulada += contadorVueltas;
    contadorVueltas++;
}
console.log(sumaAcumulada);

//====================================================================================================================
// Ciclo Do While

sumaAcumulada = 0;
contadorVueltas = 1;
do{
    sumaAcumulada += contadorVueltas;
    contadorVueltas++;
}
while (contadorVueltas <= cantidadNumerosSumar);

console.log(sumaAcumulada);
