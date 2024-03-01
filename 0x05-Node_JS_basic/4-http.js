const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body
  res.end('Hello Holberton School!');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

// Export the app
module.exports = app;
