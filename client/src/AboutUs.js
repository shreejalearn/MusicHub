import React from 'react';
import flowers from './assets/flowers2.png'; // Import the image
import music_staff from './assets/music_staff.png'; // Import the image
import s_music from './assets/s_music.png'; // Import the image
import singer from './assets/singer.png'; // Import the image
import piano from './assets/piano.png'; // Import the image
import headphones from './assets/headphones.png'; // Import the image
import speakers from './assets/speakers.png'; // Import the image
const AboutUs = () => {
  return (
    <div className="bg-green-resonate min-h-screen flex flex-col relative overflow-x-hidden">
    <div className="flex items-center relative"> {/* Increase the margin-top */}
        <img src={flowers} alt="Flowers design" className="absolute ml-[-2%] mt-[20%] scale-110" />
        <h1 className="font-reborn text-9xl text-black-resonate ml-96 mt-12">About Us</h1> {/* TEXT */}
        <img src={music_staff} alt="Musical Staff design" className="absolute scale-125 mt-[-10%] ml-[65%]" />
        <h1 className="text-6xl text-[#517D67] font-CG_Reg mt-[30%] ml-[-32%]">hreeja Das</h1>
        <img src={s_music} alt="Letter S with a musical sign" className="mt-[31%] ml-[-19%]" />
    </div>

    {/* Shreeja Introduction */}
    <div className="flex">  
    <p className="font-CG_Reg max-w-[850px] ml-[30%] overflow-hidden text-2xl text-black-resonate">
  <em>HELLO WORLD.</em>
  <br />
    <br />

  Asleep, I am a nightingale, weaving melodies. Asleep, I am a writer dabbling with words on a canvas of dreams. Asleep, I yearn to be the galaxy's dancer, twirling through life's new experiences.
  <br />
  Awake, I strive to be an ever-changing melody, a tiny girl with not so tiny dreams.
  <br />
  <br />
  I’m a sophomore in high school and a tech enthusiast with a passion for coding in Python, Java, and JavaScript. I specialize in web development, using React, React Native (mobile development), SQL, HTML, and CSS to craft digital solutions. I've also recently been delving into AI/ML. Currently, I'm expanding my skills in 6502 Assembly language and C++. When not coding, I'm a creative soul! I love singing, songwriting, and design. I'm a published author and run a YouTube channel on singing and teaching mental math. Beyond that, I also am president of the Girls Who Code club at Bergen County Academies: I'm dedicated to spreading my knowledge. Whether it's writing code or creating art, I thrive on innovation and making a positive impact.

</p>
        <img src={singer} alt="Singer design" className="w-96 mt-[-19%]" />
    </div>      

    {/* Anna Introduction */}
    <h1 className="text-6xl text-[#517D67] font-CG_Reg mt-[5%] ml-[10%]">Anna Ekmekci</h1>
    <img src={headphones} alt="Headphones design" className="w-11 mt-[-5%] ml-[9.95%]" />
    <p className="font-CG_Reg max-w-[850px] ml-[5%] mt-[4%] overflow-hidden text-2xl text-black-resonate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas erat nec tellus volutpat, quis congue lectus semper. Ut ac rhoncus erat. Morbi ut porttitor lorem. Nullam pulvinar neque urna, vel venenatis mauris posuere in.Donec dictum felis ut mauris ultrices rutrum. Cras id dui nec eros varius tempor. Ut mauris velit, feugiat sed magna a, dictum tristique nisl. In et turpis est.</p>
    <img src={piano} alt="Piano design" className=" w-[35rem] ml-[62%] mt-[-20%]" />

    {/* Contact */}
    <h1 className="text-6xl text-[#517D67] font-CG_Reg mt-9 ml-[75%]">Contact</h1>
    <p className="font-CG_Reg ml-[40%] mt-4 max-w-[850px] overflow-hidden text-2xl text-black-resonate">
    Email: shreeja.das.16@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram: @lil_shreej
    <br />
    Email: ANNA'S EMAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::::&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ANNA OTHER SOCIAL
    <br />
    <br />

    Feel free to reach out to us for any questions, comments, or concerns
</p>
    <img src={speakers} alt="Speakers design" className="w-[35%] mt-[-20%] ml-[4%]" />   
    </div>
  );
};

export default AboutUs;
