import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[630px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] lg:tracking-[20px] font-normal uppercase">
            CONTACT US
          </h1>
        </div>
      </div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
              Cloud Nine Cottages in Paradise
            </h1>
            <p className=" lg:w-[53.6%] mx-auto leading-relaxed text-base">
              6720 N. M-123, Paradise, MI 49768. Your Hosts are Jim and Eve Year
              Round Lakeside Cottagesonly 63 miles from the Mackinac Bridge in
              the Upper Peninsula of Michigan
            </p>
          </div>
          <div className="lg:w-[75%] mx-auto bg-[#018E92] md:p-[121px] p-[60px] rounded-2xl">
            <h2 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 text-white uppercase">Get in Touch With Us</h2>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full placeholder-white bg-[#018E92] rounded border border-gray-300 focus:border-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your Name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <IoMdContact className=" text-white" />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full placeholder-white bg-[#018E92] rounded border border-gray-300 focus:border-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your Name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <IoMdMail className=" text-white" />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full placeholder-white bg-[#018E92] rounded border border-gray-300 focus:border-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your Name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaPhoneAlt className=" text-white" />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <select
                    id="Cottages"
                    name="Cottages"
                    className="w-full placeholder-white  bg-[#018E92] rounded border border-gray-300 focus:border-white text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="Cottage1" className="text-white">Cottage 1</option>
                    <option value="Cottage2" className="text-white">Cottage 2</option>
                    <option value="Cottage3" className="text-white">Cottage 3</option>
                    <option value="Cottage4" className="text-white">Cottage 4</option>
                  </select>
                 
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="w-full placeholder-white bg-[#018E92] rounded border border-gray-300 focus:border-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Please let us know here the reason for your visit, the dates you’re interested in, and anything else you’d like us to know about your visit...."
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full flex justify-center">
                <button className="bg-[#F6BE2E] btn-family text-[18px] md:text-[24px] hover:bg-[#F6BE2e] text-white font-bold  py-2 px-6 md:px-8 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
