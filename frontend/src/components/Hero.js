import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto text-center px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Waste Management System
                </h1>
                <h2 className="text-xl md:text-2xl font-medium opacity-80">
                    환경을 지키는 스마트 솔루션
                </h2>
            </div>
        </section>
    );
};

export default Hero;
