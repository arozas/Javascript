//Algoritmo Mayor Edad.
const EDAD_ADULTO = 18;
let edadPersona = 7;

//Lógica para revisar si la persona es mayor de edad.
if (edadPersona >= EDAD_ADULTO){
    console.log(`La persona con edad ${edadPersona}
    es un adulto.`);
}
else {
    console.log(`La persona con edad ${edadPersona}
    es menor de edad.`);
}

//Algoritmo días de la semana.

let diaSemana = '1';

if (diaSemana == 1)
    console.log("Es Lunes");
else if(diaSemana == 2)
    console.log("Es Martes");
else if(diaSemana == 3)
    console.log("Es Miercoles");
else if(diaSemana == 4)
    console.log("Es Jueves");
else if(diaSemana == 5)
    console.log("Es Viernes");
else if(diaSemana == 6)
    console.log("Es Sábado");
else if(diaSemana == 7)
    console.log("Es Domingo");
else
    console.log(`Día de la semana erroneo, no existe el día: ${diaSemana}`);

//Sentencia Switch

let miLetra = "d";

switch (miLetra) {
    case "a":
        console.log("Es la letra a.")
        break;
    case "b":
        console.log("Es la letra b.")
        break;
    default:
        console.log("No entra en el switch.")
}

//Algoritmo días de la semana con Switch
switch (diaSemana){
    case 1: // diaSemana == 1
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miercoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sábado");
        break;
    case 7:
        console.log("Es Domingo");
        break;
    default:
        console.log(`Día de la semana erroneo, no existe el día: ${diaSemana}`);
}
