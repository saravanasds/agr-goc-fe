import React from "react";
import Header from "./Header"
import Navbar from '../Components/Navbar'
import Footer from "./Footer"

function About() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Navbar />
      </div>

      <div className='w-full relative'>
        <img src="assets/scheme/business1.jpg" alt="" className='' />
        <div className="absolute bottom-0 left-0 w-full inset-0 bg-black bg-opacity-10 backdrop-blur-[2px] p-4 text-green-700 h-full flex justify-center items-center">
          <h1 className='text-[3rem] lg:text-[4rem] font-bold tracking-widest uppercase ' style={{ textShadow: '2px 4px 0px rgba(255,255,255, 0.9)' }}>About us</h1>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row min-h-screen justify-center items-center py-20">

        <div className='w-full md:w-[80%] flex flex-col lg:flex-row min-h-screen justify-center items-center '>
          <div className='w-full lg:w-1/2 border-4 border-green-500'>
            <img src="assets/about/about.jpg" alt="" className="h-[600px] object-cover" />
          </div>
          <div className='w-full lg:w-1/2 border-2 py-10 px-8 bg-gray-200 shadow-lg'>
            <div className="about-des">
              <h1 className="text-5xl font-semibold text-[#3E4095] mb-2">About Us</h1>
              <div className="w-56 h-1 bg-[#1e9765]"></div>
              <p className="py-5">
              AGR Group of Companies, founded by Ln. Adalur G. Ramamoorthi, aims to uplift the community by fulfilling the dreams and goals of its members while emphasizing the importance of humanity in building a good community. The company's mission to eradicate poverty aligns with its vision of creating opportunities for individuals to improve their financial status.
              </p>
              <button className="about-btn px-10 py-2 bg-green-500 text-white font-medium rounded hover:bg-[#1e9765]">Know more</button>
            </div>
          </div>
        </div>

      </div>

      <div classNamew="w-full">
        <Footer />
      </div>

    </>
  );
}

export default About;
