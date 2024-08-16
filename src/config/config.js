module.exports = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/buuju-man',
    secretKey: process.env.SECRET_KEY || 'defaultsecretkey',
    // Add other configuration options here
  };