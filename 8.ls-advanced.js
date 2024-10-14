const { stat } = require("node:fs");
const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

// Asigna el segundo argumento pasado al script como el directorio a leer. Si no se pasa, usa el directorio actual ('.').
const folder = process.argv[2] ?? ".";

// Función asíncrona que lista los archivos en un directorio.
async function ls(folder) {
  let files; // Variable para almacenar la lista de archivos.
  try {
    // Intenta leer el directorio y asigna los nombres de archivos a 'files'.
    files = await fs.readdir(folder);
  } catch {
    // Si ocurre un error al leer el directorio, muestra un mensaje de error y termina el programa.
    console.error(pc.red(`No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  // Crea una lista de promesas donde se obtienen los detalles de cada archivo en el directorio.
  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file); // Genera la ruta completa del archivo.
    let stats; // Variable para almacenar la información del archivo.
    try {
      // Intenta obtener los metadatos del archivo.
      stats = await fs.stat(filePath);
    } catch {
      // Si ocurre un error al obtener los metadatos, muestra un mensaje de error y termina el programa.
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    // Determina si el archivo es un directorio.
    const isDirectory = stats.isDirectory();
    // Asigna 'd' si es un directorio, '-' si es un archivo regular.
    const fileType = isDirectory ? "d" : "-";
    // Obtiene el tamaño del archivo y lo convierte a una cadena.
    const fileSize = stats.size.toString();
    // Obtiene la fecha y hora de la última modificación del archivo.
    const fileModified = stats.mtime.toLocaleString();

    // Devuelve una cadena con la información formateada: tipo de archivo, nombre, tamaño, y fecha de modificación.
    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.padStart(10)
    )} bytes | ${pc.yellow(fileModified)}`;
  });

  // Espera a que se resuelvan todas las promesas de 'filePromises'.
  const filesInfo = await Promise.all(filePromises);
  // Imprime cada archivo con su información correspondiente.
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

// Llama a la función 'ls' con el directorio especificado.
ls(folder);
