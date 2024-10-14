// Operative System

import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime as _uptime,
} from "node:os";

console.log("Informacion del sistema");
console.log("--------------------");
console.log("Nombre del SO", platform());
console.log("Version del SO", release());
console.log("Arquitectura", arch());
console.log("CPUs ", cpus());
console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("Memoria libre", totalmem() / 1024 / 1024);
console.log(_uptime() / 60 / 60);
