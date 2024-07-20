// ImageSlider.js
import './carousel.css'
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";

import React, { useState, useEffect } from 'react';

const PlanSlider = ({ images }) => {
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
              className={`w-full flex-shrink-0  ${
                index === currentImageIndex ? 'block' : 'hidden'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white h-full flex justify-center items-center flex-col gap-2 sm:gap-8">
                <h1 className='text-[1rem] sm:text-[1.4rem] md:text-[2rem] lg:text-[3rem] font-bold' style={{textShadow:'2px 6px 0px rgba(0, 0, 0, 0.5)'}}>{image.caption}</h1>
                <a href="https://agrpremiumplan.in" className="border-2 border-white hover:bg-blue-600 py-1 md:py-3 w-[200px] md:w-[300px] rounded-xl bg-blue-800 text-white font-semibold flex justify-center items-center text-xs sm:text-xl">Register Now <IoArrowForwardSharp className='w-8 h-4 md:w-12 md:h-6'/> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 text-gray-400 p-1 rounded-full z-1"
        onClick={prevSlide}
      >
        <IoArrowBackSharp className='w-8 h-6 md:w-12 md:h-8'/>
      </button>
      <button
        className="absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2  text-gray-400 p-1 rounded-full z-1"
        onClick={nextSlide}
      >
        <IoArrowForwardSharp className='w-8 h-6 md:w-12 md:h-8' />
      </button>
    </div>
  );
};

export default PlanSlider;
