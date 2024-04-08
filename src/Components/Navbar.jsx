import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav bg-white z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 ">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 text-white">
              <img
                src="/assets/logos/agr logo.png"
                alt=""
                className="agr-logo"
              />
            </div>
            <div className="hidden lg:block">
              <div className=" nav-link ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-black hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-black hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/business"
                  className="text-black hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Business
                </a>
                <a
                  href="/gallery"
                  className="text-black hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  className="text-black hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="btn hidden lg:block">
              <a href="https://agr-goc-fed.vercel.app" className="btn sign-in">
                Sign In
              </a>
              <a href="https://agr-goc-fed.vercel.app" className="btn sign-up">
                Sign Up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095]s hover:bg-white focus:outline-none focus:bg-white focus:text-[#3E4095]"
            >
              {/* Icon when the menu is closed */}
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                // Icon when the menu is open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className based on menu state. */}
      {isOpen && (
        <div className="lg:hidden bg-[rgba(0,0,0,0.2)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a
              href="/"
              className="text-black hover:bg-[#3E4095] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black hover:bg-[#3E4095] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/scheme"
              className="text-black hover:bg-[#3E4095] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Scheme
            </a>
            <a
              href="/gallery"
              className="text-black hover:bg-[#3E4095] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-black hover:bg-[#3E4095] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
          <div className=" btn lg:hidden pb-6">
            <a href="https://agr-goc-fed.vercel.app" className="btn sign-in">
              Sign In
            </a>
            <a href="https://agr-goc-fed.vercel.app" className="btn sign-up">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
