import React, { useState, useEffect } from 'react';
import Axios from 'axios'; 
import Carousel from './Carousel';
import connectdesign from './assets/connectdesign.png';
import profilePictures from './profilePictures/profilePictures'; // Import the profilePictures object

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
      <div className="flex flex-col items-center mt-[10%]">
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Connect</h1>
        <img src={connectdesign} alt="connect design" className="w-[90rem] mt-[-8%]" />
        {userInfo && (
          <div className="text-center space-y-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src={profilePictures[userInfo.pfp]}
                alt="ProfilePic"
                className="rounded-full w-40 h-40"
              />
              <h2 className="text-3xl text-[#979D92] z-10 font-reborn">{userInfo.name}</h2>
            </div>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Email: {userInfo.email}</p>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Phone: {userInfo.phone}</p>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Main Instrument: {userInfo.main_instrument}</p>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Bio: {userInfo.bio}</p>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Skills: {userInfo.skills}</p>
            <p className='font-CG_Reg mr-[10%] ml-[10%]'>Accolades: {userInfo.accolades}</p>
          </div>
        )}
        <div className="flex space-x-4 mt-4">
          <button className='font-CG_Reg px-4 py-2 border rounded-full mb-[50%]' onClick={() => handleArrowClick('left')}>Previous</button>
          <button className='font-CG_Reg px-4 py-2 border rounded-full mb-[50%]' onClick={() => handleArrowClick('right')}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
