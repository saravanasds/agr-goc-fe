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
        <img src="assets/scheme/business2.jpg" alt="" className='' />
        <div className="absolute bottom-0 left-0 w-full inset-0 bg-black bg-opacity-5 backdrop-blur-[2px] p-4 text-green-700 h-full flex justify-center items-center">
          <h1 className='text-[3rem] lg:text-[4rem] font-bold tracking-widest uppercase' style={{ textShadow: '2px 4px 0px rgba(255,255,255, 0.9)' }}>Business</h1>
        </div>
      </div>
      <div className='flex justify-evenly gap-5 p-5 bg-gradient-to-t from-green-300 to-blue-400'>
        <div className='w-full md:w-[80%] flex flex-col sm:flex-row justify-evenly gap-5 p-5'>

          <div className='w-full sm:w-1/2 h-[400px] flex  justify-center items-center '>
            <div className='border-[4px] border-white w-[300px] flex justify-center items-center rounded bg-black shadow-lg shadow-gray-700'>
              <a href="/silver" className=' p-2'>
                <img src="assets/scheme/tropy.jpg" alt="" className='w-[300px] h-[280px] rounded border-[2px] border-white object-cover'/>
                <h1 className='py-3 bg-[#d5d5d5] hover:bg-blue-900 hover:text-white text-center transition duration-500 hover:shadow-sm mt-2 border-[1px] border-blue-500 rounded text-blue-900 font-semibold text-xl'>Premium Plan</h1>
              </a>
            </div>
          </div >

          <div className='w-full sm:w-1/2 h-[400px] flex justify-center items-center'>
            <div className='border-[4px] border-white w-[300px] flex justify-center items-center rounded bg-black shadow-lg shadow-gray-700'>
              <a href="/free" className=' p-2'>
                <img src="assets/scheme/goldplan.jpg" alt="" className='w-[300px] h-[280px] rounded border-[2px] border-white object-cover' />
                <h1 className='py-3 bg-[#dbc650] hover:bg-red-700 text-center transition duration-500 hover:shadow-sm mt-2 border-[1px]  rounded text-white font-semibold text-xl'>Free Plan</h1>
              </a>
            </div>
          </div >
        </div>
      </div>
      <div classNamew="w-full">
        <Footer />
      </div>
    </>
  )
}

export default Business