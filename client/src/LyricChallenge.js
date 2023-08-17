import React, { useState, useEffect } from 'react';
import banner from './assets/banner.png'; // Import the image
import guitar from './assets/guitar.png'; // Import the image
import shakesphere from './assets/shakesphere.png'; // Import the image
import retro from './assets/retro.png'; // Import the image
import { Textarea } from "@material-tailwind/react";
import axios from 'axios';

const LyricChallenge = () => {
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
      setShowConfirmPopup(true); // Show the confirm popup
    } else {
      console.error('No file selected');
    }
  };

  const confirmUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/lcupload', formData)
      .then(() => {
        setFile(null); // Clear the uploaded file
        setShowConfirmPopup(false); // Hide the confirm popup
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
      
  };

  const cancelUpload = () => {
    setFile(null);
    setShowConfirmPopup(false); // Hide the confirm popup
  };

  useEffect(() => {
    // This code will run whenever the 'file' state changes
    if (file === null) {
      const inputElement = document.getElementById('fileInput');
      if (inputElement) {
        inputElement.value = ''; // Clear the input value
      }
    }
  }, [file]);

  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
      <img src={banner} alt="banner design" className="scale-125" />
      <div className="flex items-center flex-col mt-[8%] ml-[-30%]"> {/* Center content vertically */}
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Lyric</h1>
        <h1 className="font-reborn text-9xl text-[#979D92] z-20">Challenge</h1>
      </div>
      <img src={guitar} alt="guitar design" className="w-[36rem] mt-[-30%] ml-[60%]" />
    
    {/* First Lyric Challenge */}
    <p className="font-CG_Reg max-w-[1190px] mt-[3%] overflow-hidden text-2xl text-black-resonate">(Shakespearean Theme): "Compose a modern song that weaves together themes and characters from Shakespeare's works. Your lyrics should capture the essence of his timeless tales and the emotions they evoke. Feel free to draw inspiration from iconic lines or characters, and create a musical homage to Shakespeare's literary legacy."</p>
    <img src={shakesphere} alt="shakesphere design" className="w-[85rem] mt-[-6%]" />

    {/* Second Lyric Challenge */}
    <p className="font-CG_Reg max-w-[1190px] mt-[3%] overflow-hidden text-2xl text-black-resonate">(Resonance of Retro Narratives): "Revive past musical trends in modern lyrics. Choose an era like folk storytelling, '80s punk rebellion, or '90s grunge introspection. Craft lyrics that capture the trend's essence with a contemporary twist, exploring its relevance today. Refresh timeless themes for a new perspective."</p>
    <img src={retro} alt="retro design" className="w-[85rem] mt-[0%]" />

    <div className="mt-[5%] bg-[#D6C1C1] rounded-lg shadow-lg p-8 w-full max-w-md">
    <h1 className="text-3xl font-semibold mb-6 text-white">Upload PDF</h1>
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
            <p className="text-xl mb-4">Are you sure you want to upload the file?</p>
            <div className="flex justify-end">
              <button onClick={confirmUpload} className="mr-4 text-blue-500 hover:text-blue-700">Confirm</button>
              <button onClick={cancelUpload} className="text-red-500 hover:text-red-700">Cancel</button>
            </div>
          </div>
        </div>
      )}

<p className="font-CG_Reg max-w-[1190px] mb-[4%] mt-[3%] overflow-hidden text-xl text-black-resonate">"Please note that submissions received after September 1st will be rejected. Any unsolicited submissions or emails will be deleted unread. The selection of winners is at the sole discretion of the judging panel. The prizes for this competition entail a mention on our website and a digital certificate. Submissions will be evaluated based on their adherence to either theme and their ability to craft a creative and engaging story within their lyrics. Each category will have 1 winner and possible honoroable mentions (who will get featured on our website)!"
</p>

      </div>

    
  );
};

export default LyricChallenge;