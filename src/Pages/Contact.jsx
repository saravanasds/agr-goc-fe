import React, { useState } from "react";
import Header from "./Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="h-full">
        <Header />
        <Navbar />
      </div>
      <div className='w-full relative'>
        <img src="public/assets/about/contactus.jpg" alt="" className='' />
        <div className="absolute bottom-0 left-0 w-full inset-0 bg-black bg-opacity-10 backdrop-blur-[2px] p-4 text-blue-800 h-full flex justify-center items-center">
          <h1 className='text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold tracking-widest uppercase ' style={{ textShadow: '2px 4px 0px rgba(255,255,255, 0.9)' }}>contact us</h1>
        </div>
      </div>
      <div className="w-full mr-auto py-5 flex flex-col justify-center items-center bg-gray-200 ">

        <div className="w-full sm:w-[80%] flex flex-col lg:flex-row justify-center items-center mt-[100px] mb-[100px] shadow-lg border-2 border-gray-300">
          <div className="w-full lg:w-4\10 flex items-center justify-center">
            <img src="/assets/about/contact2.png" alt="" className="w-full h-[600px] object-cover right-0 " />
          </div>

          <div className="w-full lg:w-6\10 flex items-center justify-center lg:px-5 p-5 ">
            <form onSubmit={handleSubmit} className=" w-full flex flex-col items-center justify-center">
              <div className="w-full mb-5  mt-5 ">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border-none outline-none p-3 rounded"
                />
              </div>
              <div className="w-full mb-5 mt-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border-none outline-none p-3 rounded"
                />
              </div>
              <div className="w-full mb-5 mt-5">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border-none outline-none p-3 rounded"
                />
              </div>
              <div className="w-full mb-5  mt-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-3 border-none outline-none rounded"
                ></textarea>
              </div>
              <div className="w-full">
                <button type="submit" className="bg-[#184A57] text-white font-semibold py-2 px-10 rounded-lg cursor-pointer outline-none border-none hover:bg-[#609ead]">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div classNamew="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
