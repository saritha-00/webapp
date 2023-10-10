const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Gets the context path from the request URL (e.g., /index or /resume)
  const contextPath = req.url;

  // Defining the mapping of context paths to HTML files
  const contextToHtmlMap = {
    '/index': 'index.html',
    '/resume': 'Resume.html',
  };

  // Checking if the context path is in the map
  if (contextPath in contextToHtmlMap) {
    const htmlFileName = contextToHtmlMap[contextPath];
    const filePath = path.join(__dirname, htmlFileName);

    // Serve the HTML file based on the context path
    fs.readFile(filePath, 'utf8', (err, data) => {
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

server.listen(port, () => {
  console.log('Server is running on port');
});
