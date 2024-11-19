require('dotenv').config(); // Load environment variables from a .env file

const config = {
  server: {
    port: process.env.PORT || 5001,
  },
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // React frontend URL
    methods: ['GET', 'POST'],
  },
};

module.exports = config;
