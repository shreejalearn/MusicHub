import create from './assets/create-text.png'; // Import the image
import React, { useState } from 'react';
import createdesign from './assets/createdesign.png'; // Import the image
import maracas from './assets/maracas.png'; // Import the image
import { Link } from 'react-router-dom'; // Import Link for navigation

const chordProgressions = {
  // Major Chord Progressions
  "I - IV - V": "Happy",
  "I - vi - IV - V": "Happy",
  "I - V - vi - IV": "Happy",
  "I - vi - ii - V": "Happy",
  "I - IV - I - V": "Happy",
  "I - IV - V - I": "Happy",
  "I - V - I - IV": "Happy",
  "I - IV - vi - V": "Happy",
  "I - IV - ii - V - I": "Happy",
  "I - vi - IV - V - vi - IV - I": "Happy",
  // 
  // Minor Chord Progressions
  "i - iv - v": "Sad",
  "i - VI - III - VII": "Sad",
  "i - VII - VI - v": "Sad",
  "i - iv - VII - III": "Sad",
  "i - VII - VI - v": "Sad",
  "i - iv - VI - III": "Sad",
  "i - VII - iv - VI": "Sad",
  "i - iv - v - i": "Sad",
  "i - VII - III - VI": "Sad",
  "i - III - iv - VII": "Sad",
  
  // Blues Chord Progressions
  "I7 - IV7 - V7": "Bluesy",
  "I7 - IV7 - I7 - V7": "Bluesy",
  "I7 - IV7 - I7 - V7 - IV7 - I7": "Bluesy",
  "I7 - IV7 - I7 - I7 - IV7 - IV7 - I7 - I7 - V7 - IV7 - I7 - V7": "Bluesy",
  "I7 - V7 - IV7 - I7": "Bluesy",
  "IV7 - I7 - V7 - I7": "Bluesy",
  "I7 - IV7 - V7 - IV7 - I7": "Bluesy",
  "I7 - IV7 - I7 - IV7 - I7 - IV7 - I7 - IV7": "Bluesy",
  "I7 - V7 - IV7 - V7 - I7 - V7 - IV7 - I7": "Bluesy",
  
  // Rock Chord Progressions
  "I - bVII - IV - I": "Energetic",
  "I - bVII - IV - IV": "Energetic",
  "I - IV - bVII - I": "Energetic",
  "I - bVII - I - IV": "Energetic",
  "I - V - IV - I": "Energetic",
  "I - bVII - IV - bVII - I": "Energetic",
  "I - bVII - IV - V - I": "Energetic",
  "I - IV - bVII - IV - I": "Energetic",
  "I - V - IV - V - I": "Energetic",
  "I - bVII - IV - V - IV - I": "Energetic",
  
  // Ambient Chord Progressions
  "I - iii - IV - vi": "Relaxing",
  "I - vi - IV - V": "Relaxing",
  "I - ii - iii - IV": "Relaxing",
  "I - V - vi - I": "Relaxing",
  "I - ii - V - I": "Relaxing",
  "I - iii - IV - V - vi - I": "Relaxing",
  "I - iii - IV - V - I - ii - iii - IV": "Relaxing",
  "I - V - vi - I - ii - V - vi - I": "Relaxing",
  "I - vi - IV - V - I - iii - IV - vi": "Relaxing",
  "I - vi - ii - V - I - V - vi - IV": "Relaxing",
  
  // Funk Chord Progressions
  "I7 - IV7 - V7 - I7": "Groovy",
  "I7 - IV7 - I7 - IV7": "Groovy",
  "I7 - IV7 - V7 - IV7": "Groovy",
  "I7 - IV7 - bVII7 - I7": "Groovy",
  "I7 - IV7 - ii7 - V7": "Groovy",
  "I7 - IV7 - V7 - IV7 - I7": "Groovy",
  "I7 - IV7 - V7 - I7 - IV7": "Groovy",
  "I7 - IV7 - bVII7 - I7 - IV7": "Groovy",
  "I7 - IV7 - ii7 - V7 - I7 - IV7": "Groovy",
  "I7 - IV7 - bVII7 - I7 - IV7 - I7 - IV7": "Groovy",
  
  // Jazz Chord Progressions
  "ii - V - I": "Sophisticated",
  "ii7 - V7 - I7": "Sophisticated",
  "I - vi - ii - V": "Sophisticated",
  "I - IV - ii - V": "Sophisticated",
  "I - vi - ii - V - I": "Sophisticated",
  "I - vi - ii - V - vi - IV - I - V": "Sophisticated",
  "I - IV - ii - V - I - vi - IV - V": "Sophisticated",
  "ii - V - I - vi - ii - V - I": "Sophisticated",
  "I - vi - ii - V - I - vi - ii - V - I": "Sophisticated",
  "ii - V - I - vi - ii - V - I - vi - ii - V - I": "Sophisticated",
  
  // Pop Chord Progressions
  "vi - IV - I - V": "Catchy",
  "I - V - vi - iii": "Catchy",
  "I - V - vi - IV": "Catchy",
  "I - vi - iii - IV": "Catchy",
  "I - IV - vi - V": "Catchy",
  "I - vi - IV - V - vi - IV - I - V": "Catchy",
  "vi - IV - I - V - I - V - vi - IV": "Catchy",
  "I - V - vi - IV - I - V - vi - IV - I": "Catchy",
  "vi - IV - I - V - IV - I - V - vi - IV": "Catchy",
  "I - V - vi - IV - vi - IV - I - V - vi - IV": "Catchy",
  
  // Country Chord Progressions
  "I - IV - V - IV": "Twangy",
  "I - V - IV - V": "Twangy",
  "I - vi - IV - V - IV - I": "Twangy",
  "I - V - vi - IV - I": "Twangy",
  "I - IV - I - V - IV - I": "Twangy",
  "I - IV - V - IV - V - I - IV - I": "Twangy",
  "I - V - IV - V - IV - V - I - IV - I": "Twangy",
  "I - IV - V - IV - V - I - IV - V - IV - I": "Twangy",
  "I - V - IV - V - I - IV - V - I - IV - V - IV": "Twangy",
  "I - IV - V - IV - V - I - IV - V - IV - V - I - IV": "Twangy",
  
  // Disco Chord Progressions
  "I - IV - I - IV": "Dancey",
  "I - IV - V - I": "Dancey",
  "I - V - IV - IV": "Dancey",
  "I - IV - vi - V": "Dancey",
  "I - V - vi - IV - V": "Dancey",
  "I - IV - I - IV - V - I": "Dancey",
  "I - IV - V - I - IV - V - I": "Dancey",
  "I - V - IV - IV - I - IV - V - I": "Dancey",
  "I - IV - vi - V - I - IV - V - vi - IV - I": "Dancey",
  "I - V - vi - IV - V - I - IV - V - vi - IV - I": "Dancey",
  
  // R&B Chord Progressions
  "I - vi - IV - V": "Smooth",
  "I - vi - ii - V": "Smooth",
  "I - IV - vi - V": "Smooth",
  "vi - IV - I - V": "Smooth",
  "I - IV - I - IV": "Smooth",
  "I - vi - IV - V - vi - IV - I - V": "Smooth",
  "vi - IV - I - V - vi - IV - I - V": "Smooth",
  "I - IV - I - IV - V - I - vi - IV - I": "Smooth",
  "I - IV - vi - V - I - IV - V - I - IV - vi - IV": "Smooth",
  "I - vi - IV - V - I - IV - V - vi - IV - I - IV - I": "Smooth",
};

