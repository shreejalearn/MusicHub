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
  
  const randomChordProgression = Object.keys(chordProgressions)[Math.floor(Math.random() * Object.keys(chordProgressions).length)];
  const mood = chordProgressions[randomChordProgression];
  console.log(`Chord Progression: ${randomChordProgression}, Mood: ${mood}`);
  