import React from "react";
import "./footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-content footer-left">
          <h3>Privacy Policy</h3>
          <h3>Terms and Conditions</h3>
          <h3>FAQ's</h3>
          <h3>Contact Us</h3>
        </div>
        <div className="footer-content footer-center">
          <div className="phone">
            <span>
              <GiRotaryPhone className="w-6 h-6 mr-2" />
            </span>
            <h3>+91 9845217252</h3>
          </div>
          <div className="email">
            <span>
              <IoIosMail className="w-6 h-6 mr-2" />
            </span>
            <h3>agr123@gmail.com</h3>
          </div>
          <div className="location">
            <span>
              <FaLocationDot className="w-6 h-6 mr-2" />
            </span>
            <h3>
              Door No. 1/142, P.H.Road, Sivapootham, Vanagaram, 600095, Chennai-
              India.
            </h3>
          </div>
        </div>

        <div className="footer-content footer-right">
          <h2>Subscribe</h2>
          <h3>
            Subscribe to our plateform for useful tips and valuable resources.
          </h3>
          <div className="social-icons">
            <span>
              <FaFacebookSquare className="w-6 h-6" />
            </span>
            <span>
              <FaInstagram className="w-6 h-6" />
            </span>
            <span>
              <FaLinkedin className="w-6 h-6" />
            </span>
            <span>
              <FaYoutube className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
