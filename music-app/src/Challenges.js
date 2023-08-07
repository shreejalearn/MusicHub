import React from 'react';
import sax from './assets/sax2.png'; // Import the image

const Challenges = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center"> {/* Increase the margin-top */}
        <h1 className="font-reborn text-9xl text-[#979D92] justify-center">Challenges</h1>
        <img src={sax} alt="Saxophone design" className="ml-[-90%] mt-[25%]" />
      </div>
    </div>
  );
};

export default Challenges;
