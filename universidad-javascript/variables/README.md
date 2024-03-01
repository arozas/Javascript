# ¿Qué es una variable?

Una variable es un contenedor que se utiliza para almacenar valores que pueden cambiar durante la ejecución de un programa. 

Una variable en programación se compone de los siguientes elementos:

1. **Nombre:** Es el identificador único que se le asigna a la variable y se utiliza para hacer referencia a ella en el código.

2. **Valor almacenado (tipo de dato):** Es el dato que la variable contiene en un momento dado. Puede ser un número, una cadena de texto, un booleano, un array, un objeto, una función u otro tipo de dato válido en el lenguaje de programación utilizado.

3. **Dirección de memoria:** Es la ubicación física en la memoria del sistema donde se almacena el valor de la variable. En algunos lenguajes de programación, especialmente los de bajo nivel, los programadores pueden interactuar directamente con direcciones de memoria, pero en lenguajes de alto nivel como JavaScript, el manejo de la memoria es abstracto y gestionado por el entorno de ejecución del lenguaje. Por lo tanto, los programadores generalmente no necesitan preocuparse por la dirección de memoria de las variables.

## Variables en JavaScript.


En el contexto de JavaScript, una variable se declara utilizando la palabra clave `var`, `let`, o `const`, seguida de un nombre que identifica a la variable.

- **`var`**: Anteriormente era la forma principal de declarar variables en JavaScript, pero con la introducción de `let` y `const` en ECMAScript 6, su uso ha disminuido. Las variables declaradas con `var` tienen un alcance de función o global, lo que significa que pueden ser accedidas desde cualquier parte de la función o el script.

- **`let`**: Introducido en ECMAScript 6, `let` permite la declaración de variables con un alcance de bloque. Esto significa que las variables declaradas con `let` solo están disponibles dentro del bloque donde fueron declaradas.

- **`const`**: También introducido en ECMAScript 6, `const` se utiliza para declarar variables cuyo valor no cambiará durante la ejecución del programa. Una vez que se asigna un valor a una variable constante, no se puede reasignar. Las variables `const` también tienen un alcance de bloque.

Por ejemplo, en JavaScript, puedes declarar una variable llamada `edad` y asignarle un valor numérico de la siguiente manera:

```javascript
let edad = 30;
```

Posteriormente, puedes cambiar el valor de esta variable simplemente asignándole un nuevo valor:

```javascript
edad = 35;
```
Las variables en JavaScript pueden contener valores de diferentes tipos, como números, cadenas de texto, booleanos, arrays, objetos, funciones, etc. La flexibilidad en el manejo de variables es una de las características clave de JavaScript y es fundamental para la programación en este lenguaje.


### Declarar e inicializar variables en JavaScript.

En JavaScript, hay varias formas de declarar e inicializar variables. Las formas comunes son utilizando las palabras clave `var`, `let`, y `const`. 

Algunos ejemplos de cada una:

1. **Declarar e inicializar una variable con `var`:**

```javascript
var nombre = "Juan";
var edad = 30;
```

2. **Declarar e inicializar una variable con `let`:**

```javascript
let nombre = "María";
let edad = 25;
```

3. **Declarar e inicializar una variable con `const`:**

```javascript
const pi = 3.14159;
const URL = "https://www.ejemplo.com";
```

La diferencia principal entre `var`, `let`, y `const` radica en su alcance y mutabilidad:

- `var`: Tiene un alcance de función o global, y puede ser redeclarada y reasignada.
- `let`: Tiene un alcance de bloque, lo que significa que solo está disponible dentro del bloque en el que se declara, y puede ser reasignada pero no redeclarada en el mismo ámbito.
- `const`: También tiene un alcance de bloque, pero no puede ser reasignada ni redeclarada una vez que se le ha asignado un valor.

Además de estas formas básicas, es importante mencionar que JavaScript también permite declarar variables sin inicializarlas. En este caso, la variable contendrá el valor `undefined` hasta que se le asigne un valor:

