# Operadores de JavaScript.

## Operadores Aritméticos:

Los operadores aritméticos realizan operaciones matemáticas en valores numéricos y devuelven un resultado.

- **Suma (+):** Suma dos valores.
    - Ejemplo:
      ```javascript
      let resultado = 5 + 3; // resultado es 8
      ```

- **Resta (-):** Resta el segundo valor del primero.
    - Ejemplo:
      ```javascript
      let resultado = 5 - 3; // resultado es 2
      ```

- **Multiplicación (*):** Multiplica dos valores.
    - Ejemplo:
      ```javascript
      let resultado = 5 * 3; // resultado es 15
      ```

- **División (/):** Divide el primer valor por el segundo.
    - Ejemplo:
      ```javascript
      let resultado = 15 / 3; // resultado es 5
      ```

- **Módulo (%):** Devuelve el resto o residuo de la división entera.
    - Ejemplo:
      ```javascript
      let resultado = 15 % 4; // resultado es 3
      ```
      
- **Potencia ( * * ):** Eleva el primer valor a la potencia del segundo valor.
    - Ejemplo:
      ```javascript
      let resultado = 2 ** 3; // resultado es 8 (2 elevado a la potencia de 3)
      ```

### Operadores Aritméticos, Incremento y Decremento

Los operadores de incremento o decremento se pueden ejecutar antes o después de una variable, lo que va a cambiar en muchos casos el resultado de la operación.

- **Incremento (++):** Aumenta en 1 el valor de la variable.
    - Ejemplo:
      ```javascript
      let contador = 5;
      contador++; // ahora contador es 6
      ```

- **Decremento (--):** Disminuye en 1 el valor de la variable.
    - Ejemplo:
      ```javascript
      let contador = 5;
      contador--; // ahora contador es 4
      ```

## Operadores de Asignación:

Los operadores de asignación asignan un valor a una variable.

- **Asignación (=):** Asigna un valor a una variable.
    - Ejemplo:
      ```javascript
      let x = 5;
      ```
### Operadores de Asignación compuestos:

- **Asignación con Suma (+=):** Añade el valor de la derecha al valor de la izquierda y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 5;
      x += 3; // ahora x es 8
      ```

- **Asignación con Resta (-=):** Resta el valor de la derecha al valor de la izquierda y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 10;
      x -= 4; // ahora x es 6
      ```

- **Asignación con Multiplicación (*=):** Multiplica el valor de la derecha por el valor de la izquierda y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 5;
      x *= 2; // ahora x es 10
      ```

- **Asignación con División (/=):** Divide el valor de la izquierda por el valor de la derecha y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 10;
      x /= 2; // ahora x es 5
      ```

- **Asignación con Modulo (%=):** Obtiene el resto del valor de la izquierda por el valor de la derecha y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 11;
      x %= 2; // ahora x es 1
      ```

- **Asignación con Potencia** (**=): Obtiene la potencia del valor de la izquierda por el valor de la derecha y asigna el resultado a la variable izquierda.
    - Ejemplo:
      ```javascript
      let x = 8;
      x **= 2; // ahora x es 64
      ```
      
## Operadores de Comparación:

Los operadores de comparación comparan dos valores y devuelven un valor booleano que indica si la comparación es verdadera o falsa.

- **Igualdad (==):** Compara si dos valores son iguales.
    - Ejemplo:
      ```javascript
      let x = 5;
      let y = 5;
      console.log(x == y); // true
      ```

- **Estrictamente Igual (===):** Compara si dos valores son iguales en valor y tipo.
    - Ejemplo:
      ```javascript
      let x = 5;
      let y = '5';
      console.log(x === y); // false
      ```

- **Desigualdad (!=):** Compara si dos valores son diferentes.
    - Ejemplo:
      ```javascript
      let x = 5;
      let y = 6;
      console.log(x != y); // true
      ```

- **Estrictamente Desigual (!==):** Compara si dos valores son diferentes en valor o tipo.
    - Ejemplo:
      ```javascript
      let x = 5;
      let y = '5';
      console.log(x !== y); // true
      ```

- **Mayor que (>):** Compara si el primer valor es mayor que el segundo.
    - Ejemplo:
      ```javascript
      let x = 6;
      let y = 5;
      console.log(x > y); // true
      ```

- **Mayor o igual que (>=):** Compara si el primer valor es mayor o igual que el segundo.
    - Ejemplo:
      ```javascript
      let x = 6;
      let y = 5;
      console.log(x >= y); // true
      ```
      
- **Menor que (<):** Compara si el primer valor es menor que el segundo.
    - Ejemplo:
      ```javascript
      let x = 4;
      let y = 5;
      console.log(x < y); //true
      ```
- **Menor o igual que (<=):** Compara si el primer valor es menor o igual que el segundo.
    - Ejemplo:
      ```javascript
      let x = 4;
      let y = 5;
      console.log(x <= y); //true
      ```
      

