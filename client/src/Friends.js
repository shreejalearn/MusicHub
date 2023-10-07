// Friends.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    // Fetch the user's friends using a POST request to your API endpoint
    const fetchFriends = async () => {
      try {
        const loggedInUsername = localStorage.getItem('username');
        if (loggedInUsername) {
          const response = await Axios.post('http://localhost:5000/getfriends', {
            username: loggedInUsername,
          });
          // Update the state with the retrieved friends
          setFriends(response.data.friends);
        }
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    // Fetch friend requests using a POST request to your API endpoint
    const fetchFriendRequests = async () => {
        try {
            const loggedInUsername = localStorage.getItem('username');
            if (loggedInUsername) {
              const response = await Axios.post('http://localhost:5000/getfriendrequests', {
                username: loggedInUsername,
              });
              setFriendRequests(response.data.requests);
            }
          } catch (error) {
            console.error('Error fetching friend requests:', error);
          }
    };

    fetchFriends();
    fetchFriendRequests();
  }, []);

  const handleAcceptRequest = async (request) => {
    // Implement the logic to accept a friend request
    try {
      const loggedInUsername = localStorage.getItem('username');
      if (loggedInUsername) {
        await Axios.post('http://localhost:5000/acceptfriendrequest', {
          username: loggedInUsername,
          friendUsername: request.username,
        });
  
        // Remove the accepted request from the friendRequests state
        setFriendRequests((prevRequests) => prevRequests.filter((req) => req.username !== request.username));
  
        // Add the accepted friend to the friends list
        setFriends((prevFriends) => [...prevFriends, request]); // Assuming 'request' contains friend data
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };
  

  const handleDeclineRequest = async (request) => {
    // Implement the logic to decline a friend request
    try {
      const loggedInUsername = localStorage.getItem('username');
      if (loggedInUsername) {
        await Axios.post('http://localhost:5000/declinefriendrequest', {
          username: loggedInUsername,
          friendUsername: request.username,
        });
        // Remove the declined request from the friendRequests state
        setFriendRequests((prevRequests) => prevRequests.filter((req) => req.username !== request.username));
      }
    } catch (error) {
      console.error('Error declining friend request:', error);
    }
  };

  return (
    <div className="friends-container">
      <h1>My Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.username}>
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
          </li>
        ))}
      </ul>

      <h2>Friend Requests</h2>
      <ul>
        {friendRequests.map((request) => (
          <li key={request.username}>
            <p>Name: {request.name}</p>
            <p>Main Instrument: {request.main_instrument}</p>
            <p>Bio: {request.bio}</p>
            <p>Skills: {request.skills}</p>
            <p>Accolades: {request.accolades}</p>
            <button onClick={() => handleAcceptRequest(request)}>Accept</button>
            <button onClick={() => handleDeclineRequest(request)}>Decline</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
