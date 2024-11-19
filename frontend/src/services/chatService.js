import { io } from 'socket.io-client';

const socket = io('http://localhost:5001');

export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};

export const listenForMessages = (callback) => {
  socket.on('receiveMessage', (message) => {
    callback(message);
  });
};

export const disconnectSocket = () => {
  socket.disconnect();
};
