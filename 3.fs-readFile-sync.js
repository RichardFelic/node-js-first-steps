// Sincrono

const fs = require("node:fs");

const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log("primer texto", text);

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo Segundo archivo....");

const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("segundo texto", secondText);
