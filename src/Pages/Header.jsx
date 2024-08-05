import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

function Header() {
  return (
    <div className="w-full flex justify-between items-center py-2 px-2 md:px-16 bg-[#3E4095] text-white">
      <div className="header-left flex">
        <div className="phone flex mr-4 md:mr-12 items-center">
          <span>
            <GiRotaryPhone className="w-6 h-6 mr-1 " style={{color:'greenyellow'}}/>
          </span>
          <h3 className="text-xs">8778445828</h3>
        </div>
        <div className="email flex items-center">
          <span>
            <IoIosMail className="w-6 h-6 mr-1 " style={{color:'greenyellow'}}/>
          </span>
          <h3 className="text-xs">agrpremium@gmail.com</h3>
        </div>
      </div>

      <div className="header-right hidden sm:flex ">
        <span>
          <FaFacebookSquare className="w-5 h-5 mr-1 sm:mr-5  text-[#3E4095] rounded" style={{color:'greenyellow'}}/>
        </span>
        <span>
          <FaInstagram className="w-5 h-5 mr-1 sm:mr-5  text-[#3E4095] rounded" style={{color:'greenyellow'}}/>
        </span>
        <span>
          <FaLinkedin className="w-5 h-5 mr-1 sm:mr-5  text-[#3E4095] rounded" style={{color:'greenyellow'}}/>
        </span>
      </div>
    </div>
  );
}

export default Header;
