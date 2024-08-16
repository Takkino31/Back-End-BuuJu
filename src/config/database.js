const mongoose = require('mongoose');
const config = require('./config'); // Importer les configurations

const { port, mongodb_uri, secretKey } = config;

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
