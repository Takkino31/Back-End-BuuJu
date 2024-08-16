const express = require('express');
const cors = require('cors');
const config = require('./config/config');
require('./config/database'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
// const exampleRoutes = require('./routes/exampleRoutes');
// app.use('/api/example', exampleRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});