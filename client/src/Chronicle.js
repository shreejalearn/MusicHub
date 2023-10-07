import React from 'react';
import chronicledesign from './assets/chronicledesign.png';
import blogimage1 from './assets/blogimage1.png';
import blogimage2 from './assets/blogimage2.png';
import blogimagepiano from './assets/blogimagepiano.png';
import blogimageMIDI from './assets/musictech3.jpg';
import blogimagesheetmusic from './assets/blogimagesheetmusic.png';
import blogimagesinging from './assets/blogimagesinging.jpg';
import blogimagepitch from './assets/blogimagepitch.jpg';
import blogimagetempo from './assets/blogimagetempo.jpg';
import Blog from './BlogComponents/Blog';

const Chronicle = () => {
  const blogPosts = [
    {
      title: 'Welcome!',
      content: "Resonate: Your hub for music enthusiasts. Unlock collaboration on our Connect page, craft lyrics with our generator, explore chords, dive into blogs, and rise to the Album, Cover, and Lyric Challenge. Connect, create, and celebrate music's power with us! 🎵🌟",
      imageUrl: blogimage2,
    },
    {
      title: 'Practice, practice, practice!',
      content: "Tip of the Day: Practice doesn't make perfect; it makes progress. Embrace the journey of learning to sing or play an instrument. Small, consistent steps lead to beautiful melodies. 🌟",
      imageUrl: blogimage1,
      score:5
    },
    {
      title: 'Sheet Music',
      content: "Learning to read sheet music? Focus on one element at a time, like notes or rhythms, until you're comfortable. Slow and steady wins the race in sheet music mastery! 🎵📚"      ,
      imageUrl: blogimagesheetmusic,
      score:2

    },
    {
      title: 'Singing Techniques',
      content: "Mastering singing techniques: Head voice resonates in your upper register, while chest voice feels deeper in your chest. Practice transitioning smoothly between the two for versatile vocals! 🎤🗣️",
      imageUrl: blogimagesinging,
      score:5

    },

    {
      title: 'Vocal Pitches 101',
      content:     "Soprano hits the high notes, mezzo balances high and low, while alto adds depth. Tenor soars in the middle, and bass brings the low, grounding tones to harmonize beautifully! 🎸🎼",      
      imageUrl: blogimagepitch,
      score:1

    },

    
    {
      title: 'Rhythmic Pulse',
      content:         "Finding the right tempo is like discovering your music's heartbeat; it sets the groove and mood, so trust your instincts and listen to what feels just right for your piece. 🎶🕺"  
      ,
      imageUrl: blogimagetempo,
      score:2

    },

    {
      title: 'MusicTech',
      content:         "Using MIDI for composing offers the digital canvas for your musical imagination, allowing you to effortlessly explore melodies, harmonies, and arrangements with precision and creativity. 🎼🎹",
      imageUrl: blogimageMIDI,
      score:3

    },

    
    {
      title: 'Piano Time',
      content:            "A pianist's glissando is like a musical slide, played by swiftly running your fingers along the keys from one note to another, creating a seamless, shimmering effect. 🎹🎵 " ,
      imageUrl: blogimagepiano,
      score:10
    },


    // Add more blog posts here
  ];

  blogPosts.sort((a, b) => b.score - a.score);

  return (
    <div className="bg-green-resonate min-h-screen flex flex-col items-center relative">
            <div className="flex items-center flex-col mt-[14%]"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Chronicle</h1>
        <img src={chronicledesign} alt="chronicledesign" className="w-[90rem] mt-[-20%]" />
      </div>
      <div>
      </div>
      <div className='mb-10'>
      <Blog posts={blogPosts} />
      </div>
    </div>


  );
};

export default Chronicle;