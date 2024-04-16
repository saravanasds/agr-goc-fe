import LightGallery from "lightgallery/react/Lightgallery.es5";
import React, { useState } from "react";
import "./gallery.css";
import Header from "./Header";
import Navbar from "../Components/Navbar";
import Footer from "./Footer"

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
  { src: "/assets/gallery/boat1.jpg", alt: "1", tag: "travel" },
  { src: "/assets/gallery/boat2.jpg", alt: "2", tag: "travel" },
  { src: "/assets/gallery/gold1.jpg", alt: "3", tag: "invest" },
  { src: "/assets/gallery/gold2.jpg", alt: "4", tag: "invest" },
  { src: "/assets/gallery/jewell1.jpg", alt: "5", tag: "invest" },
  { src: "/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
];

export default function Gallery() {
  // const [searchItem, setSearchItem] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const filterImages = (tag) => {
    if (tag === "All") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) => image.tag === tag);
      setFilteredImages(filtered);
    }
  };

  return (
    <>
      <div className="h-full">
        <Header />
        <Navbar />
      </div>
      <div className='w-full relative'>
        <img src="public/assets/gallery/gallery.jpg" alt="" className='' />
        <div className="absolute bottom-0 left-0 w-full inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] p-4 text-blue-900 h-full flex justify-center items-center">
          <h1 className='text-[3rem] lg:text-[4rem] font-bold tracking-widest uppercase' style={{ textShadow: '2px 4px 0px rgba(255,255,255, 0.9)' }}>gallery</h1>
        </div>
      </div>
      <div className="gallery pt-10 bg-gradient-to-t from-green-600 to-blue-600">
      <h1 className="text-center text-4xl font-bold pb-10 text-green-400">Explore with our plans</h1>
        <div className="filter pb-8">
          <button className="all-btn" onClick={() => filterImages("All")}>
            All
          </button>
          <button className="travel-btn" onClick={() => filterImages("travel")}>Travel</button>
          <button className="invest-btn" onClick={() => filterImages("invest")}>Investment</button>
        </div>
        <div className="gallery-main">
          <LightGallery
            onInit={onInit}
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
      <div classNamew="w-full">
        <Footer />
      </div>
    </>
  );
}
