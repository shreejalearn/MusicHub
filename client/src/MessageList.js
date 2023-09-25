import React, { useState, useEffect } from 'react';
import axios from 'axios';
import forumdesign2 from './assets/forumdesign2.png';

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
    const intervalId = setInterval(fetchMessages, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen mt-[20%]">
      <div className="bg-[#f2f2f2] p-4 rounded-lg shadow-md w-[70%]">
      <img src={forumdesign2} alt="Forum Design" className='w-[90%] mt-[-10%]'></img>

        <h2 className="text-2xl font-semibold mb-4 text-[#959d83] mt-[-5%]">Messages</h2>
        
        {messages.length === 0 ? (
          <p className="text-gray-600">No messages available.</p>
        ) : (
          <ul>
            {messages.map((message) => (
              <li key={message.id} className=" mb-2 text-[#EF529C]">
                <span className="font-semibold text-[#DBB534]">{message.username}:</span> {message.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessageList;
