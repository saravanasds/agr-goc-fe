import React from "react";
import PlanSlider from "../Components/PlanSlider";
import Header from "./Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer"
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";


function Premium() {

    const images = [
        {
            url: "/agr-4.jpg",
        },
        {
            url: "/agr-5.jpg",
        },
        {
            url: "/agr-6.jpg",
        },

    ];

    return (
        <>

            <div className="h-full">
                <Header />
                <Navbar />
                <PlanSlider images={images} className="h-[500px]" />
            </div>

            <div className="w-full bg-blue-800 pt-10 py-5">

                <div className="text-[2.5rem] lg:text-[3rem] font-bold text-center text-green-400 py-3 uppercase tracking-wider lg:mb-10 px-8 sm:px-0">
                    <h1 className="mb-3 text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0, 0.7)' }}>Online <span className="bg-red-500 text-white border-2 border-white px-3 rounded-lg">Store</span></h1>
                    <p className="text-[1rem] text-white px-10">Experience Our Service at No Cost—Switch Plans Anytime!</p>
                </div>

                <div className="flex justify-center items-center mb-14">

                    <div className="w-full md:w-[80%] p-5  flex flex-col xl:flex-row justify-center items-center xl:gap-20 px-8 md:px-0">

                        <div className="p-3 w-full xl:w-1/2 text-center px-10 flex flex-col justify-center items-center">
                            <h1 className="text-white font-bold text-[2rem] lg:text-[2.3rem] pb-8 ">Shop from the Comfort of <span className="text-lime-300">Your Home..</span></h1>
                            <h1 className="text-white flex gap-4  lg:text-xl pb-8 tracking-wider"> Easily Reorder Your Favorite Products with a Click!</h1>
                            <h1 className="text-white flex gap-4   lg:text-xl pb-8  tracking-wider"> Discover a Wide Range of Products in One Place!</h1>
                            <h1 className="text-white flex gap-4   lg:text-xl pb-8  tracking-wider">See What We Offer—Try the Free Plan Now!</h1>
                            <button className="bg-lime-300 text-gray-600 px-20 lg:px-[150px] py-3 rounded-lg text-xl lg:text-2xl font-bold tracking-wider hover:bg-lime-400 shadow shadow-white border-2 border-white" ><Link to="/free">Register</Link></button>
                        </div>


                        <div className="w-full xl:w-1/2 flex justify-center items-center  mt-10">
                            <img src="/onlinestore.png" alt="" className="w-[600px]" />
                        </div>

                    </div>
                </div>


                <div className="w-full min-h-[500px] m-0 flex flex-col justify-around items-center p-5 py-20  bg-[#26D48C] gap-10">

                    <h2 className="text-[2rem] md:text-[3rem]  text-white font-semibold mb-5 rounde-lg tracking-wider" style={{ textShadow: '4px 4px 0px rgba(0,0,0, 0.7)' }}>Why <span className="bg-red-500 text-white border-2 border-white px-3 rounded-lg">Shop</span> With Us?</h2>

                    <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center py-10 gap-8">
                        <div className="w-[90%] lg:w-[350px] h-[300px] flex flex-col justify-center items-center px-5 text-center bg-gray-700 gap-5 text-white shadow-md shadow-white">
                            <TbTruckDelivery className="text-[6rem]  text-blue-500 " />
                            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">Fast Delivery</h2>
                            <p className="tracking-wider">Fast and Easy Checkout Process!</p>
                        </div>
                        <div className="w-[90%] lg:w-[350px] h-[300px] flex flex-col justify-center items-center px-5 text-center bg-gray-700  gap-5  text-white shadow-md shadow-white">
                            <AiFillSafetyCertificate className="text-[6rem] text-yellow-500" />
                            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">Income benefits</h2>
                            <p className="tracking-wider">100% Satisfaction Guaranteed</p>
                        </div>
                        <div className="w-[90%] lg:w-[350px] h-[300px] flex flex-col justify-center items-center px-5 text-center bg-gray-700  gap-5  text-white shadow-md shadow-white">
                            <GiReceiveMoney className="text-[6rem] text-lime-500" />
                            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">Best Quality</h2>
                            <p className="tracking-wider"> Best Quality at the Best Price</p>
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

export default Premium;
