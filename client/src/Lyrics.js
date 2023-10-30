import React, { useState } from 'react';
import create from './assets/create-text.png'; // Import the image
import watercolor from './assets/watercolor.png'; // Import the image
import watercolor2 from './assets/watercolor2.png'; // Import the image
import watercolor3 from './assets/watercolor3.png'; // Import the image
import watercolor4 from './assets/watercolor4.png'; // Import the image
// 
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
  angry: {
    placeholders: [
      'adjective1', 'noun1', 'adjective2', 'noun2', 'verb1',
      'noun3', 'verb2', 'adjective3', 'noun4', 'adjective4',
    ],
    lyrics: `
    It starts with [a/an] [adjective1] [noun1]
    All I [verb1]
    It's so [adjective2]
    Watch you [verb2]
    I [verb3] so [adjective3] and got so [adjective4]
    But in the end, it [verb4] even [verb5]
    
    I had to [verb6] to [verb7] it [adjective5]
    But in the end, it [verb8] even [verb9]
    
    One [noun2], I don't know why
    It [verb10] even [verb11] how [adjective6] you [verb12]
    
    Keep that in mind, I [verb13] this [noun3]
    To [verb14] myself of a [noun4] when I [verb15] so [adjective7]
    
    In spite of the way you were [verb16] me
    Actin' like I was [adjective8] of your [noun5]
    Remembering all the [noun6] you [verb17] with me
    I'm surprised it got so [adjective9]
    
    Things aren't the [noun7] they were before
    You wouldn't even [verb18] me anymore
    Not that you [verb19] me back then
    But it all comes back to me in the end
    
    You kept [noun8] [noun9]
    And even though I [verb20], it all fell [adjective10]
    What it meant to me will eventually
    Be a [noun10] of a [noun11] when I
    I [verb21] so [adjective11] and got so [adjective12]
    But in the end, it [verb22] even [verb23]
    
    I had to [verb24] to [verb25] it [adjective13]
    But in the end, it [verb26] even [verb27]
    
    One [noun2], I don't know why
    It [verb10] even [verb11] how [adjective6] you [verb12]
    
    Keep that in mind
    I [verb13] this [noun3] to explain in due [noun12]
    All I [verb1]
    
    Time is a [adjective14] thing
    Watch it fly by as the [noun13] [verb28]
    Watch it count down to the [noun14] of the [noun15]
    The [noun16] [verb29] life away
    It's so [adjective2]
    
    You didn't [verb30] out [preposition] [noun17]
    Watch the [noun18] go right out the [noun19]
    Tryin' to [verb31] on, they didn't even [verb32]
    I [verb33] it all just to [verb34] you [verb2]
    
    I kept [noun8] [noun9]
    And even though I [verb20], it all fell [adjective10]
    What it meant to me will eventually be a [noun10]
    Of a [noun4] when I [verb15] so [adjective7]
        `,
  },
  heartbroken: {
    placeholders: [
      'plural_noun', 'adjective1', 'adjective2', 'noun1', 'verb1',
      'noun2', 'noun3', 'verb2', 'noun4', 'noun5', 'adjective3', 
      'adjective4', 'noun6', 'adjective5', 'noun7', 'noun8', 'verb3',
      'verb4', 'adjective6', 'adjective7', 'adjective8', 'noun9', 'verb5'
    ],
    lyrics: `
      Ooh
      [plural_noun] are [adjective1] 
      Guess they look [adjective2] like me 
      We miss you on your [noun1], mmm 
      Still got your things here 
      And they stare at me like [noun2] 
      Don't wanna let you [verb1] my head 
      Just like the [noun3] that I met you 
      The [noun4] I thought [adjective3] 
      Said that you [adjective4] me 
      But that'll last for [noun5] 
      It's [adjective5] outside 
      Like when you [verb2] out my life 
      Why you [verb3] out my life? 
      I get like this every time 
      On these [noun6] that feel like you and me 
      [noun7] [noun8] 
      'Cause I remember every time 
      On these [adjective6] that feel like you and me 
      [noun7] [noun8] 
      Do you ever think of me? 
      Yeah
      (Ooh) I get like this every time
      I'm [verb4] my hopes up 
      Like [plural_noun] [verb4] 'til this day 
      I still see the [noun9] you read, mmm 
      I'm foolishly [adjective7] 
      (Foolishly [adjective7]) 
      Can't get past the taste of your [noun9] 
      (Taste of your [noun9]) 
      Don't wanna let you [verb5] my head 
      Just like the [noun3] that I met you 
      The [noun4] I thought [adjective3] 
      Said that you [adjective4] me 
      But that'll last for [noun5] 
      It's [adjective5] outside 
      Like when you [verb2] out my life 
      Why you [verb3] out my life? (My life) 
      I get like this every time 
      On these [noun6] that feel like you and me 
      [noun7] [noun8] 
      'Cause I remember every time 
      On these [adjective6] that feel like you and me 
      [noun7] [noun8] 
      Do you ever think of me? 
      of me 
      'Cause I think of you, think of you
    `,
    },
    romantic: {
    placeholders: [
      'exclamation', 'plural noun', 'adjective1', 'adjective2', 'noun1', 'interjection',
      'noun2', 'noun3', 'verb1', 'verb2', 'noun4', 'noun5', 'noun6', 'verb3', 'adjective3',
      'verb4', 'verb5', 'adjective4', 'adjective5', 'noun7', 'noun8', 'pronoun1', 'pronoun2',
      'noun9', 'verb6', 'verb7', 'adjective6', 'adverb', 'adverb', 'verb8', 'pronoun3',
      'noun10', 'noun11', 'noun12', 'verb10', 'noun13', 'adverb', 'verb11', 'noun14',
      'noun15', 'noun14', 'noun15'
    ],
      lyrics: `
    It's a [adjective1] [noun1], we were [verb1] [adjective2] places,
    You were [noun2] and I was [noun3],
    It was a [adjective3] [noun4], I was [adjective4] you to the ground,
    And [verb2] out what [noun5] said.

    'Cause you were [noun2], I was a [noun3],
    And [noun6] said, "Stay away from [noun7],"
    And I was [adjective5], [verb3] to [verb4] you,
    So I [verb5] out a [noun8], and [verb6] to the garden to see you.

    And I [verb5], [noun9] on the staircase,
    Begging you, "Please, don't go,"
    And I said,

    [noun2], take me [adjective1],
    You'll [verb1] to the [adjective2] [noun1] and [verb2] the [noun3],
    Just [verb4] [noun6], and [verb5] me,
    [verb6] me, [noun10], just say yes.

    In the moonlight's gentle [adjective6] embrace,
    We danced like [noun11] in an [noun12] place,
    Your [adjective7] touch, my heart's quickened pace,
    In that moment, I knew love's sweet grace.

    Under the [noun13] of a thousand stars,
    We [verb7] together, forgetting the wars,
    Your [adjective8] smile, like Venus on Mars,
    Forever and always, wherever we are.

    [noun2], take me [adjective1],
    To the [adjective2] [noun1] where dreams are born,
    With each [noun14], my love is sworn,
    [verb6] me, [noun10], from dusk 'til morn.

    As the [noun15] shines, our love takes flight,
    Through the [noun16] of time, like day and night,
    In your [noun17] arms, everything feels right,
    Together we'll stand, in love's pure light.
    `,
  },

  excited: {
    placeholders: [
      'noun1', 'adjective1', 'verb1', 'noun2', 'adjective2',
      'noun3', 'adjective3', 'verb2', 'adjective4', 'noun4',
    ],
    lyrics: `
    I can't believe it, I'm so [adjective1] today,
    Like a [noun1] on a [noun2] holiday,
    Gonna [verb1] with joy, come what may,
    In this [adjective2] world, I'm here to stay.

    Every moment feels so [adjective3] and [adjective4],
    I'm [verb2] on top of the world, that's for sure,
    With a heart that's [noun3] and [noun4] pure,
    Life's an adventure, and I'll endure.
    `,
  },
  relaxed: {
    placeholders: [
      'noun1', 'verb1', 'adjective1', 'noun2', 'verb2',
      'adjective2', 'noun3', 'verb3', 'adjective3', 'noun4',
    ],
    lyrics: `
    By the [noun1], I [verb1] so [adjective1] and free,
    Like a gentle [noun2] under the shady tree,
    I'll [verb2] the breeze, listen to the sea,
    In this [adjective2] moment, it's just you and me.

    With [noun3] in my heart, I gently [verb3],
    Life's so [adjective3] and full of ease,
    As the sun sets beyond the [noun4],
    I'm at peace, my soul at ease.
    `,
  },
  nostalgic: {
    placeholders: [
      'noun1', 'adjective1', 'noun2', 'verb1', 'adjective2',
      'verb2', 'adjective3', 'noun3', 'noun4', 'adjective4',
    ],
    lyrics: `
    In the [noun1] of my mind, I'm feeling [adjective1],
    Reminiscing about the days of [noun2],
    I [verb1] back to when life was [adjective2],
    Oh, those [verb2] moments, forever in my view.

    With [adjective3] eyes, I see [noun3] and [noun4],
    A world of [adjective4] memories, not too far,
    I'll hold onto the past, like an old star,
    Nostalgia's warmth, like a comforting jar.
    `,
  },

};



