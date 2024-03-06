//Operadores relacionales o de comparciones.
let a, b;

a = 5;
b = '5';

console.log(a);
console.log(b);

//Operadores de igualdad ==
//(solo compara valores y hace una conversión si es necesario)
console.log("a == b ->", a == b );
console.log(` ${a} == ${b} -> ${ a == b } `);
// El resultado es true, por que aunque sea datos distintos, numeric y string, convierte el string a numeric y el valor es true.

//Operador de igualdad estricta o igualdad exacto.
console.log("a === b ->", a === b );
// El resultado es false, por que aunque el valor sea el mismo, los datos son distintos, numeric y string.
// String interpolation, con bactick podemos interpolar el algoritmo dentro de una cadena.
console.log(` ${a} === ${b} -> ${ a === b } `);

//Operador distinto !=
//Compara y convierte el tipo de dato is es necesario.
console.log(` ${a} != ${b} -> ${ a != b } `);

//Operador distinto exacto !=
//Compara el valor y el tipo de dato.
console.log(` ${a} !== ${b} -> ${ a !== b } `);

//Operador menor que.
console.log(` ${a} < ${b} -> ${ a < b } `);

//Operador menor o igual que.
console.log(` ${a} <= ${b} -> ${ a <= b } `);

//Operador mayor que.
console.log(` ${a} > ${b} -> ${ a > b } `);

//Operador mayor o igual que.
console.log(` ${a} >= ${b} -> ${ a >= b } `);
