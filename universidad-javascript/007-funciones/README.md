# Funciones en JavaScript.

Las funciones en JavaScript son elementos fundamentales que permiten la modularidad y la reutilización de código. En este apunte, exploraremos desde los conceptos básicos hasta técnicas avanzadas para trabajar con funciones en JavaScript, incluyendo una amplia variedad de ejemplos y casos de uso.

## Conceptos Básicos

### Principales caracteristicas:
- Una función es un bloque de código reutilizadle, que realiza una tarea en particular.
- Una función puede tener parámetros de entrada y también puede devolver un valor de salida.
- Tanto los valores de entrada, como los valores de salida de una función son opcionales.

### Visualización de una función.



    Valores de entrada:                                                   Valor de Salida:


    A = 3
                                                Función                             

                        ----> Entrada            A + B              -----> Salida = 5
    
    B = 3

### Necesidad de las Funciones

En cualquier programa, especialmente en aquellos con muchas líneas de código, surge la necesidad de estructurar y modularizar el código de manera efectiva. Aquí es donde entran en juego las funciones. Las funciones son bloques de código reutilizable que realizan una tarea específica cuando se invocan. Algunas de las razones por las cuales las funciones son necesarias en la programación son las siguientes:

1. **Modularidad y Reutilización de Código**: Dividir un programa extenso en funciones más pequeñas permite que el código sea más manejable y fácil de entender. Cada función se enfoca en realizar una tarea específica, lo que facilita la reutilización en diferentes partes del programa.

2. **Abstracción**: Las funciones permiten abstraer detalles complejos detrás de una interfaz simple. Esto significa que los detalles internos de cómo se realiza una tarea no necesitan ser conocidos por quienes utilicen la función. Solo necesitan conocer qué hace la función y cómo usarla.

3. **Facilidad de Mantenimiento**: Al dividir un programa en funciones más pequeñas y enfocadas, cualquier cambio o corrección que se necesite realizar se puede hacer en una función específica sin afectar otras partes del código. Esto facilita el mantenimiento y la depuración del código.

4. **Legibilidad del Código**: El uso de funciones con nombres descriptivos mejora la legibilidad del código. Al leer el código, es más fácil entender qué hace cada parte del programa si está organizado en funciones con nombres significativos.

5. **Testing y Depuración**: Las funciones pequeñas y enfocadas son más fáciles de probar y depurar. Se pueden aislar y verificar individualmente, lo que facilita la identificación y corrección de errores.

### 1. Declaración de Funciones

En JavaScript, las funciones pueden declararse de varias maneras:

```javascript
// Declaración de función con nombre, atraves de la palabra reservada function.
function nombreFuncion(parametro1, parametro2) {
    // Cuerpo de la función
    return resultado;
}

// Expresión de función anónima.
const nombreFuncion = function(parametro1, parametro2) {
    // Cuerpo de la función
    return resultado;
};

// Funciones flecha (Arrow functions) - ES6
const nombreFuncion = (parametro1, parametro2) => {
    // Cuerpo de la función
    return resultado;
};
```

#### 1.1 Llamada de Funciones
La llamada de funciones es el proceso de invocar una función para que se ejecute y realice su tarea definida. La sintaxis para llamar una función es simple: se escribe el nombre de la función seguido de paréntesis que pueden contener los argumentos necesarios para la función, si los hay. Aquí tienes más detalles sobre la llamada de funciones:

#### Sintaxis:

```javascript
nombreFuncion(argumento1, argumento2, ...);
```

Donde:
- `nombreFuncion`: Es el nombre de la función que se desea llamar.
- `argumento1, argumento2, ...`: Son los valores que se pasan como argumentos a la función (si la función los requiere).

#### Ejemplo:

```javascript
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado); // Imprime 5
```

En este ejemplo:
- La función `sumar` se llama con los argumentos `2` y `3`.
- La función devuelve la suma de estos dos números.
- El resultado de la llamada de la función se almacena en la variable `resultado`.
- Finalmente, el valor de `resultado` se imprime en la consola.

### 2. Parámetros y Argumentos

Los parámetros son variables utilizadas en la definición de la función, mientras que los argumentos son los valores reales pasados a la función cuando se llama.

