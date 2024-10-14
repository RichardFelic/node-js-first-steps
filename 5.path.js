const path = require("node:path");

// unir rutas con path.join

/* en node no se puede hacer path asi:
'./content/subfolder/test.txt' 

esto es por el sistema operativo:
 -> unix /
 -> windows \ 
 */

// barra separadoras de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log("Unir rutas: ", filePath);

// Obtener el fichero
const base = path.basename(filePath);
console.log("Obtener nombre del fichero", base);

// Obtener el fichero sin extension
const fileName = path.basename(filePath, ".txt");
console.log("Obtener fichero sin extension (.txt): ", fileName);

// obtener la extension de un fichero
const extension = path.extname("image.png");
console.log(extension);
