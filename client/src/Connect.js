import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import profilePictures from './profilePictures/profilePictures'; // Import the profilePictures object
import connectdesign from './assets/connectdesign.png';
import radioconnet from './assets/radioconnet.png';
import connectdesign2 from './assets/connectdesign2.png';

const Connect = () => {
  const [users, setUsers] = useState([]); // Store all random users
  const [currentIndex, setCurrentIndex] = useState(0);
  const [friendRequestSent, setFriendRequestSent] = useState(false);

  const fetchRandomUsers = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/getrandomusers');

      // Shuffle the users array to ensure a different order each time
      const shuffledUsers = response.data.users.sort(() => Math.random() - 0.5);
      setUsers(shuffledUsers);
    } catch (error) {
      console.error('Error fetching random users:', error);
    }
  };

  const handleArrowClick = (direction) => {
    resetFriendRequestStatus(); // Reset the friendRequestSent status

    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const sendFriendRequest = async () => {
    try {
      const loggedInUsername = localStorage.getItem('username');
      const currentUser = users[currentIndex];

      if (loggedInUsername && currentUser && currentUser.username) {
        await Axios.post('http://localhost:5000/friendrequest', {
          senderUsername: loggedInUsername,
          receiverUsername: currentUser.username,
        });
        console.log('Friend request sent successfully');
        setFriendRequestSent(true);
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const resetFriendRequestStatus = () => {
    setFriendRequestSent(false);
  };

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  return (
    <div className="connect-container bg-green-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex flex-col items-center">
        <h1 className="font-reborn text-9xl text-[#979D92] z-20 mt-[10%]">Connect</h1>
        <img src={connectdesign} alt="Connect Design" className="w-[100rem] mb-[-10%]" />
        <img src={radioconnet} alt="Radio Connect" className="ml-[70%] z-20" />

        {users.length > 0 && (
          <div className="w-[1100px] p-4 rounded-lg shadow-lg bg-[#F1F1E7] mt-[-12%] z-10">
            <div className="text-center space-y-4 mt-4">
              <div className="flex flex-col items-center">
                <img
                  src={profilePictures[users[currentIndex].pfp]}
                  alt="ProfilePic"
                  className="rounded-full w-40 h-40 mb-[4%]"
                />
                <h2 className="text-5xl text-[#979D92] z-10 font-reborn mb-2">
                  {users[currentIndex].name}
                </h2>
              </div>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#80877a]">
                Main Instrument: {users[currentIndex].main_instrument}
              </p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#EF529C]">Bio: {users[currentIndex].bio}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#80877a]">
                Skills: {users[currentIndex].skills}
              </p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#EF529C] pb-[2%]">
                Accolades: {users[currentIndex].accolades}
              </p>
              <button
                className="font-CG_Reg px-4 py-2 border rounded-full mb-[50%] bg-white"
                onClick={sendFriendRequest}
                disabled={friendRequestSent} // Disable the button if the request has been sent
              >
                {friendRequestSent ? 'Sent!' : 'Send Friend Request'}
              </button>
            </div>
          </div>
        )}

        <div className="flex space-x-4 mt-4">
          <button
            className="font-CG_Reg px-4 py-2 border rounded-full mb-[50%] bg-white"
            onClick={() => handleArrowClick('left')}
          >
            Previous
          </button>
          <button
            className="font-CG_Reg px-4 py-2 border rounded-full mb-[50%] bg-white"
            onClick={() => handleArrowClick('right')}
          >
            Next
          </button>
        </div>
      </div>
      <img src={connectdesign2} alt="Connect Design" className="ml-[-50%] mt-[-25%] mb-[2%] z-20" />
    </div>
  );
};

export default Connect;
