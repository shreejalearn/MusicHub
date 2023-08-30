import React, { useState, useEffect } from 'react';
import Axios from 'axios'; 
import Carousel from './Carousel';
import connectdesign from './assets/connectdesign.png';

const Connect = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [excludedUsernames, setExcludedUsernames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousUsersInfo, setPreviousUsersInfo] = useState([]); // Store previous users' info

  const fetchRandomUserInfo = async () => {
    try {
      const response = await Axios.post('http://localhost:5000/getrandomuserinfo', {
        excludedUsernames: excludedUsernames
      });
      setPreviousUsersInfo((prevInfo) => [...prevInfo, userInfo]); // Store current user info in previousUsersInfo
      setUserInfo(response.data.userInfo);
    } catch (error) {
      console.error('Error fetching random user info:', error);
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      if (previousUsersInfo.length > 0) {
        const previousUser = previousUsersInfo.pop(); 
        setUserInfo(previousUser); 
        setPreviousUsersInfo([...previousUsersInfo]);
      }
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex === 9 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    fetchRandomUserInfo();
  }, [excludedUsernames, currentIndex]);

  useEffect(() => {
    const loggedInUsername = localStorage.getItem('username');
    setExcludedUsernames([loggedInUsername]);
  }, []);

  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-[14%]">
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Connect</h1>
        <img src={connectdesign} alt="connect design" className="w-[90rem] mt-[-8%]" />
        {userInfo && (
          <div>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
          </div>
        )}
        <button onClick={() => handleArrowClick('left')}>Previous</button>
        <button onClick={() => handleArrowClick('right')}>Next</button>
        <Carousel />
      </div>
    </div>
  );
};

export default Connect;
