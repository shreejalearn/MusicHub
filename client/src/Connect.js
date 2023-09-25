import React, { useState, useEffect } from 'react';
import Axios from 'axios'; 
import Carousel from './Carousel';
import connectdesign2 from './assets/connectdesign2.png';
import profilePictures from './profilePictures/profilePictures'; // Import the profilePictures object
import radioconnet from './assets/radioconnet.png';
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
    <div className="connect-container bg-green-resonate min-h-screen flex flex-col items-center relative">

      <div className="flex flex-col items-center">
        <h1 className="font-reborn text-9xl text-[#979D92] z-20 mt-[10%]">Connect</h1>
        <img src={connectdesign} alt="Connect Design" className="w-[100rem] mb-[-10%]" />
        <img src={radioconnet} alt="Radio Connect" className="ml-[70%] z-20" />

        {userInfo && (
          <div className="w-[1100px] p-4 rounded-lg shadow-lg bg-[#F1F1E7] mt-[-12%] z-10">
            <div className="text-center space-y-4 mt-4">
              <div className="flex flex-col items-center">
                <img
                  src={profilePictures[userInfo.pfp]}
                  alt="ProfilePic"
                  className="rounded-full w-40 h-40 mb-[4%]"
                />
                <h2 className="text-5xl text-[#979D92] z-10 font-reborn mb-2">{userInfo.name}</h2>
              </div>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#80877a]">Email: {userInfo.email}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#EF529C]">Phone: {userInfo.phone}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#80877a]">Main Instrument: {userInfo.main_instrument}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#EF529C]">Bio: {userInfo.bio}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#80877a]">Skills: {userInfo.skills}</p>
              <p className="font-CG_Reg mr-[10%] ml-[10%] text-[#EF529C] pb-[2%]">Accolades: {userInfo.accolades}</p>
            </div>
          </div>
        )}
        <div className="flex space-x-4 mt-4">
          <button className="font-CG_Reg px-4 py-2 border rounded-full mb-[50%] bg-white" onClick={() => handleArrowClick('left')}>Previous</button>
          <button className="font-CG_Reg px-4 py-2 border rounded-full mb-[50%] bg-white" onClick={() => handleArrowClick('right')}>Next</button>
        </div>
        
      </div>
      <img src={connectdesign2} alt="Connect Design" className="ml-[-50%] mt-[-25%] mb-[2%] z-20" />

    </div>
  );
  };

export default Connect;
