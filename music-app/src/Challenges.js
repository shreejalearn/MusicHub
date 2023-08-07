import React from 'react';
import sax from './assets/sax2.png'; // Import the image
import music_notes from './assets/music-notes.png'; // Import the image
import music_listener from './assets/music_listener.png'; // Import the image
import music_notes_colorful from './assets/music_notes_colorful.png'; // Import the image
const Challenges = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center"> {/* Increase the margin-top */}
        <h1 className="font-reborn text-9xl text-[#979D92] justify-center mt-[20%] z-20">Challenges</h1>
      </div>
      <img src={sax} alt="Saxophone design" className="ml-[-70%] mt-[-10%]" />
      <img src={music_notes} alt="Music notes design" className="w-60 mt-[-45%] ml-[75%]" />
      <img src={music_listener} alt="Music listener design" className="mt-[-5%] z-10 ml-[5%]" />
      <img src={music_notes_colorful} alt="Music notes colorful design" className="w-1/4 mt-[-20%] ml-[70%]" />
    </div>
  );
};

export default Challenges;
