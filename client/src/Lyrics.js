import React, { useState } from 'react';
import create from './assets/create-text.png'; // Import the image
import watercolor from './assets/watercolor.png'; // Import the image
import watercolor2 from './assets/watercolor2.png'; // Import the image
import watercolor3 from './assets/watercolor3.png'; // Import the image
import watercolor4 from './assets/watercolor4.png'; // Import the image

const originalLyrics = {
  happy: {
    placeholders: [
      'verb1', 'noun1', 'noun2', 'noun3', 'noun4',
      'verb2', 'noun5', 'noun6', 'noun7', 'noun8',
      'noun9', 'verb3', 'verb4', 'adjective1', 'verb5',
      'direction', 'noun13', 'noun14', 'adjective2', 'verb6', 'noun10', 'noun11', 'noun12'
    ],
    // Happy by Pharrell Williams
    lyrics: `
    It might seem crazy what I am 'bout to [verb1]
    [noun1], she's here, you can take a [noun2]
    I'm a [noun3] that could go to [noun4]
    With the air, like I don't care, baby by the way
    Huh (Because I'm happy)
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    Here come [noun10] talking this and that (Yeah)
    Well give me [noun11], don't [verb3] back (Yeah)
    Well I should probably [verb4] you I'll be just [adjective1] (Yeah)
    No offense to you don't [verb5] your [noun12]
    Here's why
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    Uh, [verb6] me [direction]
    Can't [noun13], [verb6] me [direction]
    My [noun14] too high to [verb6] me [direction]
    Can't [noun13], [verb6] me [direction], I said
    [verb6] me [direction], can't [noun13]
    [verb6] me [direction]
    My [noun14] too [adjective2] to [verb6] me [direction]
    Can't nothing, [verb6] me [direction], I said
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    Uh, [verb6] me [direction] (Happy, happy, happy, happy)
    Can't nothing (Happy, happy, happy, happy)
    [verb6] me [direction], my level's too high
    To [verb6] me [direction] (Happy, happy, happy, happy)
    Can't nothing (Happy, happy, happy, happy)
    [verb6] me [direction], I said
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    [verb2] along if you feel like a [noun5] without a [noun6]
    (Because I'm happy)
    [verb2] along if you feel like [noun7] is the [noun8]
    (Because I'm happy)
    [verb2] along if you know what [noun9] is to you
    (Because I'm happy)
    [verb2] along if you feel like that's what you wanna do
    Come on
    `,
  },
  sad: {
    placeholders: [
      'noun1', 'adjective1', 'adverb', 'adjective2', 'noun2', 'noun3',
      'adjective3', 'adjective4', 'adjective5', 'adjective6',
      'pronoun', 'adjective8', 'adjective9', 'adjective10', 'noun4', 'noun5', 'noun6', 'noun7'
    ],
    // Yesterday by The Beatles
    lyrics: `
    Yesterday,
    All my [noun1] seemed so [adjective1] away,
    Now it looks as though they're [adverb] to stay,
    Oh, I [verb] in yesterday.

    Suddenly,
    I'm not [adjective2] the [noun2] I used to be,
    There's a [noun3] hanging over me,
    Oh, [noun3] came suddenly.

    Why [adjective6] [pronoun] had to go,
    I don't [verb], [pronoun] wouldn't say,
    I [verb] something [adjective8] wong, now I long for [noun5].

    [adjective3], [noun7] was such an [adjective5] [noun4] to play,
    Now I need a place to [verb] away,
    Oh, I [verb] in [noun1].

    Why [adjective6] [pronoun] had to go,
    I don't [verb] , [pronoun] wouldn't say,
    I [verb] something [adjective8] wong, now I long for [noun5].

    Yesterday,
    [noun7] was such an [adjective5] [noun4] to play,
    Now I need a place to [verb] away,
    Oh, I [verb] in [noun1].

    Mm-mm-mm-mm-mm-mm-mm.
  `,
  },
};

const feelings = [
  { name: 'happy', label: 'Happy' },
  { name: 'sad', label: 'Sad' },
];

const Lyrics = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [values, setValues] = useState({});
  const [lyrics, setLyrics] = useState('');

  const handleFeelingChange = (e) => {
    setSelectedFeeling(e.target.value);
    setValues({});
  };

  const handleInputChange = (placeholder, value) => {
    setValues((prevValues) => ({ ...prevValues, [placeholder]: value }));
  };

  const generateLyrics = () => {
    const feelingData = originalLyrics[selectedFeeling];

    if (!feelingData) {
      return;
    }

    const { placeholders: feelingPlaceholders, lyrics: newLyrics } = feelingData;

    let generatedLyrics = newLyrics;

    feelingPlaceholders.forEach((placeholder) => {
      const replacement = values[placeholder] || `[${placeholder}]`;
      generatedLyrics = generatedLyrics.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), replacement);
    });

    setLyrics(generatedLyrics);
  };

  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center justify-center relative py-8">
        <div className="flex items-center relative"> {/* Increase the margin-top */}
        <img src={watercolor} alt="watercolor design" className="w-[40rem] ml-[-10%]" />
          <img src={create} alt="create text design" className="w-[40rem] mb-[5%] ml-[8%]" />
          <img src={watercolor2} alt="watercolor 2 design" className="w-[40rem] ml-[15%]" />
        </div>

        <h1 className="text-4xl font-semibold mb-4 font-reborn text-[#979D92]">Mad Libs - Song Lyrics</h1>
      <div className="flex mb-4 mt-10 z-20 ">
        <div className="w-64">
          <select
            id="feeling"
            value={selectedFeeling}
            onChange={handleFeelingChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-[#FF2273] focus:ring focus:ring-[#FF2273] focus:ring-opacity-50"
          >
            <option value="">Select a Mood</option>
            {feelings.map((feeling) => (
              <option key={feeling.name} value={feeling.name}>
                {feeling.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedFeeling && (
        <div className="mb-6">
          {originalLyrics[selectedFeeling].placeholders.map((placeholder) => (
            <div key={placeholder} className="mb-2">
              <label htmlFor={placeholder} className="block mb-1 font-medium text-[#757D6E] justify-center text-center">
                {placeholder}:
              </label>
              <input
                type="text"
                id={placeholder}
                value={values[placeholder] || ''}
                onChange={(e) => handleInputChange(placeholder, e.target.value)}
                className="block w-full px-3 py-2 border rounded focus:outline-none focus:border-[#FF2273] focus:ring focus:ring-[#FF2273] focus:ring-opacity-50"
              />
            </div>
          ))}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => setValues({})}
              className="px-4 py-2 bg-[#9f829c] text-white rounded hover:bg-[#d79ab1]"
            >
              Clear
            </button>
            <button
              onClick={generateLyrics}
              className="px-4 py-2 bg-[#7FB8A4] text-white rounded hover:bg-[#dabd53]"
            >
              Generate Lyrics
            </button>

          </div>
        </div>
      )}
      <div className="text-center">
        {lyrics && (
          <div className="mt-4">
            <h2 className="text-3xl font-semibold mb-2 text-[#F47263] font-reborn mt-6">Generated Lyrics</h2>
            <pre className="whitespace-pre-wrap text-black-resonate">{lyrics}</pre>
            <div className="flex">
      <img src={watercolor3} alt="watercolor 3 design" className="w-[70rem] mr-4 -mt-60 ml-[-5%]" />
      <img src={watercolor4} alt="watercolor 4 design" className="w-[70rem] -mt-60 ml-[50%]" />
    </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Lyrics;