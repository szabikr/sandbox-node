const http = require('http');

const requestListener = function (req, res) {
  console.log(`Received ${req.method} type request`);
  res.writeHead(200);
  res.end(`Hello from ${process.env.NODE_ENV} environment!`);
}

const server = http.createServer(requestListener);
const port = process.env.PORT || 9000;
server.listen(port);

console.log(`Server listening on port ${port} in ${process.env.NODE_ENV} environment ...`);
