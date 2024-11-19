import React from 'react';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext'; 

const ChatBox = () => {
  const { messages, currentMessage, setCurrentMessage, sendMessage, handleKeyDown, userId } = useContext(ChatContext);

  return (
    <div style={{ width: '400px', margin: '0 auto', marginTop: '50px' }}>
      <div
        style={{
          height: '300px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '8px',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              display: 'flex',
              justifyContent: msg.sender === userId ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '10px',
                borderRadius: '15px',
                color: '#fff',
                backgroundColor: msg.sender === userId ? '#007BFF' : '#6c757d',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '5px' }}>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
