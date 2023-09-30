import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import forumdesign2 from './assets/forumdesign2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [newMessagesCount, setNewMessagesCount] = useState(0);
  const messageListRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getmessages');
      console.log(response.data);
      const newMessages = response.data.messages;
      setMessages(newMessages);

      const numNewMessages = newMessages.length - messages.length;

      if (numNewMessages > 0) {
        setNewMessagesCount(numNewMessages);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setNewMessagesCount(0);
        }, 3000);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const scrollToTop = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    fetchMessages();

    const intervalId = setInterval(fetchMessages, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex justify-center items-center h-screen mt-[11%] mb-[8%]">
      <div className="bg-[#f2f2f2] p-4 rounded-lg shadow-md w-[70%]">
        <img src={forumdesign2} alt="Forum Design" className="w-[90%] mt-[-10%]" />

        <h2 className="text-2xl font-semibold mb-4 text-[#959d83] mt-[-5%]">Messages</h2>

        {/* Notification with new messages count */}
        {showNotification && (
          <div className="notification bg-[#A0C49D] text-white p-2 rounded-md mb-4" onClick={scrollToTop}>
            New Message{newMessagesCount > 1 ? 's' : ''}: {newMessagesCount}
          </div>
        )}

        <div
          className="message-list"
          ref={messageListRef}
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {messages.length === 0 ? (
            <p className="text-gray-600">No messages available.</p>
          ) : (
            <ul>
              {messages.map((message) => (
                <li key={message.id} className="mb-2 text-[#EF529C]">
                  <span className="font-semibold text-[#DBB534]">{message.username}:</span> {message.content}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Scroll to top button */}
        <button
          className="bg-gray-300 p-2 rounded-full shadow-md ml-[93%] mb-[1%]"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default MessageList;
