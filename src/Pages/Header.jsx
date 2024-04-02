import React from "react";
import "./header.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

function Header() {
  return (
    <div className="header">
      <div className="header-left flex">
        <div className="phone flex mr-12">
          <span>
            <GiRotaryPhone className="w-6 h-6 mr-1 text-[#26D48C]" />
          </span>
          <h3>+91 9845217252</h3>
        </div>
        <div className="email flex">
          <span>
            <IoIosMail className="w-6 h-6 mr-1 text-[#26D48C]" />
          </span>
          <h3>agr123@gmail.com</h3>
        </div>
      </div>

      <div className="header-right flex">
        <span>
          <FaFacebookSquare className="w-5 h-5 mr-5 bg-[#26D48C] text-[#3E4095] rounded" />
        </span>
        <span>
          <FaInstagram className="w-5 h-5 mr-5 bg-[#26D48C] text-[#3E4095] rounded" />
        </span>
        <span>
          <FaLinkedin className="w-5 h-5 mr-5 bg-[#26D48C] text-[#3E4095] rounded" />
        </span>
      </div>
    </div>
  );
}

export default Header;
