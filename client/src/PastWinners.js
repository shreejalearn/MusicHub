import React from 'react';
import flowers from './assets/flowers2.png'; // Import the image
import winner from './assets/winner.png'; // Import the image
import guitarguy from './assets/guitarguy.png'; // Import the image
const PastWinners = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-x-hidden">
        <img src={winner} alt="winner banner" className="w-[70%]" />
        <img src={guitarguy} alt="guitar guy design" className="w-[30%] mr-[-65%] mt-[-15%]" />

    </div>
  );
};

export default PastWinners;
