const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Automatically parse JSON bodies

// Logger middleware (for logging every request)
app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.originalUrl}`); // Log every incoming request
  next(); // Proceed to next middleware/route handler
});

app.use('/api/chat', chatRoutes); // Chat routes (e.g., messages, sending)

module.exports = app;