# Sentencias de Decisión en JavaScript.

Las sentencias de decisión en JavaScript son estructuras fundamentales que permiten tomar decisiones basadas en condiciones específicas dentro de un programa. Las sentencias de decisión más comunes son `if`, `else if` y `else`. Aquí tienes una explicación completa y detallada de las sentencias de decisión en JavaScript, que incluye ejemplos:

### Sentencia `if`

La sentencia `if` se utiliza para ejecutar un bloque de código si una condición especificada es verdadera.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```
En este ejemplo, el bloque de código dentro del `if` se ejecuta porque la condición `edad >= 18` es verdadera.

```javascript
let miNumero = -2;

if (miNumero > 0) {
    console.log(`Valor positivo ${miNumero}`);
}
```

En este ejemplo, el bloque de código dentro del `if` NO se ejecuta porque la condición `miNumero > 0` es falsa.

### Sentencia `if...else`

La sentencia `if...else` se utiliza para ejecutar un bloque de código si la condición especificada es verdadera y otro bloque de código si la condición es falsa.

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}
```

En este ejemplo, si `hora` es menor que 12, se imprimirá "Buenos días"; de lo contrario, se imprimirá "Buenas tardes".

### Sentencia `else if`

La sentencia `else if` se utiliza para especificar una nueva condición si la primera condición es falsa.

```javascript
let hora = 20;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
```

En este ejemplo, si `hora` es menor que 12, se imprimirá "Buenos días"; si `hora` es menor que 18 pero mayor o igual a 12, se imprimirá "Buenas tardes"; de lo contrario, se imprimirá "Buenas noches".

En JavaScript, las llaves `{}` se utilizan para delimitar bloques de código dentro de las sentencias `if`, `else if` y `else`. Es importante comprender cómo se utiliza el condicional de llaves para controlar el flujo de ejecución en estas sentencias. Aquí tienes una explicación detallada:

### Sentencia `if`

La sentencia `if` se utiliza para ejecutar un bloque de código si una condición especificada es verdadera. La forma básica de usar `if` es la siguiente:

```javascript
if (condicion) {
    // Bloque de código a ejecutar si la condición es verdadera
}
```

Si la condición dentro de los paréntesis es verdadera, el bloque de código entre las llaves `{}` se ejecutará. Si la condición es falsa, el bloque de código no se ejecutará.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

En este ejemplo, si la variable `edad` es mayor o igual a 18, se imprimirá "Eres mayor de edad".

### Sentencia `if...else`

La sentencia `if...else` se utiliza para ejecutar un bloque de código si la condición especificada es verdadera y otro bloque de código si la condición es falsa. La estructura básica es la siguiente:

```javascript
if (condicion) {
    // Bloque de código a ejecutar si la condición es verdadera
} else {
    // Bloque de código a ejecutar si la condición es falsa
}
```

Si la condición dentro de los paréntesis del `if` es verdadera, se ejecutará el primer bloque de código; de lo contrario, se ejecutará el bloque de código dentro del `else`.

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}
```

En este ejemplo, si `hora` es menor que 12, se imprimirá "Buenos días"; de lo contrario, se imprimirá "Buenas tardes".

#### Uso Condicionales de Llaves

En JavaScript, el uso de llaves `{}` es opcional si solo hay una instrucción dentro del bloque de código asociado a un `if`, `else if` o `else`. Sin embargo, es una buena práctica incluir las llaves siempre para mejorar la legibilidad y evitar errores.

Por ejemplo, aunque es válido escribir lo siguiente:

```javascript
let edad = 18;

if (edad >= 18)
    console.log("Eres mayor de edad");
