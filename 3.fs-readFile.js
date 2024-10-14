// Asincrono con callbacks

const fs = require("node:fs");
// Esto solo en los modulos nativos
// que no tienen promesas nativas
// aqui al no tener node:fs/promises se utiliza lo siguiente:
/* const { promisify } = require('node:util');

const readFilePromise = promisify(fs.readFile);

fs.readFilePromise('./archivo.txt', 'utf-8')
.then(text => {
    console.log('primer texto: ', text)
}); */

console.log("Leyendo Primer archivo....");
fs.readFile("./archivo.txt", "utf-8", (err, text) =>
  console.log("Leyendo el primer articulo", text)
);

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo Segundo archivo....");

fs.readFile("./archivo2.txt", "utf-8", (err, text) =>
  console.log("leyendo el segundo articulo: ", text)
);