```javascript
function sumar(a, b) {
    return a + b;
}

sumar(2, 3); // Retorna 5
```

#### Diferencias entre parámetros y argumentos.
Es común confundir los términos "parámetros" y "argumentos" en el contexto de las funciones en programación. Aunque a menudo se utilizan indistintamente, representan conceptos diferentes en el contexto de las funciones. Aquí están las diferencias:

##### Parámetros

Los parámetros son variables que se mencionan en la definición de la función. Son utilizados para recibir valores cuando la función es llamada. Los parámetros actúan como marcadores de posición para los valores que se pasarán a la función cuando se invoque.

##### Ejemplo:

```javascript
function sumar(a, b) {
    // 'a' y 'b' son parámetros de la función sumar
    return a + b;
}
```

En este ejemplo, `a` y `b` son parámetros de la función `sumar`. Estos son marcadores de posición que esperan ser reemplazados por valores cuando la función sea llamada.

##### Argumentos

Los argumentos son los valores reales que se pasan a una función cuando es llamada. Estos valores se asignan a los parámetros correspondientes de la función.

##### Ejemplo:

```javascript
const resultado = sumar(2, 3);
```

En este ejemplo, `2` y `3` son argumentos que se pasan a la función `sumar`. Cuando la función es llamada con estos argumentos, `a` tomará el valor `2` y `b` tomará el valor `3`.

##### Resumen:

- Los parámetros son variables declaradas en la definición de una función.
- Los argumentos son los valores reales pasados a una función cuando es llamada.
- Los parámetros actúan como marcadores de posición para los argumentos que se pasan a la función.
- Cuando se llama a una función, los argumentos se asignan a los parámetros correspondientes según su posición.

### 3. Diferencia técnica entre Procedimientos y Función.

En JavaScript, tanto las funciones como los procedimientos son bloques de código reutilizables que realizan tareas específicas. Sin embargo, hay diferencias importantes entre ambos en términos de su comportamiento y su uso. Aquí están las diferencias clave entre procedimientos y funciones en JavaScript:

#### Funciones

1. **Valor de Retorno**:
    - Las funciones devuelven un valor mediante la palabra clave `return`.
    - Pueden devolver cualquier tipo de valor, incluyendo números, cadenas, objetos, etc.

2. **Reutilización**:
    - Las funciones son ideales para reutilizar código que realiza una tarea específica y devuelve un resultado.

3. **Ejemplo**:

```javascript
function suma(a, b) {
    return a + b;
}

const resultado = suma(2, 3); // Retorna 5
```

#### Procedimientos

1. **No tienen valor de retorno**:
    - Los procedimientos no devuelven ningún valor explícito.
    - Se utilizan para realizar tareas específicas sin necesidad de devolver un resultado.

2. **Modifican el Estado**:
    - Los procedimientos pueden modificar el estado de las variables globales o de los objetos pasados como argumentos.

3. **Ejemplo**:

```javascript
function imprimirMensaje(mensaje) {
    console.log(mensaje);
}

imprimirMensaje('Hola, mundo'); // Imprime 'Hola, mundo'
```

#### Comparación

- **Funciones**:
    - Devuelven un valor utilizando `return`.
    - Son útiles cuando necesitas un resultado.
    - Favorecen la modularidad y la reutilización del código.

- **Procedimientos**:
    - No devuelven ningún valor.
    - Se utilizan para realizar tareas específicas sin necesidad de devolver un resultado.
    - Pueden modificar el estado de las variables globales o de los objetos.

### 4. Tipos de Funciones.

                ------> Funciones definidas por el usuario.
    Funciones  |         
                ------> Funciones Incorporadas (Built-in)

- Funciones definidas por el usuario:
  1. Funciones.
  2. Procedimientos.
  3. Métodos de objetos.
  

- Funciones Incorporadas o Built-in.
  1. Funciones incorporadas.
  2. Funciones para el manejo de cadenas.
  3. Funciones Matemáticas.


### X. Alcance de Variables (Scope)

JavaScript tiene alcance léxico, lo que significa que las variables dentro de una función solo están disponibles dentro de esa función, a menos que sean variables globales.

