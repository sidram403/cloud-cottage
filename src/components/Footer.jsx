import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";



const Footer = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="relative h-[400px] bg-cover bg-center  text-white" style={{ backgroundImage: `url('./bg-footer.png')` }}>
        <div className="bg-overlay-footer"></div>

        <div className="relative z-10 flex flex-col text-center gap-8 md:flex-row md:justify-between md:items-center  w-full h-full px-20 text-white">
          <div className="flex flex-col text-center w-[350px]">
            <h1 className="header-family text- text-[35px] mb-4 uppercase text-left">
              Make Your Stay Count With Us
            </h1>
            <div className="flex items-center gap-2 mb-4 para-family">
                <CiLocationOn fontSize={"30px"} />
                <p>6720 M-123 Paradise, MI 49768</p>

            </div>
            <div className="flex items-center gap-2 para-family">
                <MdOutlineEmail fontSize={"30px"} />
                <p>Cloudninebooking7@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-4 md:gap-2 md:flex-nowrap md:flex-col md:text-right para-family">
            <p className="cursor-pointer"><a href="/">Home</a></p>
            <p className="cursor-pointer"><a href="#services">Cottages</a></p>
            <p className="cursor-pointer"><a href="/termsandcondition">Terms & Conditions</a></p>
            <p className="cursor-pointer"><a href="/privacy">Privacy Policy</a></p>
            <p className="cursor-pointer"><a href="/contact">Contact Us</a></p>
            <p className="cursor-pointer"><a href="/faq">FAQs</a></p>

          </div>
        </div>
        <div className="bg-[#018E92] text-white text-center py-4">
            <p>Copyright@ 2024. All Rights Reserved | Cloud Nine Cottages</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
