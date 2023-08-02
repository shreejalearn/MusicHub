const intervals = {
    "I": 0, "II": 2, "III": 4, "IV": 5, "V": 7, "VI": 9, "VII": 11,
    "I7": 11, "II7": 13, "III7": 15, "IV7": 17, "V7": 19, "VI7": 21, "VII7": 23,
    "Im": 3, "IIm": 5, "IIIm": 7, "IVm": 8, "Vm": 10, "VIm": 12, "VIIm": 14,
    "I7m": 10, "I7M": 11, "II7m": 12, "II7M": 13, "III7m": 14, "III7M": 15,
    "IV7m": 16, "IV7M": 17, "V7m": 18, "V7M": 19, "VI7m": 20, "VI7M": 21,
    "VII7m": 22, "VII7M": 23, "I7dim": 9, "II7dim": 11, "III7dim": 13,
    "IV7dim": 14, "V7dim": 16, "VI7dim": 18, "VII7dim": 20, "Imaj7": 11,
    "IImaj7": 13, "IIImaj7": 15, "IVmaj7": 17, "Vmaj7": 19, "VImaj7": 21,
    "VIImaj7": 23, "IIm7": 2, "IIIm7": 4, "IVm7": 6, "VIm7": 9,
    "VII(dim)": 10, "VII(dim)7": 22
};


  
function getBaseNote(keySignature, interval) {
    const chromatic_scale = [
        'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
    ];

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
    return chromatic_scale[newIndex];
}

  
const keySignature = "C";
const chordProgressionIntervals = ["I", "IV", "V", "VII7", "I7", "II", "III", "IVmaj7", "V7", "VI7", "IIIm7", "VIm7", "VII(dim)", "VImaj7", "VII(dim)7"];
const baseNotes = chordProgressionIntervals.map(interval => getBaseNote(keySignature, interval));
  
console.log("Base Notes of Chords:", baseNotes);
