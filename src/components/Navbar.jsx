import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    return (
        <nav className="flex items-center md:justify-between justify-center h-28 bg-gradient-to-r from-[#591f27] to-[#7d2c3b] shadow-lg md:px-20 px-8 m-auto relative">
            <Link to="/" className="h-full">
                <img
                    src="/images/logo_transparent.png"
                    className="w-auto h-full cursor-pointer"
                    alt="full stack assignment logo"
                />
            </Link>
            <ul className=" items-center justify-between gap-4 hidden md:flex">
                <span className='flex items-center text-gray-100 hover:text-red-200'>
                    <FaHome className='cursor-pointer text-xl ' />
                    <li className="p-2 font-semibold text-xl"><Link to="/">Home</Link></li>
                </span>
                <span className='flex items-center text-gray-100 hover:text-red-200'>
                    <FaShoppingCart className='cursor-pointer text-xl ' />
                    <li className="p-2 font-semibold text-xl"><Link to="/cart">Cart</Link></li>
                </span>


            </ul>
            <HamburgerMenu />
        </nav>
    )
}

export default Navbar