import React from 'react';
import headerImage from './assets/resonate-left-top.png'; // Import the image

const App = () => {
  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center justify-center">
      <img src={headerImage} alt="Music Hub" className="w-1/2 absolute top-0 left-0 ml-5 mt-7" />
      <h1 className="text-6xl mt-4 font-reborn">Resonate</h1> {/* Use the font-family class */}
    </div>
  );
};

export default App;
