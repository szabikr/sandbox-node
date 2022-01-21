const http = require('http');

const requestListener = function (req, res) {
  console.log(`Received ${req.method} type request`);
  res.writeHead(200);
  res.end(`Hello from ${process.env.NODE_ENV} environment!`);
}

const server = http.createServer(requestListener);
const port = process.env.PORT || 9000;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Server listening on ${host}, port ${port} in ${process.env.NODE_ENV} environment ...`);
});
