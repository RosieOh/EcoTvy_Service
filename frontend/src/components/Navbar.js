import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // 스크롤 이벤트 핸들러
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true); // 스크롤 내리면 true
            } else {
                setScrolled(false); // 다시 위로 올리면 false
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 정리
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white text-2xl font-bold">
                        <Link to="/">Waste Management</Link>
                    </div>

                    {/* Navbar Items */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium transition duration-200 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            to="/ocr"
                            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium transition duration-200 ease-in-out"
                        >
                            OCR
                        </Link>
                        <Link
                            to="/notifications"
                            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg font-medium transition duration-200 ease-in-out"
                        >
                            Notifications
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-400 focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
