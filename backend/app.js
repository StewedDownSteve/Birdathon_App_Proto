// Import required modules
const express = require('express');

// Create an Express.js app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ***** ADded this as pseduo code form chatgpt****
const bodyParser = require('body-parser');
const birdRoutes = require('../routes/birdRoutes');

const app = express();

app.use(bodyParser.json());

// Connect bird routes
app.use('/api', birdRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});