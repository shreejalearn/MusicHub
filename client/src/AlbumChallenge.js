import React, { useState, useEffect } from 'react';
import sheetmusic from './assets/sheetmusic.png'; // Import the image
import design_album from './assets/design_album.png';
import side_design_album from './assets/side_design_album.png';
import person from './assets/person.png';
import person2 from './assets/person2.png';

import axios from 'axios';

function AlbumChallenge() {
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

    axios.post('http://localhost:5000/acupload', formData)
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
        <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-x-hidden">
            <div className="flex items-center flex-col"> {/* Center content vertically */}
            <img src={person} alt="person design" className="w-[20rem] ml-[-60%] mt-[10%] z-30" />
            <h1 className="font-reborn text-9xl text-[#979D92] mt-[-18%]">Album</h1>
            <img src={sheetmusic} alt="sheet music design" className="" />
            <h1 className="font-reborn text-9xl text-[#979D92] z-20">Challenge</h1>
            <img src={design_album} alt="Album design" className="w-[140rem]" />
            </div>
            <img src={side_design_album} alt="Album design 2" className="mt-[5%] ml-[-65%]" />
            <p className="CG_Reg max-w-[700px] overflow-hidden text-2xl text-black-resonate mr-[-20%] mt-[-37%]">1. "Ethereal Reverie" is a album that explores dreamlike landscapes of the human imagination. The album features a collection of  electronic tracks that transports listeners to a different realm. Create a design that reflects your imagination and thoughts about this theme. The final design should be submitted as a high-resolution PNG or JPG file. Consider the dimensions required for album cover artwork, typically around 3000 x 3000 pixels.<br /><br /><br />2. Free Form: "Midnight Mirage" is a new album with pop and soft country songs. Create a design that reflects your imagination and thoughts about this theme. The design should convey a sense of duality and harmony, reflecting the merging of pop and soft country music.
            The final design should be submitted as a high-resolution PNG or JPG file. Consider the dimensions required for album cover artwork, typically around 3000 x 3000 pixels.
</p>
<img src={person2} alt="person 2 design" className="w-[25rem] mr-[-85%] mt-[-16%]" />


            <h1 className="font-reborn text-9xl text-[#979D92] mt-[1%]">Submissions</h1>
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
            className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded"
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
            <p className="font-CG_Reg mb-[4%] max-w-[1300px] overflow-hidden text-2xl text-black-resonate mt-[5%]">Please note that submissions received after September 1st will be rejected. Any unsolicited submissions or emails will be deleted unread. Any submissions not in the specified format will be deleted unopened. The selection of winners is at the sole discretion of the judging panel. The prizes for this competition entail a mention on our website and a digital certificate. Submissions will be evaluated based on their adherence to either theme and their ability to craft a creative through this design. Each category will have 1 winner and possible honoroable mentions (who will get featured on our website)!
            </p>
        </div>
        
    );

}

export default AlbumChallenge;
