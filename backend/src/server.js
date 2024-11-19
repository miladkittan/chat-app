const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const logger = require('./utils/logger');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('sendMessage', (message) => {
    logger.info(`Received message from ${socket.id}: ${message}`);

    const messageWithSender = { text: message, sender: socket.id };

    io.emit('receiveMessage', messageWithSender);
  });

  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