const intervals = {
  "I": 0, "II": 2, "III": 4, "IV": 5, "V": 7, "VI": 9, "VII": 11,
  "i": 3, "ii": 5, "iii": 7, "iv": 8, "v": 10, "vi": 0, "vii": 12,
  "I7": 11, "II7": 2, "III7": 4, "IV7": 5, "V7": 7, "VI7": 9, "VII7": 11,
  "i7": 10, "ii7": 0, "iii7": 2, "iv7": 3, "v7": 5, "vi7": 7, "vii7": 9,
  "I7m": 11, "II7m": 1, "III7m": 3, "IV7m": 5, "V7m": 6, "VI7m": 8, "VII7m": 10,
  "i7m": 10, "ii7m": 0, "iii7m": 2, "iv7m": 3, "v7m": 5, "vi7m": 7, "vii7m": 9,
  "I7M": 11, "II7M": 1, "III7M": 3, "IV7M": 5, "V7M": 7, "VI7M": 9, "VII7M": 11,
  "i7M": 10, "ii7M": 0, "iii7M": 2, "iv7M": 3, "v7M": 5, "vi7M": 7, "vii7M": 9,
  "I7dim": 11, "II7dim": 1, "III7dim": 3, "IV7dim": 4, "V7dim": 6, "VI7dim": 8, "VII7dim": 10,
  "i7dim": 10, "ii7dim": 0, "iii7dim": 2, "iv7dim": 3, "v7dim": 5, "vi7dim": 6, "vii7dim": 8,
  "Imaj7": 11, "IImaj7": 1, "IIImaj7": 3, "IVmaj7": 5, "Vmaj7": 7, "VImaj7": 9, "VIImaj7": 11,
  "imaj7": 10, "iimaj7": 0, "iiimaj7": 2, "ivmaj7": 3, "vmaj7": 5, "vimaj7": 7, "viimaj7": 9,
  "IIm7": 2, "IIIm7": 4, "IVm7": 5, "VIm7": 7, "VII(dim)": 9, "VII(dim)7": 10,
  "iim7": 1, "iiim7": 3, "ivm7": 4, "vim7": 6, "vii(dim)": 8, "vii(dim)7": 9,
};




