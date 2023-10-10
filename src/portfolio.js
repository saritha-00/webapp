// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read and serve an HTML file
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading HTML file');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(80, () => {
  console.log('Server is running on port 80');
});