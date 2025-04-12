import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#591f27] shadow-sm py-6 mt-12">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="m-auto h-24">
                    <Link to="/" className="h-full">
                        <img
                            src="/images/logo_transparent.png"
                            className="w-auto h-full cursor-pointer"
                            alt="full stack assignment logo"
                        />
                    </Link>
                </div>
                <span className="block text-sm text-gray-100 text-center mt-2">© 2025 <Link to="/" className="hover:underline">BookNest™</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer