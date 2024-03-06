// Operadores Lógicos.
let a, b;

a = true;
b = false;

console.log(a);
console.log(b);

// Operador Lógico && (AND - y)
// Regresa verdadero solo si ambos operandos son verdaderos.

console.log(`${a} && ${b} -> ${a && b}`);
console.log(`${a} && ${a} -> ${a && a}`);
console.log(`${b} && ${a} -> ${b && a}`);

// Operador Lógico || (OR - o)
// Regresa verdadero si cualquiera de las operandos es verdadero.

console.log(`${a} && ${b} -> ${a || b}`);
console.log(`${b} && ${a} -> ${b || a}`);
console.log(`${b} && ${b} -> ${b || b}`);

// Operador Lógico ! (NOT - no)
// Invierte el valor original del operando, true -> false -> true
console.log(`${a} --> ${!a}`);
console.log(`${b} --> ${!b}`);

//Ejercicio Valor dentro de rango.
//(Se puede definir ambas variables en la misma linea en JS solo con separar con comas)
let minimo = 0, maximo = 5;

// Valor para saber si esta dentro de rango.
let dato = 5;

// Revisamos si esta dentro de rango.
let dentroRango = dato >= minimo && dato <=maximo;

console.log('Valor dentro de rango: ',dentroRango);

/* Precedencia de Operadores en JS.
*
* Orden de precedencia en una expresión algoritmica:
*
* 1. Parentesis y Corchetes.
* 2. Operadores unarios, como ++, --, !.
* 3. Aritméticos *, / y %.
* 4. Aritméticos + y -.
* 5. Relacionales <, <=, > y >=.
* 6. Igualdad == y !=
* 7. Lógicos && y ||.
* 8. Asignación =, +=, -=, *=, etc.
*
* */

// Ejemplo: Se revisa de izq a derecha.
let a = 12 / 3 + 2 * 3 - 1;
// Paso 1. División 12/3 = 4
// Paso 2. Multiplicación 2 x 3 = 6
// Paso 3. Suma 4 + 6 = 10
// Paso 4. Resta 10 - 1 = 9

console.log(a); //Resultado = 9.

// Si agregamos un parentesis vemos que cambia la precedencia.
let b = 12 / (3 + 2) * 3 - 1;
// Paso 1. Suma 5
// Paso 2. División 12/5 = 2.4
// Paso 3. Multiplicación 2.4 x 3 = 7.199999
// Paso 4. Resta 7.2 - 1 = 6.199999

console.log(b); //Resultado = 9.
