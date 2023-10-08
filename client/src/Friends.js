import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import design from './assets/design.png'; // Import the image

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
    <div className="flex justify-center items-center pt-[5%] bg-[#fafafa] pb-[5%]" style={{ backgroundImage: `url(${design})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.7 }}>

      <div className="bg-[#F4F4F1] shadow-md p-8 rounded-lg w-[80%] z-20">
        <h1 className="text-2xl text-[#979D92] font-semibold mb-6 font-reborn">My Friends</h1>
        <ul>
          {friends.map((friend) => (
            <li key={friend.username} className="mb-6">
              <p className="text-lg font-medium font-CG_Reg">Name: {friend.name}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Email: {friend.email}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Phone: {friend.phone}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-reborn text-[#979D92]">Friend Requests</h2>
        <ul>
          {friendRequests.map((request) => (
            <li key={request.username} className="mb-6">
              <p className="text-lg font-medium font-CG_Reg">Name: {request.name}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Main Instrument: {request.main_instrument}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Bio: {request.bio}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Skills: {request.skills}</p>
              <p className="text-gray-600 mt-2 font-CG_Reg">Accolades: {request.accolades}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleAcceptRequest(request)}
                  className="bg-[#788073] text-white px-4 py-2 rounded-full mr-4 hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDeclineRequest(request)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
