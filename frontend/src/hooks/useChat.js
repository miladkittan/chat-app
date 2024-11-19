import { useEffect, useState } from 'react';
import { sendMessage, listenForMessages, disconnectSocket } from '../services/chatService';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    listenForMessages((newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const handleSendMessage = (message) => {
    if (message.trim()) {
      sendMessage(message);
    }
  };

  return {
    messages,
    handleSendMessage,
  };
};

export default useChat;
