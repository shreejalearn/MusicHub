import React from 'react';
import banner from './assets/banner.png'; // Import the image
import guitar from './assets/guitar.png'; // Import the image
import shakesphere from './assets/shakesphere.png'; // Import the image
import retro from './assets/retro.png'; // Import the image
import { Textarea } from "@material-tailwind/react";

const LyricChallenge = () => {
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <img src={banner} alt="banner design" className="scale-125" />
      <div className="flex items-center flex-col mt-[8%] ml-[-30%]"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Lyric</h1>
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Challenge</h1>
      </div>
      <img src={guitar} alt="guitar design" className="w-[36rem] mt-[-30%] ml-[60%]" />
    
    {/* First Lyric Challenge */}
    <p className="font-CG_Reg max-w-[1190px] mt-[3%] overflow-hidden text-2xl text-black-resonate">(Shakespearean Theme): "Compose a modern song that weaves together themes and characters from Shakespeare's works. Your lyrics should capture the essence of his timeless tales and the emotions they evoke. Feel free to draw inspiration from iconic lines or characters, and create a musical homage to Shakespeare's literary legacy."</p>
    <img src={shakesphere} alt="shakesphere design" className="w-[85rem] mt-[-6%]" />

    {/* Second Lyric Challenge */}
    <p className="font-CG_Reg max-w-[1190px] mt-[3%] overflow-hidden text-2xl text-black-resonate">(Resonance of Retro Narratives): "Revive past musical trends in modern lyrics. Choose an era like folk storytelling, '80s punk rebellion, or '90s grunge introspection. Craft lyrics that capture the trend's essence with a contemporary twist, exploring its relevance today. Refresh timeless themes for a new perspective."</p>
    <img src={retro} alt="retro design" className="w-[85rem] mt-[0%]" />
    
    <div className="flex items-center flex-col"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] mt-[18%]">Submissions</h1>
        <textarea
  className="border-green-500 border-2 p-2 rounded resize-y focus:ring focus:ring-green-300 focus:border-green-500"
  placeholder="Enter text here"
></textarea>


      </div>

    
    </div>
  );
};

export default LyricChallenge;