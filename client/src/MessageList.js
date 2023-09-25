import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getmessages');
      console.log(response.data); // Log the response data
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    // Fetch messages initially when the component mounts
    fetchMessages();

    // Set up polling to fetch messages every 10 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchMessages, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  
  return (
    <div>
      <h2>Messages</h2>
      {messages.length === 0 ? (
        <p>No messages available.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            
            <li key={message.id}>
                
              {message.username}: {message.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
