import React, { useState } from 'react';
import shakesphereImage from './assets/shakesphere.png';
import speakersImage from './assets/speakers.png';

const Carousel = () => {
  const images = [
    shakesphereImage,
    speakersImage,
    shakesphereImage,
  ];
// 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-full max-w-3xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-0 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
        <button
          className="carousel-control absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900"
          onClick={goToPreviousSlide}
        >
          Previous
        </button>
        <button
          className="carousel-control absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 hover:bg-gray-900"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
