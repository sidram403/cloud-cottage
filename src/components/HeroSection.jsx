// src/HeroSection.js
import React from 'react';
import { useState, useEffect } from 'react';

const images = [
    './hero_01.png',
    './hero_02.png',
    './hero_03.png',
    './hero_04.png',
    './hero_05.png',
    './hero_06.png',

    // Add more image URLs as needed
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className="w-full h-screen bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="w-full h-full flex flex-col justify-end items-center bg-black bg-opacity-50 pb-20">
                <h1 className="text-white hero-family text-center text-[45px] tracking-[10px] lg:text-[70px] lg:tracking-[20px] font-normal uppercase">CLOUD NINE COTTAGES</h1>
                <p className='hero-family text-white text-[30px] md:text-[40px]'>Paradise Michigan</p>
            </div>
        </div>
    );
}

export default HeroSection;
