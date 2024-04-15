import React from 'react'
import Header from "./Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer"


function Business() {
  return (
    <>
      <div className="h-full">
        <Header />
        <Navbar />
      </div>
      <div className='w-full relative'>
        <img src="public/assets/scheme/business2.jpg" alt="" className='' />
        <div className="absolute bottom-0 left-0 w-full inset-0 bg-black bg-opacity-5 backdrop-blur-[2px] p-4 text-green-700 h-full flex justify-center items-center">
          <h1 className='text-[3rem] lg:text-[4rem] font-bold tracking-widest uppercase' style={{ textShadow: '2px 4px 0px rgba(255,255,255, 0.9)' }}>Business</h1>
        </div>
      </div>
      <div className='flex justify-evenly gap-5 p-5 bg-blue-500'>
        <a href="/silver" className='text-2xl font-bold bg-blue-300 md:p-10 px-10 md:px-32 rounded-3xl hover:bg-red-200 transition duration-500 hover:shadow-2xl'>Silver</a>
        <a href="/gold" className='text-2xl font-bold bg-blue-300 md:p-10 px-10 md:px-32 rounded-3xl hover:bg-red-200 transition duration-500 hover:shadow-2xl'>Gold</a>
      </div>
      <div classNamew="w-full">
        <Footer />
      </div>
    </>
  )
}

export default Business