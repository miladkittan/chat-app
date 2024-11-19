import React from 'react';

const InputField = ({ currentMessage, setCurrentMessage, sendMessage, handleKeyDown }) => {
  return (
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
          outline: 'none',
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
  );
};

export default InputField;
