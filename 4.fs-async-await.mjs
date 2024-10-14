// asincorno con MJS

import { readFile } from "node:fs/promises";

const textAlt = await readFile("./archivo.txt", "utf-8");
console.log("primer archivo: ", textAlt);
const textAlt2 = await readFile("./archivo2.txt", "utf-8");
console.log("segundo archivo: ", textAlt2);
