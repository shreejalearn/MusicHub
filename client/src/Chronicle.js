import React from 'react';
import chronicledesign from './assets/chronicledesign.png';
import blogimage1 from './assets/blogimage1.png';

const Chronicle = () => {
  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-[14%]"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Chronicle</h1>
        <img src={chronicledesign} alt="chronicledesign" className="w-[90rem] mt-[-20%]" />
      </div>
      <div>
        <img src={blogimage1} alt="blogimage1" className="" />
      </div>
    </div>
  );
};

export default Chronicle;
