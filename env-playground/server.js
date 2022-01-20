const http = require('http');

const requestListener = function (req, res) {
  console.log(`Received ${req.method} type request`);
  res.writeHead(200);
  res.end(`Hello from ${process.env.NODE_ENV} environment!`);
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT);

console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} environment ...`);
