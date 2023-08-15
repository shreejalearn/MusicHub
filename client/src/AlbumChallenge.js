import React, { useState } from 'react';
import sheetmusic from './assets/sheetmusic.png'; // Import the image
import axios from 'axios';

function AlbumChallenge() {
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log("file changed")
        console.log(event.target.files[0])
    };

    const handleUpload = () => {
        if (file) {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)

        axios.post('http://localhost:5000/acupload', formData)
        } else {
        console.error('No file selected');
        }
    };

    return (
        <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative">
            <div className="flex items-center flex-col"> {/* Center content vertically */}
            <h1 className="font-reborn text-9xl text-[#979D92] mt-[19%]">Album</h1>
            <img src={sheetmusic} alt="sheet music design" className="" />
            <h1 className="font-reborn text-9xl text-[#979D92] z-20">Challenge</h1>
            </div>
            <h1 className="font-reborn text-9xl text-[#979D92] mt-[12%]">Submissions</h1>
            <div className="mt-[5%] bg-[#D6C1C1] rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-white">Upload Video or Audio</h1>
                <input type="file" onChange={handleFileChange} />
                <div className="mt-6">
                    <button onClick={handleUpload} className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded">
                        Upload
                    </button>
                </div>
            </div>
        </div>
        
    );

}

export default AlbumChallenge;
