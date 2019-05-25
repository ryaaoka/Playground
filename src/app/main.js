import http from 'http';
import 'dotenv/config';

const port = process.env.APP_PORT;
const hostname = process.env.APP_HOST;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
