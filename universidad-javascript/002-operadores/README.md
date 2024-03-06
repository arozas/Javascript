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

## Operadores Lógicos:

Los operadores lógicos realizan operaciones lógicas en valores booleanos y devuelven un resultado booleano, `true` o `false`.

### Operador AND ( && ).
- **AND (&&):** Devuelve true si ambos operandos son true. La evalución la hace de forma secuencial, de izquierda a derecha, por eso también se lo conoce como operador de corto circuito, por que en el caso que el primero operando sea falso no evalua el proximo.


  Ejemplo:
   ```javascript
   console.log(true && true); // true
   console.log(true && false); // false
   console.log(false && true); // false
   ```
#### Tabla de verdad del operador AND - Y ( && ).

| Operando1 | Operando2 | Resultado |
|-----------|-----------|-----------|
| true      | true      | true      |
| true      | false     | false     |
| false     | true      | false     |
| false     | false     | false     |

### Operador OR - O ( || ).
- **OR (||):** Devuelve true si al menos uno de los operandos es true.

   Ejemplo:
   ```javascript
   console.log(true || false); // true
   console.log(false || false); // false
   ```
#### Tabla de verdad del operador OR ( || ).

| Operando1 | Operando2 | Resultado |
|-----------|-----------|-----------|
| true      | true      | true      |
| true      | false     | true      |
| false     | true      | true      |
| false     | false     | false     |

### Operador NOT - NO ( ! )
- **NOT (!):** Es un operador unario, devuelve true si el operando es false y viceversa.

  Ejemplo:
   ```javascript
   console.log(!true); // false
   console.log(!false); // true
   ```

### Tabla de verdad del operador NOT ( ! ).

| Operando | Resultado |
|----------|-----------|
| true     | false     |
| false    | true      |

Estos son los operadores fundamentales en JavaScript que te permiten realizar operaciones aritméticas, asignaciones, comparaciones y lógicas de manera efectiva en tus programas.

## Precedencia de los operadores en JavaScript.

La precedencia de operadores en JavaScript es un concepto fundamental que determina el orden en el que se evalúan las expresiones dentro de una declaración o una sentencia. Esta precedencia es crucial para entender cómo se interpretan y ejecutan las expresiones en JavaScript.

1. **Parentesis y Corchetes:**
    - Los paréntesis () y corchetes [] tienen la mayor precedencia en JavaScript.
    - Se utilizan para agrupar partes de una expresión y para definir el orden de evaluación.
    - Las expresiones dentro de paréntesis se evalúan primero, seguidas de las expresiones dentro de corchetes.

Ejemplo:
   ```javascript
    // 1. Parentesis y Corchetes
    let resultado1 = (5 + 3) * 2; // resultado1 es 16
   ```

2. **Operadores Unarios:**
    - Los operadores unarios, como ++, -- y !, tienen la segunda mayor precedencia.
    - Los operadores de incremento (++), decremento (--), y el operador de negación lógica (!) se aplican directamente a un solo operando.
    - La evaluación de estos operadores ocurre de derecha a izquierda.

Ejemplo:
   ```javascript
    // 2. Operadores Unarios
    let a = 5;
    let resultado2 = ++a * 2; // resultado2 es 12
   ```

3. **Operadores Aritméticos Multiplicación, División y Módulo:**
    - Los operadores *, / y % tienen la tercera mayor precedencia.
    - Se utilizan para realizar operaciones aritméticas de multiplicación, división y módulo, respectivamente.
    - La evaluación de estos operadores ocurre de izquierda a derecha.

Ejemplo:
   ```javascript
    // 3. Aritméticos *, / y %
    let resultado3 = 10 / 2 * 3; // resultado3 es 15
   ```

4. **Operadores Aritméticos Suma y Resta:**
    - Los operadores + y - tienen la cuarta mayor precedencia.
    - Se utilizan para realizar operaciones aritméticas de suma y resta.
    - La evaluación de estos operadores también ocurre de izquierda a derecha.

Ejemplo:
   ```javascript
    // 4. Aritméticos + y -
    let resultado4 = 10 - 3 + 2; // resultado4 es 9
   ```

5. **Operadores Relacionales:**
    - Los operadores relacionales <, <=, > y >= tienen la quinta mayor precedencia.
    - Se utilizan para comparar dos valores y devolver un valor booleano que indica si la relación es verdadera o falsa.
    - La evaluación de los operadores relacionales sigue la misma dirección que los operadores aritméticos.

Ejemplo:
   ```javascript
    // 5. Relacionales <, <=, > y >=
    let resultado5 = 10 > 5 && 5 <= 3; // resultado5 es false
   ```

6. **Operadores de Igualdad:**
    - Los operadores de igualdad == y != tienen la sexta mayor precedencia.
    - Se utilizan para comparar si dos valores son iguales o diferentes, respectivamente.
    - La evaluación de los operadores de igualdad sigue la misma dirección que los operadores relacionales.

Ejemplo:
   ```javascript
    // 6. Igualdad == y !=
    let resultado6 = 10 == '10'; // resultado6 es true
   ```

7. **Operadores Lógicos AND y OR:**
    - Los operadores lógicos && y || tienen la séptima mayor precedencia.
    - Se utilizan para combinar expresiones lógicas y devolver un valor booleano.
    - La evaluación de los operadores lógicos sigue la misma dirección que los operadores de igualdad.

Ejemplo:
   ```javascript
    // 7. Lógicos && y ||
    let resultado7 = (5 > 3 || 2 < 1) && !(3 == 3); // resultado7 es false
   ```

8. **Operadores de Asignación:**
    - Los operadores de asignación, como =, +=, -=, *=, etc., tienen la menor precedencia.
    - Se utilizan para asignar valores a variables y modificar el valor de una variable existente.

Ejemplo:
   ```javascript
    // 8. Asignación =, +=, -=, *=, etc.
    let x = 5;
    x += 3; // ahora x es 8
   ```

Entender la precedencia de operadores en JavaScript es esencial para escribir código claro y evitar errores de evaluación. Al conocer el orden en el que se evalúan las expresiones, los programadores pueden controlar el flujo de ejecución y obtener resultados esperados en sus programas.
