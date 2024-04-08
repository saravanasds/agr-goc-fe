// ImageSlider.js
import './carousel.css'
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";

import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className=" flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${
                index === currentImageIndex ? 'block' : 'hidden'
              }`}
            >
              <img
                src={image.url}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 p-3 rounded-full z-1"
        onClick={prevSlide}
      >
        <IoArrowBackSharp className='w-12 h-8'/>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-gray-400 p-3 rounded-full z-1"
        onClick={nextSlide}
      >
        <IoArrowForwardSharp className='w-12 h-8' />
      </button>
    </div>
  );
};

export default ImageSlider;
