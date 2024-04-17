import React from "react";
import ImageSlider from "./Carousel";
import { GrShieldSecurity } from "react-icons/gr";
import { AiFillInteraction } from "react-icons/ai";
import { BsPersonFillUp } from "react-icons/bs";


function Hero() {
  const images = [
    {
      url: "assets/slider/agr slider1.jpg",
    },
    {
      url: "assets/slider/agr slider2.jpg",
    },
    {
      url: "assets/slider/agr slider3.jpg",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="slider">
          <ImageSlider images={images} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center bg-gray-200 py-5">
          <div className="w-full md:w-1/3 flex items-center justify-center p-5 gap-3">
            <span><GrShieldSecurity className="w-14 h-14 md:w-20 md:h-20 text-[#3E4095]" /></span>
            <p className="text-xl lg:text-3xl font-semibold text-black">Safe <span className="text-[#3E4095]">And</span> Secure</p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center p-5 gap-3">
            <span><AiFillInteraction className="w-14 h-14 md:w-20 md:h-20 text-[#3E4095]" /></span>
            <p className="text-xl lg:text-3xl font-semibold text-black">Auto <span className="text-[#3E4095]">Filling</span> System</p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center p-5 gap-3">
            <span><BsPersonFillUp className="w-14 h-14 md:w-20 md:h-20 text-[#3E4095]" /></span>
            <p className="text-xl lg:text-3xl font-semibold text-black">Referral <span className="text-[#3E4095]">Earnings</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
