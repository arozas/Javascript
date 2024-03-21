// Arreglos en JS.

// Declaración:

let numerosArreglo = [];

//Modificación:

numerosArreglo.push(21); //Agrega en la última posición el valor.
numerosArreglo[4] = 62; //Agrega en el valor indicado en el indice solicitado.
numerosArreglo.unshift(13); //Agrega en el indice 0 el valor.

//Leer los valores.
console.log(`Valor en el indice [0]: ${numerosArreglo[0]}`);// Arreglos en JS.

//Declaración literal:
let numerosArreglo = [];
let miArray = [13, 21, 0, 0, 62];

//Modificación:
numerosArreglo[0] = 13; //Agrega en el valor indicado en el indice solicitado.
numerosArreglo[1] = 21; //Agrega en el valor indicado en el indice solicitado.
numerosArreglo[4] = 62; //Agrega en el valor indicado en el indice solicitado.
numerosArreglo.push('hola');

//Leer los valores.
console.log(`Valor en el indice [0]: ${numerosArreglo[0]}`);
console.log(`Valor en el indice [1]: ${numerosArreglo[1]}`);
console.log(`Valor en el indice [2]: ${numerosArreglo[2]}`);
console.log(`Valor en el indice [3]: ${numerosArreglo[3]}`);
console.log(`Valor en el indice [4]: ${numerosArreglo[4]}`);
console.log(`Valor en el indice [5]: ${numerosArreglo[5]}`);

//Borrar valores:
numerosArreglo.splice(5,1);

//iterar Arreglos:

//con for
for (let i = 0; i < miArray.length; i++) {
    console.log(`Valor en el indice [${i}]: ${miArray[i]}`);
}

//con forEach
numerosArreglo.forEach((num, index) => console.log(`Valor en el indice [${index}]: ${num}`));
miArray.forEach((num,index) => console.log(`Valor en el indice [${index}]: ${num}`));


