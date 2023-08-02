import React from 'react';
import headerImage from './assets/resonate-left-top.png'; // Import the image
import logo_mic from './assets/logo_mic.png'; // Import the image
import leaf_design from './assets/leafdesign.png'; // Import the image

const App = () => {
  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center justify-center">
      <img src={headerImage} alt="Music Hub" className="w-1/2 absolute top-0 left-0 ml-5 mt-7" />
      <div className="flex items-center">
        <h1 className="font-reborn text-9xl text-black-resonate mx-[-10px] mt-7">Res</h1>
        <img src={logo_mic} alt="microphone" className="h-76 w-76 mt-28" /> {/* Adjust the margin */}
        <img src={leaf_design} alt="Leaf Design" className="absolute h-24 w-24 top-56 right-80" /> {/* Adjust the margin */}
        <h1 className="font-reborn text-9xl text-black-resonate mx-[-25px] mt-7">nate</h1>
      </div>
    </div>
  );
};

export default App;
