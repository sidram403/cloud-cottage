// src/Header.js
import React, { useState } from "react";
import Logo from "../assets/logo.svg"; // Make sure to replace with your actual logo path
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHoveredCottage, setIsHoveredCottage] = useState(false);
    const [isHoveredGuest, setIsHoveredGuest] = useState(false);
  
    return (
      <header className={`  w-full flex justify-between items-center py-4 px-12 md:px-8 header-bg absolute top-0 left-0 right-0 z-50`}>
        <div>
          <img src={Logo} alt="Logo" className="h-30 w-20" />
        </div>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <MdClose fontSize={"50px"} color="white" />
          ) : (
            <MdOutlineMenu fontSize={"50px"} color="white" />
          )}
        </div>
        <nav
          className={`${
            isMenuOpen ? 'flex header-bg md:bg-transparent' : 'hidden'
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 text-white absolute md:static top-28 left-0  right-0 md:top-auto md:left-auto md:right-auto  md:bg-none p-4 md:p-0 z-10 md:z-auto`}
        >
          <Link to={'/'}>
          <a href="" className="hover:text-[#008080] text-[24px]">
            Home
          </a>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsHoveredCottage(true)}
            onMouseLeave={() => setIsHoveredCottage(false)}
          >
            <p className="hover:text-[#008080] text-[24px]">
              Cottages
            </p>
            {isHoveredCottage && (
              <div className="absolute top-6 mt-2 w-48 bg-[#008080] rounded-md shadow-lg flex flex-col text-left z-20">
                <a href="/cottage1" className="px-4 py-2 hover:bg-gray-700">
                  Cottage 1
                </a>
                <a href="/cottage2" className="px-4 py-2 hover:bg-gray-700">
                  Cottage 2
                </a>
                <a href="/cottage3" className="px-4 py-2 hover:bg-gray-700">
                  Cottage 3
                </a>
                <a href="/cottage4" className="px-4 py-2 hover:bg-gray-700">
                  Cottage 4
                </a>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsHoveredGuest(true)}
            onMouseLeave={() => setIsHoveredGuest(false)}
          >
            <p className="hover:text-[#008080] text-[24px]">
              Guest
            </p>
            {isHoveredGuest && (
              <div className="absolute top-6 mt-2 w-48 bg-[#008080] rounded-md shadow-lg flex flex-col text-left z-20">
                <a href="/thingstodo" className="px-4 py-2 hover:bg-gray-700">
                  Things To Do
                </a>
                <a href="/faq" className="px-4 py-2 hover:bg-gray-700">
                  FAQs
                </a>
                
              </div>
            )}
          </div>
          <a
            href="/contact"
            className="py-2 px-10 border text-[24px] border-white rounded-full"
          >
            Contact Us
          </a>
        </nav>
      </header>
    );
};

export default Header;
