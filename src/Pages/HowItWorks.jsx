import React from "react";


function HowItWorks() {
  return (
    <div className="w-full min-h-screen pb-20">
      <div className="text-[2.5rem] text-center py-10 uppercase font-semibold text-blue-900 tracking-wider">
        <h1>How It Works</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 h-[550px] flex flex-col justify-center items-center px-10 bg-gradient-to-t from-white to-blue-500">
            <h1 className="text-[1.3rem] sm:[1.8rem] lg:text-[2.5rem] text-center font-semibold text-white" style={{textShadow: '2px 2px 2px rgba(0,0,0,0.7)'}}>3x Matrix Plan</h1>
            <img src="assets/scheme/plan1.png" alt="" />
            <p className="p-2">
              MLM Matrix Plan is also known as ladder Plan or Forced Matrix Plan
              in Multi-level marketing companies which is like to pyramid.
              Members are organized in a particular width and depth that
              compensated when they have achieved a set level.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[550px]">
            <img src="assets/scheme/mlm.jpg" alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
        </div>
        <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 h-[550px] hidden md:block">
            <img src="assets/scheme/plan3.jpg" alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <div className="w-full md:w-1/2 h-[550px] flex flex-col justify-center items-center px-10 bg-gradient-to-t from-blue-500 to-white">
            <h1 className="text-[1.3rem] sm:[1.8rem] lg:text-[2.5rem] text-center font-semibold text-blue-700" style={{textShadow: '2px 2px 2px rgba(255,255,255,0.7)'}}>Referral Bonus</h1>
            <img src="assets/scheme/plan1.png" alt="" />
            <p className="p-2">
              MLM Matrix Plan is also known as ladder Plan or Forced Matrix Plan
              in Multi-level marketing companies which is like to pyramid.
              Members are organized in a particular width and depth that
              compensated when they have achieved a set level.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