```

Es preferible utilizar las llaves:

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

Incluso si solo hay una línea de código dentro del bloque, el uso de llaves hace que el código sea más claro y menos propenso a errores.

En resumen, las llaves `{}` se utilizan en las sentencias `if`, `else if` y `else` para delimitar bloques de código y controlar el flujo de ejecución en JavaScript. Aunque su uso es opcional en casos de bloques de código con una sola instrucción, es recomendable incluirlas siempre para mejorar la legibilidad y evitar errores.

### Expresiones Ternarias

Las expresiones ternarias son una forma abreviada de escribir sentencias `if...else` en una sola línea.

```javascript
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje);
```

En este ejemplo, si `edad` es mayor o igual a 18, `mensaje` será "Eres mayor de edad"; de lo contrario, `mensaje` será "Eres menor de edad".

Cuando se utilizan operadores ternarios en JavaScript, es importante seguir algunas recomendaciones y buenas prácticas para garantizar un código claro, legible y mantenible. Aquí tienes algunas recomendaciones:

1. Mantén la simplicidad:

- Utiliza operadores ternarios para expresiones simples y directas. Evita complicar demasiado las condiciones o las expresiones que contienen operadores ternarios.
- Si la expresión se vuelve demasiado compleja o difícil de entender, considera utilizar una estructura `if...else` para mejorar la legibilidad del código.

2. Limita su uso:

- Aunque los operadores ternarios pueden ser útiles en ciertos casos, no los utilices excesivamente. Demasiados operadores ternarios pueden hacer que el código sea difícil de leer y mantener.
- Utiliza operadores ternarios de manera selectiva y preferentemente en situaciones donde la expresión es corta y fácil de comprender.

3. Proporciona comentarios:

- Si el propósito o la lógica detrás de un operador ternario no es obvio, considera agregar comentarios para explicar lo que está sucediendo en esa expresión.
- Los comentarios ayudan a otros desarrolladores (y a ti mismo en el futuro) a comprender el propósito y la intención detrás de la expresión.

4. Formatea adecuadamente:

- Asegúrate de formatear correctamente las expresiones que contienen operadores ternarios para mejorar su legibilidad.
- Utiliza sangrías y espacios en blanco de manera adecuada para que la estructura de la expresión sea clara y fácil de seguir.

5. Evita la sobrecarga de expresiones:

- Evita incluir múltiples operadores ternarios anidados en una sola expresión. Esto puede hacer que el código sea confuso y difícil de entender.
- Si es necesario, divide la expresión en varias líneas o utiliza una estructura `if...else` para manejar casos más complejos.

6. Prueba exhaustivamente:

- Asegúrate de probar todas las ramas de tu código que contienen operadores ternarios para garantizar que funcionen como se espera en todas las condiciones posibles.
- Realiza pruebas unitarias para validar el comportamiento de las expresiones que contienen operadores ternarios.

7. Considera la legibilidad:

- Prioriza la legibilidad del código sobre la concisión. Aunque los operadores ternarios pueden reducir la cantidad de código, a veces es mejor optar por una estructura `if...else` más legible.
- Piensa en la claridad y la comprensión del código para ti y para otros desarrolladores que puedan revisarlo en el futuro.

### Anidamiento de Sentencias de Decisión

Las sentencias de decisión se pueden anidar dentro de otras sentencias de decisión para tomar decisiones más complejas.

```javascript
let num = -5;
let mensaje;

if (num >= 0) {
    if (num === 0) {
        mensaje = "El número es cero";
    } else {
        mensaje = "El número es positivo";
    }
} else {
    mensaje = "El número es negativo";
}

console.log(mensaje);
```

En este ejemplo, se comprueba primero si `num` es mayor o igual a 0. Si es así, se verifica si `num` es igual a 0 o si es un número positivo. Si `num` es menor que 0, se determina que es un número negativo.

### Sentencia `switch`

La sentencia `switch` se utiliza para seleccionar uno de varios bloques de código para ejecutar.

```javascript
let dia = 2;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día no válido";
}

console.log("Hoy es " + nombreDia);
```

En este ejemplo, dependiendo del valor de `dia`, se asigna un valor a la variable `nombreDia`. Si `dia` es 1, `nombreDia` será "Lunes"; si `dia` es 2, `nombreDia` será "Martes"; si `dia` es 3, `nombreDia` será "Miércoles"; de lo contrario, `nombreDia` será "Día no válido".

### If Else vs Switch

La elección entre `switch` y `if...else` en JavaScript depende de la situación y de la claridad y eficiencia del código que se quiere lograr. Aquí hay una comparación entre ambos para ayudarte a decidir cuándo usar cada uno:

#### Switch:

- **Uso con valores discretos:** `switch` es útil cuando necesitas comparar una variable con múltiples valores discretos, digase valores fijos.
- **Sintaxis simplificada:** En comparación con múltiples sentencias `if...else if...else`, `switch` ofrece una sintaxis más limpia y legible.
- **Múltiples casos:** Puedes tener múltiples casos que ejecuten el mismo bloque de código.
- **Uso con constantes:** Es más adecuado cuando los casos son constantes y bien definidos.
- **No hace conversión de tipos:** La sentencia `switch` hace comparación estricta, por lo tanto compara valor y tipo.

#### If Else:

- **Flexibilidad:** `if...else` es más flexible y puede manejar condiciones más complejas. Como comparación de valor flexible `==`, o comparación estricta de valor y tipo `===`
- **Condiciones compuestas:** Puedes usar operadores lógicos como `&&` y `||` para crear condiciones compuestas.
- **Verificación de rangos:** Es útil cuando necesitas verificar rangos o condiciones más específicas.
- **Condiciones dinámicas:** Es mejor cuando las condiciones no son constantes y pueden cambiar dinámicamente.

### Consideraciones adicionales:

- **Eficiencia:** En términos de eficiencia, `switch` puede ser más rápido en ciertos casos, especialmente cuando hay muchos casos.
- **Legibilidad:** `switch` puede mejorar la legibilidad del código cuando se utilizan muchos casos con valores discretos.
- **Compatibilidad:** Ambas construcciones son compatibles con todas las versiones de JavaScript.

La Sentencia `switch` es útil cuando se tienen múltiples casos con valores discretos y constantes, mientras que `if...else` es más adecuado para condiciones más complejas y variables. La elección entre ambos depende de la situación específica y del estilo de codificación preferido. Es importante elegir la construcción que haga que tu código sea más claro, legible y mantenible.

### Conclusiones

Las sentencias de decisión son esenciales para controlar el flujo de ejecución del programa en función de las condiciones especificadas.
