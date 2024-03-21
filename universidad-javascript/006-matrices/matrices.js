//Matrices en JavaScript

//Declaración de una matríz:

let matriz = [[],[]]; //matriz bidimensional.

//Declararión simplificada:
let matrizSimplificada = [[100, 200, 300], [400, 500, 600]];

//Modificar valores
// Renglón 0:
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

// Renglón 1:
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//Leer valores:

//Toda la matriz.
console.log(matriz);
console.log(`Elemento [0][1] = ${matriz[0][1]}`);
console.log(`Elemento [1][2] = ${matriz[1][2]}`);

//Iterar matrices bidimensionales.
// Para verificar la cantidad de renglones podemos usar la propiedad length.
console.log(matriz.length); // 2 renglones.
//Para verificar las columnas debemos ver cuantas columnas tiene cada renglón. Esto se debe hacer por cada renglón
//ya que cada renglón puede tener distinta cantidad de columnas.

console.log(matriz[0].length); // 2 renglones.
console.log(matriz[1].length); // 2 renglones.

let columnas = 3;

// Renglones
for (let renglones = 0; renglones < matriz.length; renglones++){
    // Columnas
    for (let columnas = 0; columnas < matriz[renglones].length; columnas++){
        console.log(`Elemento en la fila: [${renglones}], columna: [${columnas}] = ${matriz[renglones][columnas]}`);
    }
}
//=====================================================================================================================
// MATRIZ MULITIDEMENCIONAL.

// Declaración de una matriz de 4 dimensiones
let matriz4D = [];
const dimension1 = 3;
const dimension2 = 4;
const dimension3 = 2;
const dimension4 = 5;

// Inicialización de la matriz con valores aleatorios
for (let i = 0; i < dimension1; i++) {
    matriz4D[i] = [];
    for (let j = 0; j < dimension2; j++) {
        matriz4D[i][j] = [];
        for (let k = 0; k < dimension3; k++) {
            matriz4D[i][j][k] = [];
            for (let l = 0; l < dimension4; l++) {
                matriz4D[i][j][k][l] = Math.floor(Math.random() * 100); // Valor aleatorio entre 0 y 99
            }
        }
    }
}

// Lectura de un elemento de la matriz
console.log(matriz4D[1][2][0][3]); // Muestra el valor en la posición [1][2][0][3]

// Modificación de un elemento de la matriz
matriz4D[1][2][0][3] = 99; // Asigna el valor 99 a la posición [1][2][0][3]

// Lectura del elemento modificado
console.log(matriz4D[1][2][0][3]); // Debería mostrar 99

console.log(matriz4D);
