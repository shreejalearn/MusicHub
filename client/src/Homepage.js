import headerImage from './assets/resonate-left-top.png'; // Import the image
import logo_mic from './assets/logo_mic.png'; // Import the image
import leaf_design from './assets/leafdesign.png'; // Import the image
import text_sub from './assets/text-sub.png'; // Import the image
import texture from './assets/texture.png'; // Import the image
import ipod from './assets/ipod.png'; // Import the image
import musicnote from './assets/musicnote.png'; // Import the image
import cd from './assets/cd.png'; // Import the image
import tape from './assets/tape.png'; // Import the image
import drums from './assets/drum3.png'; // Import the image
import recorder from './assets/recorder.png'; // Import the image
import tape2 from './assets/tape2.png'; // Import the image
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import MusicTip from './MusicTip';

const musicList = [
    "Explore new music genres regularly.",
    "Learn to play a musical instrument.",
    "Attend live concerts for your favorite artists.",
    "Create a personalized playlist for different moods.",
    "Try writing your own song lyrics.",
    "Practice sight-reading sheet music.",
    "Listen to music from different cultures.",
    "Study music theory to understand compositions better.",
    "Join a local choir or ensemble.",
    "Learn to read and write musical notation.",
    "Experiment with music production software.",
    "Support local indie musicians and bands.",
    "Explore the history of classical music.",
    "Learn about the influence of music on emotions.",
    "Create a music-themed scrapbook.",
    "Interview a musician you admire.",
    "Try your hand at composing a short jingle.",
    "Explore the impact of music on mental health.",
    "Attend music festivals from various genres.",
    "Research the life of your favorite composer.",
    "Analyze the lyrics of a song you love.",
    "Collaborate with other musicians.",
    "Take up DJing and mixing music.",
    "Study the evolution of jazz music.",
    "Explore the physics of sound and acoustics.",
    "Write a short story inspired by a song.",
    "Learn about famous music collaborations.",
    "Create a musical instrument from household items.",
    "Research the role of music in movies.",
    "Try your hand at beatboxing.",
    "Learn to play a song by ear.",
    "Explore the cultural significance of music.",
    "Write a letter to your favorite artist.",
    "Investigate the world of electronic dance music (EDM).",
    "Record your own cover of a favorite song.",
    "Attend a music therapy session.",
    "Discover the art of album cover design.",
    "Explore the history of hip-hop music.",
    "Create a music-themed painting or artwork.",
    "Listen to music from different time periods.",
    "Join a songwriting workshop.",
    "Learn about the process of music licensing.",
    "Attend a music trivia night.",
    "Research the origins of rock 'n' roll.",
    "Create a playlist for a road trip.",
    "Explore the use of music in advertising.",
    "Write a poem inspired by a song.",
    "Discover the world of a cappella music.",
    "Study the role of music in protests.",
    "Attend an opera or musical theater production.",
    "Experiment with making your own musical instruments.",
    "Analyze the structure of a symphony.",
    "Listen to music from different decades.",
    "Learn about the benefits of music education.",
    "Create a mixtape for a friend.",
    "Explore the history of reggae music.",
    "Take a music appreciation course.",
    "Organize a karaoke night with friends.",
    "Research the influence of music on memory.",
    "Create a music-themed crossword puzzle.",
    "Learn about the world's oldest musical instruments.",
    "Discover the art of music journalism.",
    "Explore the role of music in religious ceremonies.",
    "Try your hand at music photography.",
    "Learn about the connection between math and music.",
    "Create a themed playlist for a workout.",
    "Experiment with creating ambient music.",
    "Analyze the use of motifs in classical compositions.",
    "Study the influence of music on fashion.",
    "Create a Spotify playlist for a specific character in a book.",
    "Explore the history of folk music.",
    "Take a virtual tour of famous music venues.",
    "Research the impact of music on productivity.",
    "Experiment with making DIY percussion instruments.",
    "Create a playlist for a rainy day.",
    "Learn about the role of music in video games.",
    "Study the art of music marketing.",
    "Attend a music-themed trivia night.",
    "Explore the world of world music.",
    "Take up songwriting as a hobby.",
    "Research the connection between music and dance.",
    "Create a playlist inspired by a famous artist's life story.",
    "Discover the art of vocal harmonies.",
    "Experiment with creating a music-themed board game.",
    "Analyze the lyrics of protest songs.",
    "Study the impact of music on sleep.",
    "Learn about the history of blues music.",
    "Explore the use of music in therapy for Alzheimer's patients.",
    "Create a playlist for a summer barbecue.",
    "Try your hand at composing a lullaby.",
    "Research the influence of music on fashion trends.",
    "Attend a music documentary screening.",
    "Study the cultural significance of rap music.",
    "Experiment with creating a music-inspired fashion look.",
    "Analyze the role of music in cultural revolutions.",
    "Learn about the science of musical intervals.",
    "Create a playlist for a romantic dinner.",
    "Explore the use of music in virtual reality experiences.",
    "Take a deep dive into the history of country music.",
    "Start a music-related blog or podcast."
  ];
  

