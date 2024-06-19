// src/components/ContentWithMap.js

import React from 'react';
import GoogleMapImg from '../assets/google-map.png'

const ContentWithMap = () => {
    

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-contain bg-center " style={{ backgroundImage: `url('./map-img.png')` }}>
      <div className="absolute top-0 left-0 w-full text-center p-4 bg-opacity-50 text-white">
        <h1 className="header-family text-black text-[25px] lg:text-[40px] uppercase text-center">Locate Us</h1>
      </div>
      <div className="flex flex-col text-center items-center justify-center  h-full space-y-8 w-full">
        <img src={GoogleMapImg} alt="Your Image" className="md:w-[400px] lg:w-[600px] h-auto" />
        
      </div>
    </div>
  );
};

export default ContentWithMap;
