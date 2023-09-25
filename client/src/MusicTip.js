import React from 'react';

const MusicTipPopup = ({ tip, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-opacity-50 bg-black absolute inset-0"></div>
      <div className="bg-white p-6 rounded-lg shadow-md z-10">
        <button
          className="text-gray-600 ml-[-1%] hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block align-text-top mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p>Music Tip of the Day: {tip}</p>
      </div>
    </div>
  );
};

export default MusicTipPopup;
