import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

export const ChatContext = createContext();

const socket = io('http://localhost:5001');

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setUserId(socket.id);
    });

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('connect');
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (currentMessage.trim()) {
      socket.emit('sendMessage', currentMessage);
      setCurrentMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && currentMessage.trim()) {
      sendMessage();
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        currentMessage,
        setCurrentMessage,
        sendMessage,
        handleKeyDown,
        userId
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider };
