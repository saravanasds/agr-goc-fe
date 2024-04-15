import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full bg-blue-900 flex justify-center items-center py-8">
      <div className="w-full lg:w-[80%] flex flex-col sm:flex-row justify-center items-start">
        <div className="w-full sm:w-1/3 mr-3 text-white px-8 mb-8 text-center sm:text-left">
          <h3 className="mb-3">Privacy Policy</h3>
          <h3 className="mb-3">Terms and Conditions</h3>
          <h3 className="mb-3">FAQ's</h3>
          <h3 className="mb-3">Contact Us</h3>
        </div>
        <div className="w-full sm:w-1/3 mr-3 text-white px-8 mb-8  text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <span>
              <GiRotaryPhone className="w-6 h-6 mr-2" style={{color:'greenyellow'}}/>
            </span>
            <h3 className="mb-3 text-center">9845217252</h3>
          </div>
          <div className="flex justify-center sm:justify-start">
            <span>
              <IoIosMail className="w-6 h-6 mr-2" style={{color:'greenyellow'}}/>
            </span>
            <h3 className="mb-3">agr123@gmail.com</h3>
          </div>
          <div className="flex justify-center sm:justify-start">
            <span>
              <FaLocationDot className="w-6 h-6 mr-2 ml-8 sm:ml-0" style={{color:'greenyellow'}}/>
            </span>
            <h3 className="mb-3 text-left">
              Door No. 1/142, P.H.Road, Sivapootham, Vanagaram, 600095, Chennai-
              India.
            </h3>
          </div>
        </div>

        <div className="w-full sm:w-1/3 mr-3 text-white px-8 mb-8 flex flex-col justify-center text-center sm:text-left">
          <h2 className="mb-3 text-2xl">Subscribe</h2>
          <h3 className="mb-3">
            Subscribe to our plateform for useful tips and valuable resources.
          </h3>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <span>
              <FaFacebookSquare className="w-6 h-6" style={{color:'greenyellow'}}/>
            </span>
            <span>
              <FaInstagram className="w-6 h-6" style={{color:'greenyellow'}}/>
            </span>
            <span>
              <FaLinkedin className="w-6 h-6" style={{color:'greenyellow'}}/>
            </span>
            <span>
              <FaYoutube className="w-6 h-6" style={{color:'greenyellow'}}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
