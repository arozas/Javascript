# Constantes

Las constantes en JavaScript son variables cuyo valor no puede ser reasignado después de su inicialización. Proporcionan una forma de definir valores que no cambiarán durante la ejecución del programa.

### Declaración de Constantes:

1. **`const` Keyword**:
    - En JavaScript, las constantes se declaran utilizando la palabra clave `const`.
    - Una vez que se ha asignado un valor a una constante, no se puede cambiar más adelante en el código.

```javascript
const PI = 3.14159;
```

### Características de las Constantes:

1. **Valor Inmutable**:
    - El valor de una constante no puede ser reasignado después de su inicialización.

2. **Ámbito de Bloque**:
    - Las constantes tienen un ámbito de bloque, lo que significa que solo están disponibles dentro del bloque en el que fueron definidas.

3. **Temporal Dead Zone**:
    - Al igual que con las variables `let`, las constantes `const` también están sujetas a la temporal dead zone, lo que significa que no se pueden acceder antes de su declaración en el código.

### Buenas Prácticas:

1. **Usar `const` por Defecto**:
    - Siempre que sea posible, se debe usar `const` para declarar variables en lugar de `let` o `var`. Esto ayuda a evitar la reasignación accidental de valores y hace que el código sea más seguro y fácil de entender.

2. **Nombres Descriptivos**:
    - Usa nombres descriptivos para tus constantes que indiquen claramente su propósito y significado en el contexto de tu código.

3. **Inicialización en la Declaración**:
    - Las constantes deben ser inicializadas al momento de su declaración. Evita declarar constantes sin asignarles un valor, ya que esto puede llevar a comportamientos inesperados.

4. **Evitar Reasignaciones**:
    - No reasignes valores a las constantes una vez que hayan sido inicializadas. Esto puede confundir a otros desarrolladores que lean tu código y puede conducir a errores difíciles de depurar.

### Ejemplo de Buenas Prácticas:

```javascript
// Declaración de Constantes
const PI = 3.14159;
const MAX_ATTEMPTS = 5;

// Constantes del sistema:
console.log(Math.PI); // 3.141592653589793

// Uso de Constantes
const fullName = "John Doe";
const age = 30;

// Evitar Reasignaciones
// Incorrecto
// PI = 3.14; // Esto dará un error de sintaxis

// Correcto
// Usar constantes para valores que no cambiarán
if (age >= MAX_ATTEMPTS) {
    console.log("Has alcanzado el máximo de intentos permitidos.");
}
```

### Conclusiones:

Las constantes en JavaScript son una herramienta poderosa para definir valores que no cambiarán durante la ejecución del programa. Usar `const` por defecto, junto con nombres descriptivos y una inicialización adecuada, puede ayudar a escribir código más seguro y fácil de entender. Al seguir buenas prácticas al trabajar con constantes, puedes mejorar la calidad y mantenibilidad de tu código JavaScript.
