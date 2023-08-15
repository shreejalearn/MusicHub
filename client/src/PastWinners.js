import React from 'react';
import winner from './assets/winner.png'; // Import the image
import guitarguy from './assets/guitarguy.png'; // Import the image
import trophyguy from './assets/trophyguy.png'; // Import the image
import sparkle from './assets/sparkle.png'; // Import the image
const PastWinners = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-y-hidden">
        <img src={winner} alt="winner banner" className="w-[70%]" />
        <img src={guitarguy} alt="guitar guy design" className="w-[30%] mr-[-65%] mt-[-15%]" />
        <img src={trophyguy} alt="trophy guy design" className="w-[30%] ml-[-75%] mt-[-40%]" />
        <p className="justify-center text-center align-middle font-CG_Reg max-w-[800px] overflow-hidden text-3xl text-black-resonate mt-[-25%]"> Nellie Barnes ( Album Design Challenge)<br />
        
Jessica Herrera (Design)<br />
Marjorie Berry (Cover)<br />
Elizabeth Robertson (Lyrics)<br />
Christian Romero (Lyrics)
</p>

<img src={sparkle} alt="sparkle design" className="w-[10%]" />

    </div>
  );
};

export default PastWinners;
