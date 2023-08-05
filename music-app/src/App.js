import React from 'react';
import headerImage from './assets/resonate-left-top.png'; // Import the image
import logo_mic from './assets/logo_mic.png'; // Import the image
import leaf_design from './assets/leafdesign.png'; // Import the image
import text_sub from './assets/text-sub.png'; // Import the image
import texture from './assets/texture.png'; // Import the image
import ipod from './assets/ipod.png'; // Import the image
import musicnote from './assets/musicnote.png'; // Import the image
import cd from './assets/cd.png'; // Import the image


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

      <div className="flex"> {/* Increase the margin-top */}
        <img src={musicnote} alt="music note" className="absolute right-14 w-60 ml-5 mt-[-10%]" />
      </div>

      <div className="flex"> {/* Increase the margin-top */}
        <img src={ipod} alt="Ipod" className=" absolute left-10 w-60 ml-5 mt-[-13%]" />
      </div>

      {/* Overlay texture background */}
      <div className="left-0 w-full h-full mt-[-33.5%]">
        <img src={texture} alt="textured background" className="w-full h-full object-cover" />
      </div>

{/* CREATING A NAVIGATION MENU */}

<div class="p-10 w-48 min-w-[450px] text-black-resonate bg-yellow-resonate border-black-resonate rounded-lg mb-10 mt-24 mr-[-60%]">
  <button
    type="button"
    class="w-full min-w-[200px] border-r border-l text-center px-4 py-3 text-black-resonate text-md font-medium border-b border-t border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    Connect
  </button>
  <button
    type="button"
    class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b  border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    Create
  </button>
  <button
    type="button"
    class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    Chat
  </button>
  <button
    type="button"
    class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    Challenges
  </button>
  <button
    type="button"
    class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  >
    About Us
  </button>
</div>

{/* CREATING SECOND PART OF THE HOMEPAGE */}

<div className="flex"> {/* Increase the margin-top */}
        <img src={cd} alt="CD Design" className="h-auto" />
      </div>

    </div>
  );
};

export default App;
