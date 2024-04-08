import React from "react";
import ImageSlider from "./Carousel";
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { AiFillInteraction } from "react-icons/ai";
import { BsPersonFillUp } from "react-icons/bs";
import "./hero.css";

function Hero() {
  const images = [
    {
      url: "/assets/slider/agr slider1.jpg",
    },
    {
      url: "/assets/slider/agr slider2.jpg",
    },
    {
      url: "/assets/slider/agr slider3.jpg",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="slider">
          <ImageSlider images={images} />
        </div>
        {/* <section className="bg-[#3E4095]">
          <div className="container mx-auto">
            <div className="flex flex-wrap px-16">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-2 sm:px-4 text-center">
                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded">
                  <div className="px-1 py-4 flex-auto">
                    <div className="p-1 text-center inline-flex items-center justify-center mb-3 ">
                      <IoMdPersonAdd className="w-16 h-16 text-[#1e9765]" />
                    </div>
                    <h6 className="text-xl font-bold text-[#3E4095]">
                      Bonus Rs.500
                    </h6>
                    <p className="mt-1 mb-4 text-black">
                      Every Refer Per Person
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded">
                  <div className="px-1 py-4 flex-auto">
                    <div className="p-1 text-center inline-flex items-center justify-center mb-3">
                      <GiHomeGarage className="w-16 h-16 text-[#1e9765]" />
                    </div>
                    <h6 className="text-xl font-bold text-[#3E4095]">
                      Funds
                    </h6>
                    <p className="mt-1 mb-4 text-black">
                      Car Fund, Housing Fund Payment
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded">
                  <div className="px-1 py-4 flex-auto">
                    <div className="p-1 text-center inline-flex items-center justify-center mb-3">
                      <MdGroupAdd className="w-16 h-16 text-[#1e9765]" />
                    </div>
                    <h6 className="text-xl font-bold text-[#3E4095]">
                      Bonus Rs.10,000
                    </h6>
                    <p className="mt-1 mb-4 text-black ">Direct 27 Referal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className="hero-bottom w-full h-40 bg-[#d8d8d8] m-0">
          <div className="flex items-center">
            <span><GrShieldSecurity className="w-20 h-20 text-[#3E4095]"/></span>
            <p className="text-3xl font-semibold text-black">Safe <span className="text-[#3E4095]">And</span> Secure</p>
          </div>
          <div className="flex items-center">
            <span><AiFillInteraction className="w-20 h-20 text-[#3E4095]"/></span>
            <p className="text-3xl font-semibold text-black">Auto <span className="text-[#3E4095]">Filling</span> System</p>
          </div>
          <div className="flex items-center">
            <span><BsPersonFillUp className="w-20 h-20 text-[#3E4095]"/></span>
            <p className="text-3xl font-semibold text-black">Referral <span className="text-[#3E4095]">Earnings</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
