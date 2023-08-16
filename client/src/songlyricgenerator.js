import React, { useState } from 'react';
import './App.css';

const originalLyrics = {
  happy: {
    placeholders: [
        'verb1', 'noun1', 'noun2', 'noun3', 'noun4',
        'verb2', 'noun5', 'noun6', 'noun7', 'noun8',
        'noun9', 'verb3', 'verb4', 'adjective1', 'verb5',
        'direction', 'noun13', 'noun14', 'adjective2', 'verb6','noun10','noun11','noun12'
    ],
    //happy Pharrell Williams
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
        'noun1','adjective1','verb','adjective2','noun2','noun3',
        'adjective3','adjective4','adjective5','adjective6',
        'pronoun','adjective8','adjective9','adjective10','noun4','noun5','noun6','noun7'
    ],
      //yesterday, beatles
    lyrics: `
      Yesterday,
      All my [noun1] seemed so [adjective1] away,
      Now it looks as though they're [verb] to stay,
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

const moods = [
    { name: 'happy', label: 'Happy' },
    { name: 'sad', label: 'Sad' },
  ];
  
  function App() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [values, setValues] = useState({});
    const [lyrics, setLyrics] = useState('');
  
    const handleMoodChange = (e) => {
      setSelectedMood(e.target.value);
      setValues({});
    };
  
    const handleInputChange = (placeholder, value) => {
      setValues((prevValues) => ({ ...prevValues, [placeholder]: value }));
    };
  
    const generateLyrics = () => {
      const moodData = originalLyrics[selectedMood];
  
      if (!moodData) {
        return;
      }
  
      const { placeholders: moodPlaceholders, lyrics: newLyrics } = moodData;
  
      let generatedLyrics = newLyrics;
  
      moodPlaceholders.forEach((placeholder) => {
        const replacement = values[placeholder] || `[${placeholder}]`;
        generatedLyrics = generatedLyrics.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), replacement);
      });
  
      setLyrics(generatedLyrics);
    };
  
    return (
      <div className="App">
        <h1>Mad Libs - Song Lyrics</h1>
        <div className="MoodSelector">
          <label>Select Mood: </label>
          <select value={selectedMood} onChange={handleMoodChange}>
            <option value="">Select a Mood</option>
            {moods.map((mood) => (
              <option key={mood.name} value={mood.name}>
                {mood.label}
              </option>
            ))}
          </select>
        </div>
        {selectedMood && (
          <div>
            {originalLyrics[selectedMood].placeholders.map((placeholder) => (
              <div key={placeholder} className="FormRow">
                <label>{placeholder}: </label>
                <input
                  type="text"
                  value={values[placeholder] || ''}
                  onChange={(e) => handleInputChange(placeholder, e.target.value)}
                />
              </div>
            ))}
            <button onClick={() => setValues({})}>Clear</button>
            <button onClick={generateLyrics}>Generate Lyrics</button>
          </div>
        )}
        <div className="Lyrics">
          {lyrics && <pre>{lyrics}</pre>}
        </div>
      </div>
    );
  }
  
export default App;