# Tipos de Datos en JavaScript

JavaScript es un lenguaje de programación dinámico que admite varios tipos de datos para representar y manipular información. Estos tipos de datos pueden clasificarse en dos categorías principales: primitivos y no primitivos (también conocidos como objetos).

## Tipos de Datos Primitivos

Los tipos de datos primitivos son aquellos que representan valores individuales y no tienen métodos o propiedades.

### 1. Number

El tipo de dato `Number` representa valores numéricos en JavaScript. Puede representar tanto números enteros como de punto flotante. Los números en JavaScript siguen el estándar de punto flotante de doble precisión de IEEE 754.

#### Ejemplos:
- `10`: Entero positivo.
- `-40`: Entero negativo.
- `3.9`: Número de punto flotante.
- `-15.66`: Número de punto flotante negativo.

### 2. String

El tipo de dato `String` representa secuencias de caracteres. Las cadenas pueden contener letras, números, símbolos y espacios. Se pueden definir utilizando comillas simples (`'`), comillas dobles (`"`), o comillas invertidas (`` ` ``).

#### Ejemplos:
- `"Hola"`: Cadena que representa saludo.
- `'Adiós'`: Cadena que indica despedida.
- \`Saludos\`: Cadena de caracteres entre comillas invertidas.

### 3. Boolean

El tipo de dato `Boolean` representa valores lógicos, es decir, puede ser `true` (verdadero) o `false` (falso). Este tipo de dato es fundamental para la lógica de control de flujo y las evaluaciones condicionales en JavaScript.

#### Ejemplos:
- `true`: Valor verdadero.
- `false`: Valor falso.

### 4. Null

El tipo de dato `Null` representa la ausencia intencional de cualquier valor o referencia a un objeto. Es un valor especial que indica la ausencia de cualquier valor.

#### Ejemplo:
- `null`: Indica la ausencia intencional de valor.

### 5. Undefined

El tipo de dato `Undefined` representa valores que no han sido asignados o definidos. Cuando una variable se declara pero no se le asigna ningún valor, su valor por defecto es `undefined`.

#### Ejemplo:
- `undefined`: Indica que una variable no ha sido inicializada o definida.

Es fundamental comprender la diferencia entre `null` y `undefined`. `Null` se utiliza para representar la ausencia intencional de valor, mientras que `undefined` se utiliza para representar valores no asignados o no definidos.

## Tipos de Datos No Primitivos (Objetos)

Además de los tipos de datos primitivos, JavaScript también admite tipos de datos no primitivos, que son objetos.

### 1. Object

El tipo de dato `Object` es un contenedor para datos más complejos. Los objetos en JavaScript son colecciones de pares clave-valor y se utilizan para representar estructuras de datos más complejas.

### 2. Array

El tipo de dato `Array` se utiliza para almacenar una secuencia ordenada de elementos. Los elementos de un array pueden ser de cualquier tipo de dato, incluidos otros arrays y objetos.

### 3. Function

El tipo de dato `Function` se utiliza para definir funciones en JavaScript. Las funciones son bloques de código reutilizables que realizan una tarea específica. En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden asignarse a variables, pasarse como argumentos y devolverse como valores de otras funciones.

### 4. Date

El tipo de dato `Date` se utiliza para trabajar con fechas y horas en JavaScript. Permite crear objetos que representan fechas y horas específicas, así como realizar operaciones relacionadas con el tiempo.

### 5. RegExp

El tipo de dato `RegExp`, abreviatura de expresiones regulares, se utiliza para buscar y manipular texto basado en patrones. Las expresiones regulares son herramientas poderosas que permiten realizar búsquedas, coincidencias y manipulaciones de cadenas de manera flexible y eficiente.

Estos son algunos de los tipos de datos más comunes en JavaScript. Comprender estos tipos de datos es esencial para escribir código JavaScript efectivo y comprensible. Cada tipo de dato tiene sus propias características y comportamientos distintivos, y entenderlos adecuadamente facilitará el desarrollo de aplicaciones robustas y mantenibles en JavaScript.

## El operador typeof

El operador `typeof` en JavaScript es un operador unario que se utiliza para obtener el tipo de datos de una expresión o variable. Proporciona una manera de verificar dinámicamente el tipo de datos de un valor en tiempo de ejecución. Aquí hay un resumen técnico y detallado del operador `typeof`:

### Funcionamiento del Operador `typeof`:

1. **Sintaxis**:
   ```javascript
   typeof operand
   ```
   Donde `operand` es la expresión o variable cuyo tipo de datos se desea conocer.

2. **Retorno**:
    - El operador `typeof` devuelve una cadena de caracteres que representa el tipo de datos de la expresión o variable.
    - La cadena devuelta puede ser una de las siguientes:
        - `"undefined"`: Indica que el valor es `undefined`.
        - `"boolean"`: Indica que el valor es un booleano.
        - `"number"`: Indica que el valor es un número.
        - `"string"`: Indica que el valor es una cadena de caracteres.
        - `"object"`: Indica que el valor es un objeto (excepto si es `null`).
        - `"function"`: Indica que el valor es una función.
        - `"symbol"`: Indica que el valor es un símbolo (introducido en ECMAScript 6).

3. **Uso**:
    - El operador `typeof` es especialmente útil cuando se trabaja con valores dinámicos cuyos tipos no se conocen de antemano.
    - Se puede usar en estructuras condicionales para realizar acciones específicas dependiendo del tipo de datos de una variable.
    - Puede ayudar en la depuración y la validación de datos en tiempo de ejecución.

4. **Consideraciones**:
    - `typeof null` devuelve `"object"`, lo cual es técnicamente incorrecto. Esto es una reliquia de implementaciones anteriores y se considera un error en el diseño de JavaScript, pero se mantiene por razones de compatibilidad.
    - `typeof` no distingue entre distintos tipos de objetos, por lo que todos los objetos (incluidos arrays y funciones) devuelven `"object"`.
    - No puede distinguir entre diferentes tipos de objetos (por ejemplo, un array de una función) sin realizar comprobaciones adicionales.

### Ejemplos de Uso:

```javascript
typeof 42; // "number"
typeof "Hola"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (error en el diseño de JavaScript)
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"
typeof Symbol(); // "symbol" (ECMAScript 6)
```

### Resumen:

El operador `typeof` en JavaScript es una herramienta útil para determinar dinámicamente el tipo de datos de una expresión o variable en tiempo de ejecución. Proporciona una forma rápida y sencilla de realizar comprobaciones de tipo y tomar decisiones basadas en el tipo de datos de una variable. Sin embargo, tiene limitaciones, como el hecho de que no puede distinguir entre diferentes tipos de objetos y el peculiar resultado de `"object"` para `null`. Es importante comprender estas limitaciones al utilizar el operador `typeof` en el desarrollo de aplicaciones JavaScript.