const feelings = [
  { name: 'happy', label: 'Happy' },
  { name: 'sad', label: 'Sad' },
  { name: 'angry', label: 'Angry' },
  { name: 'heartbroken', label: 'Heartbreak' },
  { name: 'romantic', label: 'Romantic' },
  { name: 'excited', label: 'Excited' },
  { name: 'relaxed', label: 'Relaxed' },
  { name: 'nostalgic', label: 'Nostalgic' },
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
      // Handle the case where feelingData is undefined
      setLyrics("Please select a mood.");
      return;
    }
  
    const { lyrics: newLyrics } = feelingData;
    const generatedLyrics = feelingData.placeholders.reduce((lyrics, placeholder) => {
      const replacement = values[placeholder] || `[${placeholder}]`;
      return lyrics.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), replacement);
    }, newLyrics);
  
    setLyrics(generatedLyrics);
  };
  
  const randomizeAll = () => {
    const feelingData = originalLyrics[selectedFeeling];
  
    if (!feelingData) {
      return;
    }
  
    const { placeholders: feelingPlaceholders } = feelingData;
  
    const randomValues = {};
  
    feelingPlaceholders.forEach((placeholder) => {
      let randomValue = '';
      if (placeholder.startsWith('noun')) {
        // Handle noun placeholders
        const nouns = ['flower', 'tree', 'bird', 'sun', 'moon', 'ocean', 'love', 'dream', 'river', 'star', 'smile', 'heart', 'rainbow', 'butterfly', 'cloud', 'meadow', 'kiss', 'mountain', 'whisper', 'rain', 'song', 'dance', 'wind', 'fire', 'night', 'day', 'magic', 'hope', 'sunset', 'light', 'shadow', 'wave', 'child', 'home', 'road', 'journey', 'world', 'peace', 'friend', 'time', 'season', 'moment', 'laughter', 'teardrop', 'sorrow', 'wonder', 'silence', 'garden', 'memory'];
        randomValue = nouns[Math.floor(Math.random() * nouns.length)];
      } else if (placeholder.startsWith('verb')) {
        // Handle verb placeholders
        const verbs = ['sing', 'dance', 'jump', 'laugh', 'cry', 'love', 'dream', 'fly', 'smile', 'whisper', 'shine', 'scream', 'believe', 'hope', 'wander', 'run', 'play', 'sway', 'kiss', 'touch', 'remember', 'forgive', 'embrace', 'cherish', 'breathe', 'melt', 'listen', 'strum', 'strive', 'rejoice', 'live', 'linger', 'swim', 'capture', 'fall', 'rise', 'glow', 'float', 'travel', 'explode', 'blossom', 'stumble', 'explore', 'sigh', 'awaken', 'illuminate', 'inspire', 'vanish'];
        randomValue = verbs[Math.floor(Math.random() * verbs.length)];
      }
      else if(placeholder.startsWith('adjective')){
        // Handle adjective placeholders
        const adjectives = ['happy', 'sad', 'angry', 'romantic', 'excited', 'relaxed', 'nostalgic', 'lonely', 'peaceful', 'mysterious', 'passionate', 'enchanted', 'tender', 'euphoric', 'magical', 'bittersweet', 'gentle', 'melancholic', 'serene', 'radiant', 'whimsical', 'sensational', 'eternal', 'radiant', 'captivating', 'mesmerizing', 'ethereal', 'vibrant', 'captivating', 'graceful', 'intoxicating', 'blissful', 'soothing', 'hypnotic', 'timeless', 'elusive', 'transcendent', 'soulful', 'enchanting', 'alluring', 'dazzling', 'mystical', 'effervescent', 'inspiring', 'dreamy', 'endless', 'haunting'];
        randomValue = adjectives[Math.floor(Math.random() * adjectives.length)];
      }
      else if(placeholder.startsWith('direction')){
        // Handle direction placeholders
        const directions = ['up', 'down', 'left', 'right', 'inside', 'outside', 'above', 'below', 'around', 'near', 'far', 'forward', 'backward', 'over', 'under', 'between', 'through', 'beyond', 'within', 'without', 'beside', 'underneath', 'along', 'across', 'away', 'towards', 'into', 'onto', 'beneath', 'upward', 'downward', 'sideways', 'north', 'south', 'east', 'west', 'high', 'low', 'here', 'there', 'everywhere', 'nowhere', 'somewhere', 'anywhere', 'anyhow', 'someway', 'somehow', 'elsewhere', 'together', 'apart'];
        randomValue = directions[Math.floor(Math.random() * directions.length)];
      }
      else if (placeholder.startsWith('adverb')) {
        // Handle adverb placeholders
        const adverbs = ['slowly', 'fast', 'loudly', 'quietly', 'gently', 'passionately', 'carefully', 'softly', 'wildly', 'deeply', 'suddenly', 'gracefully', 'fiercely', 'sweetly', 'intensely', 'smoothly', 'lightly', 'tenderly', 'boldly', 'freely', 'silently', 'tightly', 'vividly', 'elegantly', 'sharply', 'urgently', 'beautifully', 'peacefully', 'painfully', 'serenely', 'vibrantly', 'urgently', 'magically', 'delicately', 'steadily', 'urgently', 'restlessly', 'dreamily', 'endlessly', 'eagerly', 'patiently', 'recklessly', 'whimsically', 'relentlessly', 'gracelessly', 'gratefully', 'passively'];
        randomValue = adverbs[Math.floor(Math.random() * adverbs.length)];
      }
            else if(placeholder.startsWith('pronoun')){
        // Handle pronoun placeholders
        const pronouns = ['he', 'she', 'it', 'they', 'I', 'you', 'we', 'me', 'us', 'him', 'her', 'them', 'my', 'your', 'our', 'mine', 'yours', 'ours', 'his', 'hers', 'theirs', 'its', 'this', 'that', 'these', 'those', 'who', 'whom', 'whose', 'which', 'what', 'whichever', 'whatever', 'whoever', 'where', 'when', 'why', 'how', 'wherever', 'whenever', 'however', 'anyone', 'someone', 'everyone', 'nobody', 'somebody', 'everybody'];
        randomValue = pronouns[Math.floor(Math.random() * pronouns.length)];
      }
      else if(placeholder.startsWith('number')){
        // Handle number placeholders
        const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twenty two'];
        randomValue = numbers[Math.floor(Math.random() * numbers.length)];
      }
      else if(placeholder.startsWith('interjection')){
        // Handle interjection placeholders
        const interjections = ['wow', 'oh', 'oh no', 'oh my god', 'oh wow', 'oh my goodness', 'hey', 'yeah', 'whoa', 'oh dear', 'oh dear me', 'hurray', 'alas', 'ouch', 'aha', 'oops', 'bravo', 'oh dear', 'gosh', 'uh-huh', 'oh la la', 'phew', 'shh', 'yikes', 'well', 'uh-oh', 'yay', 'shoo', 'hey there', 'hello', 'hi', 'hey now', 'hmm', 'oh boy', 'hush', 'go on', 'hurrah', 'ha-ha', 'no way', 'bingo', 'indeed', 'oh la la', 'voila', 'wowza', 'ahoy', 'ta-da', 'ta-ta', 'aha', 'yippee'];
        randomValue = interjections[Math.floor(Math.random() * interjections.length)];
      }
      else if(placeholder.startsWith('exclamation')){
        // Handle exclaamation placeholders
        const exclamation = ['wow', 'oh', 'oh no', 'oh my god', 'oh wow', 'oh my goodness', 'hey', 'yeah', 'whoa', 'oh dear', 'oh dear me', 'hurray', 'alas', 'ouch', 'aha', 'oops', 'bravo', 'oh dear', 'gosh', 'uh-huh', 'oh la la', 'phew', 'shh', 'yikes', 'well', 'uh-oh', 'yay', 'shoo', 'hey there', 'hello', 'hi', 'hey now', 'hmm', 'oh boy', 'hush', 'go on', 'hurrah', 'ha-ha', 'no way', 'bingo', 'indeed', 'oh la la', 'voila', 'wowza', 'ahoy', 'ta-da', 'ta-ta', 'aha', 'yippee'];
        randomValue = exclamation[Math.floor(Math.random() * exclamation.length)];
        
      }
      else if(placeholder.startsWith('plural_noun')){
        // Handle plural noun placeholders
        const pluralNouns = ['flowers', 'trees', 'birds', 'suns', 'stars', 'waves', 'hearts', 'dreams', 'mountains', 'rivers', 'oceans', 'clouds', 'kisses', 'smiles', 'teardrops', 'whispers', 'friends', 'moments', 'journeys', 'worlds', 'seasons', 'memories', 'rainbows', 'butterflies', 'meadows', 'gardens', 'raindrops', 'shadows', 'fires', 'hopes', 'suns', 'moons', 'waves', 'dreams', 'clouds', 'stars', 'leaves', 'waves', 'sounds', 'echoes', 'nights', 'days', 'passions', 'reflections', 'adventures', 'kisses'];
        randomValue = pluralNouns[Math.floor(Math.random() * pluralNouns.length)];
      }
      // Add more conditions for other placeholder types as needed
  
      randomValues[placeholder] = randomValue;
    });
  
    setValues(randomValues);
    generateLyrics();
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


            <button
          onClick={randomizeAll}
          className="px-4 py-2 bg-[#F5B1CA] text-white rounded hover:bg-[#FF4579]"
        >
          Randomize All
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