```javascript
function miFuncion() {
    let variableLocal = 'Hola';
    console.log(variableLocal); // Imprime 'Hola'
}

console.log(variableLocal); // Error: variableLocal no está definida
```

### 5. Funciones Anónimas

Las funciones anónimas son aquellas que no tienen un nombre específico y pueden asignarse a variables o pasarse como argumentos a otras funciones.

```javascript
const funcionAnonima = function() {
    console.log('Soy una función anónima');
};

funcionAnonima();
```

## First-Class Citizens

En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden tratarse como cualquier otra variable. Pueden ser pasadas como argumentos a otras funciones, devueltas por otras funciones y asignadas a variables.

```javascript
function operacion(num1, num2, funcion) {
    return funcion(num1, num2);
}

function suma(a, b) {
    return a + b;
}

operacion(2, 3, suma); // Retorna 5
```

### Ejemplo: Función como Callback

```javascript
function imprimirResultado(resultado) {
    console.log('El resultado es: ' + resultado);
}

function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

sumar(3, 4, imprimirResultado); // Imprime 'El resultado es: 7'
```

## Closures

Los closures son funciones que tienen acceso al ámbito (scope) en el que fueron creadas, incluso después de que ese ámbito haya sido cerrado.

```javascript
function creaSumador(x) {
    return function(y) {
        return x + y;
    };
}

const suma5 = creaSumador(5);
suma5(2); // Retorna 7
```

### Ejemplo: Contador con Closure

```javascript
function contador() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const incrementar = contador();
console.log(incrementar()); // Imprime 1
console.log(incrementar()); // Imprime 2
```

## Funciones Recursivas

Las funciones recursivas son aquellas que se llaman a sí mismas. Es importante tener un caso base para evitar bucles infinitos.

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5); // Retorna 120
```

### Ejemplo: Fibonacci Recursivo

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Imprime 8
```

## Funciones de Orden Superior (Higher-Order Functions)

Las funciones de orden superior son aquellas que aceptan otras funciones como argumentos o devuelven funciones.

```javascript
function operacionBinaria(funcion, a, b) {
    return funcion(a, b);
}

function suma(a, b) {
    return a + b;
}

operacionBinaria(suma, 2, 3); // Retorna 5
```

### Ejemplo: Función de Orden Superior

```javascript
function operacion(a, b, operador) {
    return operador(a, b);
}

const multiplicar = function(a, b) {
    return a * b;
};

operacion(5, 3, multiplicar); // Retorna 15
```

## Buenas Prácticas

### 1. Nombres Descriptivos

Utiliza nombres descriptivos para tus funciones que indiquen claramente su propósito y lo que hacen.

### 2. Evita Efectos Secundarios

Intenta que tus funciones no tengan efectos secundarios, es decir, que solo realicen la tarea para la que fueron diseñadas sin modificar variables externas.

### 3. Mantén las Funciones Cortas

Las funciones deben ser concisas y hacer una sola cosa. Divídelas en funciones más pequeñas si realizan múltiples tareas.

### 4. Comentarios y Documentación

Documenta tus funciones utilizando comentarios claros que expliquen su propósito, los parámetros que reciben y los valores que devuelven.

### 5. Utiliza Funciones Flecha (Arrow Functions) con Moderación

Si bien las funciones flecha son útiles y concisas, a veces pueden hacer el código menos legible, especialmente para funciones más largas o complejas.

### Ejemplo: Uso de Función Flecha

```javascript
const cuadrado = x => x * x;
console.log(cuadrado(5)); // Imprime 25
```

## Funciones como Objeto

En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden tener propiedades y métodos como cualquier otro objeto.

```javascript
function greet() {
    console.log('¡Hola!');
}

greet.language = 'español';

console.log(greet.language); // Imprime 'español
```

### Ejemplo: Método en una Función

```javascript
function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.saludar = function() {
    console.log('¡Hola, soy ' + this.nombre + '!');
};

const persona1 = new Persona('Juan');
persona1.saludar(); // Imprime '¡Hola, soy Juan!'
```

## Métodos de Función

Las funciones también pueden ser métodos de objetos. En este caso, `this` se refiere al objeto que llama al método.