function isMinorKey(keySignature) {
    return keySignature.includes("m") || keySignature.includes("minor");
}

function getBaseNote(keySignature, interval) {
    const chromatic_scale = [
        'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
    ];

    let isMinor = isMinorKey(keySignature);
    if (isMinor) {
        keySignature = keySignature.replace("m", "").replace("minor", "").trim();
    }

    const keyIndex = chromatic_scale.indexOf(keySignature);
    const intervalIndex = intervals[interval];

    if (intervalIndex === undefined) {
        // Handle undefined intervals
        return undefined;
    }

    let newIndex = keyIndex + intervalIndex;

    // Handle negative index
    while (newIndex < 0) {
        newIndex += 12;
    }

    newIndex %= 12;
    const baseNote = chromatic_scale[newIndex];
    const quality = isMinor && interval.slice(-1) !== "7" ? "m" : (interval.slice(-1) === "7" ? "7" : "");
    return baseNote + quality;
}

const Generate = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [generatedChordProgression, setGeneratedChordProgression] = useState('');
  const [keySignatureInput, setKeySignatureInput] = useState('');
  const [chordProgressionInput, setChordProgressionInput] = useState('');
  const [generatedBaseNotes, setGeneratedBaseNotes] = useState([]);

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  const handleGenerateChordProgression = () => {
    const filteredProgressions = Object.entries(chordProgressions).filter(
      ([_, mood]) => mood === selectedMood
    );
    const randomChordProgression =
      filteredProgressions[Math.floor(Math.random() * filteredProgressions.length)];
    if (randomChordProgression) {
      const [chordProgression, mood] = randomChordProgression;
      setGeneratedChordProgression(chordProgression);
      console.log(`Chord Progression: ${chordProgression}, Mood: ${mood}`);
    } else {
      setGeneratedChordProgression('No chord progression found for selected mood.');
    }
  };

  const handleKeySignatureChange = (event) => {
    setKeySignatureInput(event.target.value);
  };

  const handleChordProgressionChange = (event) => {
    setChordProgressionInput(event.target.value);
  };

  const handleGenerateBaseNotes = () => {
    const chordProgressionIntervals = chordProgressionInput.split(',').map((interval) => interval.trim());
    const baseNotes = chordProgressionIntervals.map((interval) => {
      const baseNote = getBaseNote(keySignatureInput, interval);
      if(keySignatureInput.includes('m')){
        //minor
        if (interval === 'V' | interval === 'III' | interval === 'VI' | interval === 'VII') {
            const parts=baseNote.split('m')
            const newString=parts.join('');
            return newString;
        } 
        else if (interval === 'ii' | interval=== 'vii') {
            const parts=baseNote.split('m')
            const newString=parts.join('');
            const newnewstr=newString+'dim'
            return newnewstr; }
        else {
            return baseNote;
        }
      }
      else{
        //major
        if (interval === 'ii' | interval === 'iii' | interval === 'vi') {
            return baseNote+'m';
        } 
        else if (interval === 'vii') {
            const parts=baseNote.split('m')
            const newString=parts.join('');
            const newnewstr=newString+'dim'
            return newnewstr; }
        else {
            return baseNote;
        }
      }
    });
    setGeneratedBaseNotes(baseNotes);
    console.log("Chords:", baseNotes);
      
  };

  return (
    <div className='overflow-x-hidden'>
      <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-x-hidden scroll-x-hidden">
        <div className="flex items-center relative"> {/* Increase the margin-top */}
          <img src={create} alt="create text design" className="mt-[0%] ml-[30%] w-[40rem]" />
          <img src={createdesign} alt="design" className="ml-[0%] w-[44rem] overflow-x-hidden" />
        </div>
        <img src={maracas} alt="maracas design" className="ml-[-50%] mt-[-32%] w-[15rem]" />
  
        <h1 className="font-reborn text-5xl text-[#979D92] justify-center mt-[4%] z-20">Generate Chord Progression</h1>
  
        {/* Chord progression */}
        <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
          <label htmlFor="mood" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
            Mood:
          </label>
          <select
            id="mood"
            value={selectedMood}
            onChange={handleMoodChange}
            className="border border-[#C2899E] rounded px-2 py-1 transition-colors hover:border-[#679B89] focus:ring focus:ring-[#C2899E]"
          >
            <option
              value=""
              className="text-[#C2899E] font-CG_Reg transition-colors hover:text-[#679B89]"
            >
              Select
            </option>
            {Array.from(new Set(Object.values(chordProgressions))).map((mood) => (
              <option
                key={mood}
                value={mood}
                className="text-[#C2899E] font-CG_Reg text-xl transition-colors hover:text-[#679B89]"
              >
                {mood}
              </option>
            ))}
          </select>
        </div>
  
        {/* "Generate Chord Progression" button and generated content */}
        <div className="flex items-center space-x-2 font-CG_Reg text-black overflow-x-hidden mt-[2.5%]">
          <button onClick={handleGenerateChordProgression} className="text-2xl border border-[#C2899E] rounded px-2 py-1 transition-colors bg-[#f7b7ce] hover:bg-[#ffe5ed] focus:ring focus:ring-[#C2899E]">
            Generate Chord Progression
          </button>
          {generatedChordProgression && (
            <div className="flex font-CG_Reg text-2xl text-[#6c7565] pl-4">
              <p>{generatedChordProgression}</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
          <label htmlFor="keySignature" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
            Key Signature:
          </label>
          <input
            type="text"
            id="keySignature"
            value={keySignatureInput}
            onChange={handleKeySignatureChange}
            className="border border-[#CD7417] rounded px-2 py-1 transition-colors hover:border-[#679B89] focus:ring focus:ring-[#CD7417]"
          />
        </div>
        <div className="flex items-center space-x-2 font-CG_Reg text-[#CD7417] overflow-x-hidden mt-[2.5%]">
          <label htmlFor="chordProgression" className="text-[#679B89] font-CG_Reg text-3xl transition-colors hover:text-[#C2899E]">
            Chord Progression (comma-separated):
          </label>
          <input
            type="text"
            id="chordProgression"
            value={chordProgressionInput}
            onChange={handleChordProgressionChange}
            className="border border-[#C2899E] rounded px-2 py-1 transition-colors hover:border-[#679B89] focus:ring focus:ring-[#C2899E]"
          />
        </div>
        <div className="flex items-center space-x-2 font-CG_Reg text-black overflow-x-hidden mt-[2.5%]">
          <button onClick={handleGenerateBaseNotes} className="text-2xl border border-[#C2899E] rounded px-2 py-1 transition-colors hover:border-[#679B89] hover:bg-[#ffe5ed] focus:ring focus:ring-[#C2899E] bg-[#f7b7ce]">
            Generate Chords
          </button>
          {generatedBaseNotes.length > 0 && (
            <div className="flex font-CG_Reg text-2xl text-[#6c7565] pl-4">
              <ul>
                {generatedBaseNotes.map((baseNote, index) => (
                  <li key={index}>{baseNote}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
  
      </div>
      <div className='pb-[5%] bg-yellow2-resonate'></div>
    </div>
  );
  };  
export default Generate;
