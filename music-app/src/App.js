import React from 'react';
import headerImage from './assets/resonate-left-top.png'; // Import the image
import logo_mic from './assets/logo_mic.png'; // Import the image
import leaf_design from './assets/leafdesign.png'; // Import the image
import text_sub from './assets/text-sub.png'; // Import the image
import texture from './assets/texture.png'; // Import the image
import ipod from './assets/ipod.png'; // Import the image
import musicnote from './assets/musicnote.png'; // Import the image

const App = () => {
  return (

//FIRST PART OF THE HOMEPAGE DESIGN

    <div className="bg-green-resonate min-h-screen flex flex-col items-center justify-center relative">
      <img src={headerImage} alt="Music Hub" className="w-1/2 absolute top-0 left-0 ml-5 mt-7" />
      
      <div className="flex items-center relative mt-40"> {/* Increase the margin-top */}
        <h1 className="font-reborn text-9xl text-black-resonate mr-[-25px]">Res</h1>
        <img src={logo_mic} alt="microphone" className="h-152 w-152 ml-4 mt-20" />
        <h1 className="font-reborn text-9xl text-black-resonate mx-[-25px]">nate</h1>
        <img src={leaf_design} alt="Leaf Design" className="h-24 w-24 mt-[-29%]" />
      </div>

      <div className="flex justify-center mt-12"> {/* Increase the margin-top */}
        <img src={text_sub} alt="Connect Create Collaborate" className="h-auto mt-0" />
      </div>

      <div className="flex mt-12"> {/* Increase the margin-top */}
        <img src={musicnote} alt="textured background" className="absolute right-14 w-60 ml-5 bottom-40" />
      </div>

      <div className="flex mt-12"> {/* Increase the margin-top */}
        <img src={ipod} alt="Ipod" className=" absolute left-10 w-60 ml-5 bottom-40" />
      </div>

      {/* Overlay texture background */}
      <div className="left-0 w-full h-full mt-[-40%]">
        <img src={texture} alt="textured background" className="w-full h-full object-cover" />
      </div>

{/* CREATING A NAVIGATION MENU */}

    </div>
  );
};

export default App;
