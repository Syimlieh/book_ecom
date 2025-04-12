import React from 'react';
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="flex justify-between items-center flex-col px-[10vw] py-[5vh] text-white bg-center bg-no-repeat bg-cover relative min-h-[calc(100vh-7rem)]" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="w-7/10 text-left md:text-center z-10 mt-12 md:mt-28 font-secondary">
                <h1 className="font-extrabold text-3xl md:text-6xl drop-shadow-lg">
                    🛒 Discover Your Next Favorite Read
                </h1>
                <p className="opacity-90 mt-4 text-md md:text-lg max-w-lg mx-auto drop-shadow-md font-semibold">
                    Explore a curated collection of books across genres. Find bestsellers, hidden gems, and everything in between — all in one place.
                </p>
                <a href="#products">
                    <button className="mt-6 px-6 py-3 bg-[#591f27] hover:bg-[#a03e50] transition-all duration-300 text-white font-semibold rounded-lg shadow-lg cursor-pointer">
                        Shop Now
                    </button>
                </a>
            </div>
            {/* Bouncing Arrow */}
            <a href="#products">
                <div
                    className="z-10 button-12 md:bottom-24 cursor-pointer animate-bounce" >
                    <FaArrowDown className='text-4xl text-white' />
                </div>
            </a>
        </div >
    )
}

export default HeroSection