import React from 'react';
import FileUpload from './FileUpload';
import sheetmusic from './assets/sheetmusic.png'; // Import the image

function AlbumChallenge() {
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
                <FileUpload />
                <div className="mt-6">
                    <button className="bg-[#F1F1E7] hover:bg-[#F1EDD2] text-black-resonate font-semibold py-2 px-4 rounded">
                        Upload
                    </button>
                </div>
            </div>
        </div>
        
    );

}

export default AlbumChallenge;
