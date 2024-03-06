// Operadores Aritméticos
let a, b, c, d, e, f;

//SUMA
a = 3 + 4;
console.log(a);

//Resta
b = 6 - 2;
console.log(b);

//multiplicación
c = a * 2;
console.log(c);

//Divición
d = b / 2.5;
console.log(d);
//preguntamos el tipo de dato y vemos que es number, ya que en javascript no se diferencia entre float o integer.
console.log(typeof d);

//Modulo. (Resto de la división)
f = 9 % 2;
console.log(f);

//Potencia. Desde (ECMAScript 2016). Es equivalente a Math.pow
e = 2 ** 3;
console.log(e); // 2 x 2 x 2 = 8

e = Math.pow(2,3);
console.log(e);

//Pre-incremento. Aumenta el valor de la variable antes de usarla.
a = 0
++a;
console.log(a);

//Post-incremento. La variable aumenta su valor, luego de ser usada.
console.log(a++) // La variable sigue siendo 1, en el console Log, imprime ese valor.
console.log(a); // Sin embargo ahora el valor que se muestra es el de 2, por que anteriormente se hizo un post incremento.

//pre-decremento.
console.log(--a) //el valor decrementa en 1,y luego imprime el valor en en consola, mostrando el 1 en este caso.

//post-decremento.
console.log(a--); //el valor se ejecuta, y muestra aún 1, pero luego se decrementa.
console.log(a); // aca el valor ya se ejecuta con el decremento y muestra 0.

//Ejemplo.
a = 5;
b = 2;
c = ++a * b--;
console.log(c); // = 12
console.log(a); // = 6
console.log(b); // = 1
/*
* El valor que imprime el console.log es 12, por que la operacion se realiza de izquierda a derecha, por lo tanto
* se suma o incrementa 1 a la variable 'a', el cual queda en su valor 6, luego se multiplica por la variable 'b' que
* su valor sigue siendo 2, y luego se decrementa y este pasa a ser uno.
* */