```javascript
var apellido;
let direccion;
```

Sin embargo, al declarar una variable con `const`, es obligatorio inicializarla con un valor en el mismo momento de la declaración, de lo contrario, se producirá un error de sintaxis.

```javascript
const telefono = 1166778899;
```

Aunque no es necesario usar el punto y coma al final de las declaraciones o inicializaciones de las variables en JavaScript, es aconsejable usarlas siempre por un tema de estilo, y mejor legibilidad del código.
### El alojamiento de las variables en la memoria RAM.

En JavaScript, durante la ejecución de un programa, se organiza la memoria en una estructura que comprende el "heap" (montón) y la "stack" (pila). La "stack" es donde se almacenan los contextos de ejecución de las funciones, y cada función tiene su propio "frame" en la pila. El "global frame" es el primer frame que se crea y representa el contexto global del programa.

En este ejemplo:

```javascript
var miNumero1 = 15;
let miNumero2 = 20;
```

La disposición de frames y global frames sería la siguiente:

```SQL
|-------------------------|
|       Global Frame      |
|-------------------------|
|   miNumero1: 15         |
|   miNumero2: 20         |
|-------------------------|
```

- Se crea el "global frame" que contiene la variable `miNumero1` inicializada con el valor `15` y la variable `miNumero2` inicializada con el valor `20`.

Ambas variables, `miNumero1` y `miNumero2`, se almacenan en el "global frame" y estarán disponibles globalmente en el globlal frame de la memoria, no asi en los contextos por lo explicado anteriormente.

El "global frame" se mantiene en la parte superior de la pila y es el contexto principal donde se definen las variables y funciones accesibles desde cualquier parte del programa. Los frames de las funciones se apilan encima del "global frame" cuando las funciones son llamadas, y se eliminan de la pila cuando las funciones terminan de ejecutarse.

### Reglas para Definir Variables en JavaScript

#### 1. Reglas de Identificadores - Nombres de Variables:

Las variables en JavaScript deben seguir ciertas reglas al nombrarlas:

- Pueden comenzar con:
    1. Una letra, mayúscula o minúscula: (A-Z ó a-z).
    2. Un signo de dólar ($).
    3. Un guión bajo (_).

- Pueden continuar con:
    1. Letras mayúsculas o minúsculas: (A-Z ó a-z).
    2. Dígitos (0 - 9).
    3. Guiones bajos (_).
    4. Signos de dólar ($).

Es importante tener en cuenta que JavaScript es sensitivo a mayúsculas y minúsculas. Por lo tanto, `miNombre` y `minombre` serían consideradas como variables distintas.

#### 2. Reglas de Estilo en JavaScript:

Es importante seguir convenciones de estilo al nombrar variables. JavaScript utiliza principalmente la notación Camel Case para los nombres de variables, donde la primera palabra comienza con minúscula y las siguientes palabras comienzan con mayúscula.

**Correcto:** Camel Case

```javascript
let miNombre;
```

**Incorrecto:** Snake Case

```javascript
let mi_variable;
```

**Incorrecto:** PascalCase

```javascript
let MiVariable;
```

#### 3. Comentarios en JavaScript:

Los comentarios son útiles para documentar el código y hacerlo más comprensible. En JavaScript, se pueden utilizar dos tipos de comentarios:

- Comentarios de una línea se realizan con `//`.
- Comentarios multilinea se realizan con `/* */`.

Ejemplos de uso de comentarios:

Explicando código:

```javascript
// Esta constante contiene el valor de pi
const pi = 3.14159;
```

Evitando la ejecución de cierto código:

```javascript
const pi = 3.14159;
// console.log(pi);
```

Comentarios multilinea para comentarios extensos:

```javascript
/*
 * Este comentario multilinea
 * explica en detalle el propósito
 * de una sección de código.
 */
const pi = 3.14159;
```

Comentarios multilinea para evitar la ejecución de cierto código:

```javascript
const pi = 3.14159;
/*
let operacion = 500 * pi;
console.log(operacion);
*/
```
