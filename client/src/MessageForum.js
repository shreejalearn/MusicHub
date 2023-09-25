import React, { useState } from 'react';
import axios from 'axios';

const MessageForum = () => {
  const [message, setMessage] = useState('');
  const storedUsername = localStorage.getItem('username');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/sendmessage', {
        content: message,
        username: storedUsername,
      });
      setMessage('');
    } catch (error) {



      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#F4F4EA]">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded flex-grow"
        />
        <button type="submit" className="bg-[#707f62] text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-300">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForum;
