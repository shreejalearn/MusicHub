import React, { useState } from 'react';

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
    "i": 3, "ii": 5, "iii": 7, "iv": 8, "v": 10, "vi": 9, "vii": 14,
    "I7": 11, "II7": 13, "III7": 15, "IV7": 17, "V7": 19, "VI7": 21, "VII7": 23,
    "i7": 10, "ii7": 12, "iii7": 14, "iv7": 16, "v7": 18, "vi7": 20, "vii7": 22,
    "I7m": 10, "II7m": 12, "III7m": 14, "IV7m": 16, "V7m": 18, "VI7m": 20, "VII7m": 22,
    "i7m": 9, "ii7m": 11, "iii7m": 13, "iv7m": 15, "v7m": 17, "vi7m": 19, "vii7m": 21,
    "I7M": 11, "II7M": 13, "III7M": 15, "IV7M": 17, "V7M": 19, "VI7M": 21, "VII7M": 23,
    "i7M": 10, "ii7M": 12, "iii7M": 14, "iv7M": 16, "v7M": 18, "vi7M": 20, "vii7M": 22,
    "I7dim": 9, "II7dim": 11, "III7dim": 13, "IV7dim": 14, "V7dim": 16, "VI7dim": 18, "VII7dim": 20,
    "i7dim": 8, "ii7dim": 10, "iii7dim": 12, "iv7dim": 14, "v7dim": 15, "vi7dim": 17, "vii7dim": 19,
    "Imaj7": 11, "IImaj7": 13, "IIImaj7": 15, "IVmaj7": 17, "Vmaj7": 19, "VImaj7": 21, "VIImaj7": 23,
    "imaj7": 10, "iimaj7": 12, "iiimaj7": 14, "ivmaj7": 16, "vmaj7": 18, "vimaj7": 20, "viimaj7": 22,
    "IIm7": 2, "IIIm7": 4, "IVm7": 6, "VIm7": 9, "VII(dim)": 10, "VII(dim)7": 22,
    "iim7": 1, "iiim7": 3, "ivm7": 5, "vim7": 8, "vii(dim)": 9, "vii(dim)7": 21,
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
    console.log("Base Notes of Chords:", baseNotes);
      
  };

  return (
    <div>
      <h2>Generate Chord Progression</h2>
      <div>
        <label htmlFor="mood">Select Mood:</label>
        <select id="mood" value={selectedMood} onChange={handleMoodChange}>
          <option value="">Select a mood</option>
          {Array.from(new Set(Object.values(chordProgressions))).map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleGenerateChordProgression}>Generate Chord Progression</button>
      </div>
      {generatedChordProgression && (
        <div>
          <h3>Generated Chord Progression:</h3>
          <p>{generatedChordProgression}</p>
        </div>
      )}

      <h2>Generate Base Notes of Chords</h2>
      <div>
        <label htmlFor="keySignature">Key Signature:</label>
        <input
          type="text"
          id="keySignature"
          value={keySignatureInput}
          onChange={handleKeySignatureChange}
        />
      </div>
      <div>
        <label htmlFor="chordProgression">Chord Progression (comma-separated):</label>
        <input
          type="text"
          id="chordProgression"
          value={chordProgressionInput}
          onChange={handleChordProgressionChange}
        />
      </div>
      <div>
        <button onClick={handleGenerateBaseNotes}>Generate Base Notes</button>
      </div>
      {generatedBaseNotes.length > 0 && (
        <div>
          <h3>Generated Base Notes of Chords:</h3>
          <ul>
            {generatedBaseNotes.map((baseNote, index) => (
              <li key={index}>{baseNote}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Generate;
