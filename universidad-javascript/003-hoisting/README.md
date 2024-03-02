# Hoisting

El hoisting en JavaScript es un comportamiento en el cual las declaraciones de variables y funciones son movidas al comienzo de su ámbito de ejecución durante la fase de compilación del código.

### Funcionamiento del Hoisting:

1. **Variables**:
    - Las declaraciones de variables (`var`) son elevadas (hoisted) al principio de su ámbito de función o global, pero su asignación de valor permanece en su lugar.
    - Esto significa que JavaScript "levanta" las declaraciones de variables al inicio del contexto de ejecución, pero los valores no se asignan hasta que se llega a la línea de código donde se hace la asignación.

2. **Funciones**:
    - Las declaraciones de funciones (function declarations) también son elevadas al inicio de su ámbito.
    - Esto significa que puedes llamar a una función antes de que haya sido declarada en el código, y JavaScript la encontrará y ejecutará correctamente.

3. **Variables sin Inicializar**:
    - Si una variable se declara pero no se inicializa, su valor será `undefined` hasta que se le asigne un valor.

4. **Variables `let` y `const`**:
    - Las variables declaradas con `let` y `const` también son hoisted, pero no son inicializadas hasta que se alcanza la línea de código donde se declara.
    - Esto significa que no puedes acceder a las variables `let` y `const` antes de su declaración en el código.

### Ejemplo de Hoisting:

```javascript
console.log(x); // undefined
var x = 10;

foo(); // "Hola desde foo!"
function foo() {
  console.log("Hola desde foo!");
}
```

En este ejemplo:
- La variable `x` se declara con `var` y se inicializa como `undefined` debido al hoisting. Su asignación (`x = 10`) permanece en su lugar.
- La función `foo()` se puede llamar antes de su declaración en el código debido al hoisting de las funciones. Esto permite que la función `foo()` sea ejecutada correctamente.

### Variables `let` y `const`:

1. **`let`**:
    - Las variables declaradas con `let` también son hoisted, pero a diferencia de las variables `var`, no son inicializadas.
    - Esto significa que, a diferencia de `var`, no puedes acceder a una variable `let` antes de su declaración en el código. Este comportamiento se conoce como "temporal dead zone" (zona muerta temporal).
    - Las variables `let` permanecen sin inicializar (en el estado temporal dead zone) hasta que se alcanza la línea de código donde se declaran.
    - Intentar acceder a una variable `let` antes de su declaración resultará en un ReferenceError.

2. **`const`**:
    - Las variables declaradas con `const` tienen un comportamiento similar al de `let` en términos de hoisting.
    - No puedes acceder a una variable `const` antes de su declaración en el código, y cualquier intento de hacerlo resultará en un ReferenceError.
    - A diferencia de `let`, una vez que una variable `const` se ha inicializado, su valor no puede ser reasignado. Sin embargo, el valor de un objeto `const` puede ser modificado, pero no se puede asignar una nueva referencia a la variable.

### Ejemplo de Variables `let` y `const`:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
```

En este ejemplo:
- Intentar acceder a las variables `y` y `z` antes de su declaración resulta en un ReferenceError debido a la temporal dead zone.
- Las variables `let` y `const` no pueden ser accedidas antes de su declaración en el código.


### use strict y Hoisting

El uso de "use strict" en JavaScript no deshabilita el hoisting. El hoisting es un comportamiento inherente al proceso de compilación de JavaScript y no puede ser deshabilitado por el modo estricto.

La directiva "use strict" introduce una serie de restricciones adicionales al código JavaScript para ayudar a detectar y evitar errores comunes, pero no tiene ningún impacto en el hoisting.

Incluso cuando se usa "use strict", las declaraciones de variables (ya sea con var, let o const) y las declaraciones de funciones seguirán siendo hoisted, es decir, serán elevadas al comienzo de su ámbito de ejecución durante la fase de compilación del código.

Sin embargo, el uso de "use strict" puede hacer que algunos errores sean más fáciles de detectar, ya que prohíbe ciertos comportamientos considerados propensos a errores en JavaScript, como el uso de variables no declaradas, la asignación a propiedades de sólo lectura, entre otros.

### Consideraciones Importantes:

- El hoisting puede resultar confuso si no se comprende correctamente. Puede llevar a comportamientos inesperados si no se tiene en cuenta al escribir código JavaScript.
- Es una característica inherente al proceso de compilación de JavaScript y no se puede deshabilitar.
- Para evitar confusiones, es una buena práctica declarar todas las variables y funciones al principio de su ámbito y asignarles valores más adelante en el código.
- A diferencia de las variables `var`, las variables `let` y `const` no son inicializadas automáticamente con `undefined`. Deben ser inicializadas explícitamente antes de ser utilizadas.
- El uso de `let` y `const` proporciona un mayor control sobre el ámbito y la asignación de variables en comparación con `var`.

El hoisting en JavaScript para las variables `let` y `const` es similar al de `var`, pero con algunas diferencias importantes en cuanto al acceso antes de la inicialización y la asignación de valores. Es fundamental comprender estas diferencias para escribir código JavaScript más predecible y menos propenso a errores.

En resumen, el hoisting en JavaScript es un mecanismo que eleva las declaraciones de variables y funciones al principio de su ámbito de ejecución durante la fase de compilación del código. Es importante comprender cómo funciona el hoisting para escribir código JavaScript más claro y evitar errores sutiles.
