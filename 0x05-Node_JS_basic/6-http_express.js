const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Set up the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

// Export the Express application
module.exports = app;
