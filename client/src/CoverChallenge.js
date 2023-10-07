import React, { useState, useEffect } from 'react';
import neon from './assets/neon.png'; 
import headphonesColor from './assets/headphonesColor.png'; 
import playbar from './assets/playbar.png'; 
import skyline from './assets/skyline.png'; 
import border from './assets/border.png'; 
import coverdesign from './assets/coverdesign.png'; 
import coverdesign2 from './assets/coverdesign2.png'; 
import axios from 'axios';



function CoverChallenge() {
  const [file, setFile] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log("file changed")
    console.log(event.target.files[0])
    
  };

  const handleUpload = () => {
    if (file) {
      setShowConfirmPopup(true); 
    } else {
      console.error('No file selected');
    }
  };

  const confirmUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/ccupload', formData)
      .then(() => {
        setFile(null); 
        setShowConfirmPopup(false);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
      
  };

  const cancelUpload = () => {
    setFile(null);
    setShowConfirmPopup(false); 
  };

  useEffect(() => {
    
    if (file === null) {
      const inputElement = document.getElementById('fileInput');
      if (inputElement) {
        inputElement.value = ''; 
      }
    }
  }, [file]);
  
  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
        <div className="flex items-center flex-col mt-[14%]"> {/* Center content vertically */}
        <img src={neon} alt="neon sign design that says live music" className="w-[50%] ml-[-130%] mt-[-25%]" />
        <h1 className="font-reborn text-9xl text-[#979D92] z-20 mt-[-13%]">Cover</h1>
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Challenge</h1>
        <img src={headphonesColor} alt="headphones design" className="ml-[130%] mt-[-50%]" />
      </div>
      <img src={playbar} alt="Play bar music design" className="mt-[7%]" />
      <img src={skyline} alt="city skyline design" className="w-[150%] mt-[-3%]" />
      <div className="flex items-center flex-col">
      <img src={border} alt="border design" className="ml-[-90%] mt-[-5%]" />
      <p className="font-CG_Reg max-w-[1300px] overflow-hidden text-2xl text-black-resonate mt-[-10%] ml-[5%]">Choose a Classic: Participants select a well-known song from any decade or era as their base material. It could be anything from the '50s to the 2000s – the more diverse, the better. Time-Traveling Interpretation: Artists are encouraged to reimagine the selected song with a different musical style or genre. This could involve changing the tempo, instrumentation, vocal arrangement, or even merging multiple styles together.
</p>
<img src={coverdesign} alt="musical design" className="w-[70%] mt-[-6%]" />
<p className="font-CG_Reg max-w-[1300px] overflow-hidden text-2xl text-black-resonate ml-[5%] mt-[5%]">Mashup Fusion Fiesta: Choose 2+ songs from different genres/eras. Incorporate more for complexity. Innovative Blending: Creatively overlap melodies, harmonies, and lyrics for a seamless and exciting fusion. Narrative Connection: Connect songs with a common theme for coherence. Original Touch: Add unique twists, solos, or sections to personalize the mashup.
<img src={coverdesign2} alt="musical design 2" className="w-[80%] justify-center ml-[10%]" />
</p>
      </div>
      <h1 className="font-reborn text-9xl text-[#979D92] mt-[12%]">Submissions</h1>

      <div className="mt-[5%] bg-[#D6C1C1] rounded-lg shadow-lg p-8 w-full max-w-md">
    <h1 className="text-3xl font-semibold mb-6 text-white">Upload Video or Audio</h1>
    <input type="file" id="fileInput" onChange={handleFileChange} />
        {}
        <div className="mt-6">
          {file ? (
            <div>
            <button
            onClick={() => {
              setFile(null);
            }}
            className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded mr-2"
          >Clear</button>
            
            <button
            onClick={handleUpload}
            className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded"
          >Upload</button>
          </div>
          ) : (
            <p>Select a file to upload</p>
          )}
        </div>
      </div>
{/* Confirm/Cancel Popup */}
{showConfirmPopup && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-xl text-black-resonate mb-4">
        Are you sure you want to upload the file?
      </p>
      <div className="flex justify-end">
        <button
          onClick={confirmUpload}
          className="mr-4 text-[#9F9D81] hover:text-green-700 font-semibold"
        >
          Confirm
        </button>
        <button
          onClick={cancelUpload}
          className="text-red-700 hover:text-red-900 font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      <p className="font-CG_Reg mb-[4%] max-w-[1300px] overflow-hidden text-2xl text-black-resonate mt-[5%]">Please note that submissions received after September 1st will be rejected. Any unsolicited submissions or emails will be deleted unread. The selection of winners is at the sole discretion of the judging panel. The prizes for this competition entail a mention on our website and a digital certificate. Submissions will be evaluated based on their adherence to either theme and their ability to craft a creative and powerful story in their video/audio clip. Each category will have 1 winner and possible honoroable mentions (who will get featured on our website)!
</p>

    </div>
  );
}

export default CoverChallenge;