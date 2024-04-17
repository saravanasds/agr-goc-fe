import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Footer from './Footer'
import Header from './Header'
import "./scheme.css"

import LightGallery from "lightgallery/react/Lightgallery.es5";
import { useState } from "react";
import "./gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";


const images = [
  { src: "assets/gallery/boat1.jpg", alt: "1", tag: "travel" },
  { src: "assets/gallery/boat2.jpg", alt: "2", tag: "travel" },
  { src: "assets/gallery/gold1.jpg", alt: "3", tag: "invest" },
  { src: "assets/gallery/gold2.jpg", alt: "4", tag: "invest" },
  { src: "assets/gallery/jewell1.jpg", alt: "5", tag: "invest" },
  { src: "assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
];

function Home() {

  const [filteredImages, setFilteredImages] = useState(images);

 

  const filterImages = (tag) => {
    if (tag === "All") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) => image.tag === tag);
      setFilteredImages(filtered);
    }
  };

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
      <Header />
      <Navbar />
      <Hero />
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
              AGR Group of Companies, founded by Ln. Adalur G. Ramamoorthy, aims to uplift the community by fulfilling the dreams and goals of its members while emphasizing the importance of humanity in building a good community. The company's mission to eradicate poverty aligns with its vision of creating opportunities for individuals to improve their financial status.
              </p>
              <button className="about-btn px-10 py-2 bg-green-500 text-white font-medium rounded hover:bg-[#1e9765]">Know more</button>
            </div>
          </div>
        </div>

      </div>
      {/* <Business/> */}

      <HowItWorks />
      {/* <Gallery /> */}
      <div className="gallery pt-10 bg-[#3E4095]">
        <h1 className="text-center text-5xl font-bold pb-10">Gallery</h1>
        <div className="filter pb-8">
          <button className="all-btn" onClick={() => filterImages("All")}>
            All
          </button>
          <button className="travel-btn" onClick={() => filterImages("travel")}>Travel</button>
          <button className="invest-btn" onClick={() => filterImages("invest")}>Investment</button>
        </div>
        <div className="gallery-main">
          <LightGallery
        
            speed={600}
            plugins={[lgThumbnail, lgZoom, lgAutoplay, lgRotate, lgThumbnail]}
          >
            {filteredImages.map((images, index) => {
              return (
                <a className="imgid" href={images.src} key={index}>
                  <img alt={images.alt} src={images.src} />
                </a>
              );
            })}
          </LightGallery>
        </div>
      </div>


      <FAQ />
      {/* <Contact /> */}
      <div className="w-full mr-auto py-5 flex flex-col justify-center items-center bg-gray-200">
      <h2 className="text-center py-3 text-[2.5rem] font-bold uppercase tracking-wider " style={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)'}}>Contact Us</h2>

      <div className="w-full md:w-[80%] flex flex-col lg:flex-row justify-center items-center mt-[50px] mb-[100px] shadow-lg border-2 border-gray-300">
        <div className="w-full lg:w-4\10 flex items-center justify-center">
          <img src="assets/about/contact2.png" alt="" className="w-full h-[600px] object-cover right-0 "/>
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
      <Footer />
    </>
  )
}

export default Home