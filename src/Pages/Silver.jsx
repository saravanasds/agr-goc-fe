import React from "react";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";
import PlanSlider from "../Components/PlanSlider";
import Header from "./Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer"

function Silver() {

  const images = [
    {
      url: "assets/slider/boat.jpg",
      caption: <div>Boat House Tourism in 5th Level</div>,
    },
    {
      url: "assets/slider/gold coin.jpg",
      caption: "8 Gram Gold Coin in 7th Level",
    },
    {
      url: "assets/slider/jewellery.jpg",
      caption: "80 Gram Gold Jewell in 10th Level",
    },
  ];

  return (
    <>

      <div className="h-full">
        <Header />
        <Navbar />
        <PlanSlider images={images} className="h-[500px]" />
      </div>

      <div className="w-full bg-[#3E4095] pt-10">

        <div className="text-[2.5rem] lg:text-[3rem] font-bold text-center text-white py-3 uppercase tracking-wider lg:mb-8">
          <h1 style={{ textShadow: '4px 4px 0px rgba(0,0,0, 0.7)' }}>Business</h1>
        </div>

        <div className="flex justify-center items-center mb-14">

          <div className="w-full md:w-[80%] p-5  flex flex-col xl:flex-row justify-center items-center">

            <div className="p-3 w-full xl:w-1/2">
              <h1 className="text-black font-bold text-[2rem] lg:text-[3rem] pb-8">How <span className="text-white">Investment Works</span> In Our Scheme</h1>
              <div className="step">
                <TbHexagonNumber1 className="w-14 h-14 sm:w-20 sm:h-20 z-10 bg-[#057d45] text-white rounded-full border-[3px] border-white p-2"/>
                <h2 className="text-[14px] sm:text-[1.5rem] font-semibold bg-gradient-to-r from-[#e0fff5] to-[#26D48C]">Create Account</h2>
              </div>
              <div className="step">
                <TbHexagonNumber2 className="w-14 h-14 sm:w-20 sm:h-20 z-10 bg-white text-[#3E4095] rounded-full border-[3px] border-black p-2" />
                <h2 className="text-[14px] sm:text-[1.5rem] font-semibold bg-gradient-to-r from-[#e0fff5] to-[#647ee4]">Choose Plan</h2>
              </div>
              <div className="step">
                <TbHexagonNumber3 className="w-14 h-14 sm:w-20 sm:h-20 z-10 bg-[#057d45] text-white rounded-full border-[3px] border-white p-2" />
                <h2 className="text-[14px] sm:text-[1.5rem] font-semibold bg-gradient-to-r from-[#e0fff5] to-[#26D48C]">Investment</h2>
              </div>
              <div className="step">
                <TbHexagonNumber4 className="w-14 h-14 sm:w-20 sm:h-20 z-10 bg-white text-[#3E4095] rounded-full border-[3px] border-black p-2" />
                <h2 className="text-[14px] sm:text-[1.5rem] font-semibold bg-gradient-to-r from-[#e0fff5] to-[#647ee4]">Get Profit</h2>
              </div>
            </div>


            <div className="w-full xl:w-1/2 flex justify-center items-center  bg-[#3E4095] mt-10">
              <img src="public/assets/scheme/chart.png" alt="" className="w-[650px]"/>
            </div>

          </div>
        </div>


        <div className="w-full m-0 flex flex-col lg:flex-row justify-around items-center p-5 py-10 bg-[#26D48C]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <img src="assets/scheme/s1.png" alt="" className="w-[500px] mb-10 border-[3px] border-[#3E4095] rounded-3xl shadow-md shadow-gray-700" />
            <img src="assets/scheme/s2.png" alt="" className="w-[500px] mb-10 border-[3px] border-[#3E4095] rounded-3xl shadow-md shadow-gray-700" />
            <img src="assets/scheme/s3.png" alt="" className="w-[500px] mb-10 border-[3px] border-[#3E4095] rounded-3xl shadow-md shadow-gray-700" />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src="assets/scheme/s4.png" alt="" className="w-[600px] border-[3px] border-[#3E4095] rounded-xl shadow-md shadow-gray-700" />
          </div>
        </div>
      </div>

      <div classNamew="w-full">
        <Footer />
      </div>

    </>
  );
}

export default Silver;
