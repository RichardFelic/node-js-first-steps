// Operative System

const os = require("node:os");
const { uptime } = require("node:process");

console.log("Informacion del sistema");
console.log("--------------------");
console.log("Nombre del SO", os.platform());
console.log("Version del SO", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs ", os.cpus());
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria libre", os.totalmem() / 1024 / 1024);
console.log(os.uptime() / 60 / 60);
