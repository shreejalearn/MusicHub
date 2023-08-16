import React from 'react';
import Carousel from './Carousel';
import connectdesign from './assets/connectdesign.png';

const Connect = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-[14%]"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Connect</h1>
        <img src={connectdesign} alt="connect design" className="w-[90rem] mt-[-8%]" />
        <Carousel />
      </div>
    </div>
  );
};

export default Connect;
