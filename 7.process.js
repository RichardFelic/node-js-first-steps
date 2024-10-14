// process
/* El objeto process es un objeto global que proporciona y controla informacion
del proceso actual de ejecucion. EJ:
*/

//     - Los argumentos de entrada

// console.log(process.argv);
// node 7.process.js twitch curso hola --uuu midu
/* Salida:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\rfeli\\OneDrive\\Escritorio\\Talen\\Aprender\\node-js-first-steps\\7.process.js',
  'twitch',
  'curso',
  'hola',
  '--uuu',
  'midu'
]*/

// controlar el proceso y su salida
// 0 todo ha ido bien y el proceso tiene que salir de ahi
// 1 es por si ha habido un error y queremos que salga
// process.exit(1);

// controlar eventos del proceso o escuchar eventos del procesos como errores del proceso
process.on("exit", () => {
  //limpiar la consola o los recursos
});

// current working directory
console.log(process.cwd());

// platform
console.log(process.env.PEPITO); // PEPITO=hola node 7.process.js -> hola
