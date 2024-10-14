const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("hola como jaja mundo");
});

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});

// Esto es en caso de no realizar la funcion|modulo findAvailablePort
// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`
//   );
// });