```javascript
const objeto = {
    nombre: 'Juan',
    saludar: function() {
        console.log('Hola, soy ' + this.nombre);
    }
};

objeto.saludar(); // Imprime 'Hola, soy Juan'
```

### Ejemplo: Método en un Objeto

```javascript
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    acelerar: function() {
        console.log('Acelerando el ' + this.marca + ' ' + this.modelo);
    }
};

coche.acelerar(); // Imprime 'Acelerando el Toyota Corolla'
```

## El Objeto `arguments`

Todas las funciones en JavaScript tienen una variable `arguments`, que es un objeto similar a un array que contiene los argumentos pasados a la función.

```javascript
function ejemplo() {
    console.log(arguments);
}

ejemplo(1, 2, 3); // Imprime { '0': 1, '1': 2, '2': 3 }
```

### Ejemplo: Suma de Todos los Argumentos

```javascript
function sumaTodos() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sumaTodos(1, 2, 3, 4, 5)); // Retorna 15
```

## Funciones Generadoras (Generator Functions)

Las funciones generadoras son una característica introducida en ES6 que permiten pausar y reanudar la ejecución de una función.

```javascript
function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen = contador();
console.log(gen.next().value); // Imprime 0
console.log(gen.next().value); // Imprime 1
```

### Ejemplo: Generador Fibonacci

```javascript
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const genFibonacci = fibonacci();
console.log(genFibonacci.next().value); // Imprime 0
console.log(genFibonacci.next().value); // Imprime 1
console.log(genFibonacci.next().value); // Imprime 1
console.log(genFibonacci.next().value); // Imprime 2
```

## Funciones Asíncronas (Async Functions)

Las funciones asíncronas, introducidas en ES2017, permiten escribir código asíncrono de manera más clara utilizando la palabra clave `async` y `await`.

```javascript
async function obtenerDatos() {
    const datos = await fetchData();
    return datos;
}
```

### Ejemplo: Función Asíncrona

```javascript
async function cargarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

cargarUsuarios().then(usuarios => {
    console.log('Usuarios cargados:', usuarios);
});
```

## Scope de Bloque (Block Scope)

A partir de ES6, JavaScript introdujo él `let` y `const`, que tienen alcance de bloque en lugar de alcance de función como `var`.

```javascript
function ejemplo() {
    if (true) {
        let mensaje = 'Hola';
    }
    console.log(mensaje); // Error: mensaje no está definido
}
```

### Ejemplo: Scope de Bloque con `let`

```javascript
function ejemplo() {
    let mensaje = 'Hola';
    if (true) {
        let mensaje = 'Adiós';
        console.log(mensaje); // Imprime 'Adiós'
    }
    console.log(mensaje); // Imprime 'Hola'
}

ejemplo();
```

## Hoisting

Las declaraciones de funciones y variables `var` son "levantadas" al principio del contexto de ejecución, lo que significa que pueden ser utilizadas antes de ser declaradas.

```javascript
console.log(multiplicar(2, 3)); // Retorna 6

function multiplicar(a, b) {
    return a * b;
}
```

### Ejemplo: Hoisting con `var`

```javascript
console.log(mensaje); // Imprime 'undefined'
var mensaje = 'Hola';
```

## Decoradores de Funciones (Function Decorators)

Los decoradores son funciones que se utilizan para modificar o extender el comportamiento de otras funciones.

```javascript
function decorador(funcion) {
    return function() {
        console.log('Antes de llamar a la función');
        const resultado = funcion.apply(this, arguments);
        console.log('Después de llamar a la función');
        return resultado;
    };
}

function miFuncion() {
    console.log('¡Hola!');
}

const funcionDecorada = decorador(miFuncion);
funcionDecorada();
```

### Ejemplo: Decorador para Medir Tiempo de Ejecución

```javascript
function medirTiempoEjecucion(funcion) {
    return function() {
        console.time('Tiempo de ejecución');
        const resultado = funcion.apply(this, arguments);
        console.timeEnd('Tiempo de ejecución');
        return resultado;
    };
}

function suma(a, b) {
    return a + b;
}

const sumaDecorada = medirTiempoEjecucion(suma);
console.log(sumaDecorada(2, 3)); // Imprime el resultado y el tiempo de ejecución
```
