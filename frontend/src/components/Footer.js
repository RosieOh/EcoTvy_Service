import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
            <div className="container mx-auto text-center px-6">
                <div className="mb-6">
                    <strong className="text-2xl font-bold">Waste Management</strong>
                </div>
                
                <p className="text-lg opacity-70 mb-6">
                    환경 보호를 위한 스마트 솔루션
                </p>

                {/* Footer Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
                    <a href="/ocr" className="hover:text-gray-400 transition duration-300">OCR</a>
                    <a href="/notifications" className="hover:text-gray-400 transition duration-300">Notifications</a>
                </div>

                {/* Footer bottom */}
                <div className="text-sm opacity-60">
                    <p>© {new Date().getFullYear()} Waste Management. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
