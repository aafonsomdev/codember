/*
En el mundo del espionaje, se utiliza un lenguaje de codificación con símbolos que realizan operaciones matemáticas simples.

Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.

Las operaciones del lenguaje son las siguientes:

"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
El valor numérico inicial es 0 y las operaciones deben aplicarse en elorden en que aparecen en la cadena de símbolos.
*/
const fs = require("fs");

const OPERATIONS = {
    "#": (value) => value += 1,
    "@": (value) => value -= 1,
    "*": (value) => value * value,
    "&": (value, strResult) => (strResult += value),
};

try {
    const data = fs.readFileSync("./reto_02/message_02.txt", "utf-8");
    let value = 0;
    let strResult = "";

    for (const operation of data) {
        if (operation !== "&") {
            value = OPERATIONS[operation](value);
        } else {
            strResult = OPERATIONS[operation](value, strResult);
        }
    }

    fs.writeFileSync('./reto_02/output_02.txt', strResult);
} catch (error) {
    console.log("Ocurrió un error", error);
}
