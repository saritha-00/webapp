const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Check if the request URL is "/index"
  if (req.url === '/index') {
    // Serve an HTML file for "/index"
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Handle other paths with a 404 response
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(80, () => {
  console.log('Server is running on port 80');
});
