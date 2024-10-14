// Promesas
// se usa el node:fs/promises
const { readFile } = require("node:fs");
const fs = require("node:fs/promises");

console.log("Leyendo Primer archivo....");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo Segundo archivo....");

fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto", text);
});

// este no se usa en CommonJS pero si en MJS
/* const textAlt = await readFile('./archivo.txt', 'utf-8')
console.log('primer archivo: ', textAlt);
const textAlt2 = await readFile('./archivo2.txt', 'utf-8');
console.log('segundo archivo: ', textAlt2)*/
