import React from 'react';
import sax from './assets/sax2.png'; // Import the image
import music_notes from './assets/music-notes.png'; // Import the image
import music_listener from './assets/music_listener.png'; // Import the image
import music_notes_colorful from './assets/music_notes_colorful.png'; // Import the image
import { Link } from 'react-router-dom'; // Import Link for navigation

const Challenges = () => {
  return (
    //Design
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <div className="flex items-center"> {/* Increase the margin-top */}
        <h1 className="font-reborn text-9xl text-[#979D92] justify-center mt-[20%] z-20">Challenges</h1>
      </div>
      <img src={sax} alt="Saxophone design" className="ml-[-70%] mt-[-10%]" />
      <img src={music_notes} alt="Music notes design" className="w-60 mt-[-45%] ml-[75%]" />
      <img src={music_listener} alt="Music listener design" className="mt-[-5%] z-10 ml-[5%]" />
      <img src={music_notes_colorful} alt="Music notes colorful design" className="w-1/4 mt-[-20%] ml-[70%]" />


{/* Menu Button Functionality */}

<div class="font-CG_Reg p-10 min-w-[1400px] text-black-resonate bg-yellow2-resonate border-black-resonate rounded-lg">

  <Link to="/coverChallenge" className="block">
          <button
            type="button"
            class="w-full border-r text-3xl min-h-[100px] min-w-[200px] border-l border-t mt-5 bg-green-resonate2 text-[#F1F1E7] text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-[#C47E94] hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Monthly Song Cover Challenge:
          </button>
        </Link>    

    <Link to="/lyricChallenge" className="block">
          <button
            type="button"
            class="w-full border-r bg-yellow3-resonate text-3xl min-h-[100px] min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Monthly Lyric Challenge:
          </button>
        </Link>

        <Link to="/AlbumChallenge" className="block">
          <button
            type="button"
            class="w-full border-r bg-green-resonate2 min-h-[100px] min-w-[200px] text-3xl border-l border-t mt-5 text-[#F1F1E7] text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-[#C47E94] hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Album Cover Design Challenge:
          </button>
        </Link>


  <Link to="/about" className="block">
          <button
            type="button"
            class="w-full border-r bg-yellow3-resonate min-h-[100px] min-w-[200px] text-3xl border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Winners + Past Challenges:
          </button>
        </Link>

</div>

<h1 className="font-reborn text-9xl text-[#979D92] justify-center mt-[5%]">Rules</h1>
<p className="mb-[5%] justify-center align-middle ml-[15%] font-CG_Reg max-w-[1300px] overflow-hidden text-2xl text-black-resonate mt-[3%]">1. All unsolicited or emailed submissions will be deleted unread. <br />3. No submissions will be accepted after the deadline. <br />4. All submissions must be original work. Any inspirations and collaborators must be listed/stated. <br />5. All derogatory or offensive submissions will be deleted. <br />6. Any work promoting drugs, alcohol, or violence will be deleted. <br />7. While you may submit in multiple challenges, restrict to only 1 submission per challenge. <br />8. The selection of winners is at the sole discretion of the judging panel. <br />9. The prizes for this competition entail a mention on our website. <br />10. The winners and any honoroable mentions will be notified via chat. <br />11. Only supported file formats for submissions include: jpg, jpeg, png, mp3, wav, and mp4.<br /><br />Any other questions or concerns can be emailed!
  </p>
    </div>
  );
};

export default Challenges;