const Homepage = () => {
    const [randomMusicTip, setRandomMusicTip] = useState('');
    const [showMusicTip, setShowMusicTip] = useState(false);

    useEffect(() => {
      // Function to update the random music tip
      const updateRandomMusicTip = () => {
        const randomIndex = Math.floor(Math.random() * musicList.length);
        setRandomMusicTip(musicList[randomIndex]);
      };
  
      // Update the random music tip initially
      updateRandomMusicTip();
  
      // Set up a timeout to show the music tip after 5 seconds (5000 milliseconds)
      const timeoutId = setTimeout(() => {
        setShowMusicTip(true);
      }, 5000);
  
      // Clean up the timeout when the component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  
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

      <div className="flex"> {/* Increase the margin-top */}
        <img src={cd} alt="CD Design" className="h-auto mb-0 ml-[95%] z-10" />
</div>

<div className="flex"> 
<img src={tape} alt="Tape Design Aesthetics" className="mb-0 w-1/2 mr-0 ml-[180%] mt-[-50%] z-10" />
</div>

{showMusicTip && (
        <MusicTip tip={randomMusicTip} onClose={() => setShowMusicTip(false)} />
      )}

<br></br>
<br></br>
<br></br>
<br></br>
<div className="flex">
        <img src={tape2} alt="Tape Design Aesthetics" className="scale-125 ml-[-240%] mt-[-70%]" />
      </div>
      


{/* CREATING A NAVIGATION MENU */}

<div class="font-CG_Reg p-10 w-48 min-w-[450px] text-black-resonate bg-yellow-resonate border-black-resonate rounded-lg mb-10 mt-[-10%] mr-[-60%]">
<Link to="/Profile" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Profile
          </button>
        </Link>
<Link to="/connect" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Connect
          </button>
        </Link>    


  <Link to="/generate" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Chordify
          </button>
        </Link> 

        <Link to="/Lyrics" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Lyricate
          </button>
        </Link>       

        <Link to="/chronicle" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Chronicle
          </button>
        </Link>
    <Link to="/challenges" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            Challenges
          </button>
        </Link>


  <Link to="/about" className="block">
          <button
            type="button"
            class="w-full border-r min-w-[200px] border-l border-t mt-5 text-black-resonate text-center px-4 py-3 text-md font-medium border-b border-black-resonate hover:bg-orange-resonate hover:text-white focus:z-10 focus:ring-2 focus:ring-amber-400 focus:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
            About Us
          </button>
        </Link>
    
</div>

{/* CREATING SECOND PART OF THE HOMEPAGE */}
      <div className="flex relative">
        <img src={recorder} alt="Recorder Design Aesthetics" className="z-10 mt-[-120%] ml-[400%]" />
      </div>


      <div className="flex">
        <img src={drums} alt="Drums" className="ml-[-55%] mt-[-90%] w-[40rem] h-auto" />
      </div>




    </div>
  );
};

export default Homepage;
