import React, { useState } from 'react';
import axios from 'axios';

const MessageForum = () => {
  const [message, setMessage] = useState('');
  const storedUsername = localStorage.getItem('username');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/sendmessage', { content: message, username: storedUsername });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageForum;
