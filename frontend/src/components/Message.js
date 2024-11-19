import React from 'react';
import { formatDate, formatTime } from '../utils/dateFormatter';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <div
      style={{
        marginBottom: '10px',
        display: 'flex',
        justifyContent: sender === message.sender ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        style={{
          maxWidth: '70%',
          padding: '10px',
          borderRadius: '15px',
          color: '#fff',
          backgroundColor: sender === message.sender ? '#007BFF' : '#6c757d',
        }}
      >
        {text}
        <div
          style={{
            fontSize: '12px',
            color: '#ccc',
            marginTop: '5px',
            textAlign: 'right',
          }}
        >
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;
