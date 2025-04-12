import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // or use any icon lib like Heroicons
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="md:hidden absolute h-full top-10 right-0">
            <button onClick={toggleMenu} className="text-white z-20 pr-8">
                {isOpen ? <p className='text-xl cursor-pointer'>X</p> : <RxHamburgerMenu className='cursor-pointer h-6 w-6' />}
            </button>

            {isOpen && (
                <div className="absolute top-18 right-0 bg-[#7d2c3b] hover:bg-[#7d2c3b] text-white w-48 rounded shadow-lg z-10 cursor-pointer">
                    <ul className="flex flex-col">
                        <span className='flex items-center justify-center gap-1 text-white text-center hover:text-red-200 border-b border-red-200'>
                            <FaHome className='cursor-pointer text-md' />
                            <li>
                                <Link
                                    to="/"
                                    onClick={toggleMenu}
                                    className="block w-full h-full leading-10"
                                >
                                    Home
                                </Link>
                            </li>
                        </span>
                        <span className='flex items-center justify-center gap-1 text-white text-center hover:text-red-200 border-b border-red-200'>
                            <FaShoppingCart className='cursor-pointer text-md' />
                            <li>
                                <Link
                                    to="/cart"
                                    onClick={toggleMenu}
                                    className="block w-full h-full leading-10"
                                >
                                    Cart
                                </Link>
                            </li>
                        </span>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;