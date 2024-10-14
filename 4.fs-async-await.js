// Asincrono secuencial
const { readFile } = require("node:fs/promises");

// Como se puede usar el await en CommonJS:

// IIFE -> Inmediatly Invoked Function Expression
// La IIFE es una funcion que se auto invoca
// Es decir que se invoca justo cuando se esta creando
// ( () => {} )()
(async () => {
  console.log("Probando Async");
  const textAlt = await readFile("./archivo.txt", "utf-8");
  console.log("Ejecutar otra cosa mientras se enjecutan los archivos");
  console.log("primer archivo: ", textAlt);
  const textAlt2 = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo archivo: ", textAlt2);
})();

// La IIFE lo que esta haciendo es ejecutarlo de manera anonima

// es lo mismo que:

/* async function main() {
    console.log("Probando Async");
    const textAlt = await readFile('./archivo.txt', 'utf-8');
    console.log("Ejecutar otra cosa mientras se enjecutan los archivos");
    console.log('primer archivo: ', textAlt);
    const textAlt2 = await readFile('./archivo2.txt', 'utf-8');
    console.log('segundo archivo: ', textAlt2) ;
}

main(); */
