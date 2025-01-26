import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="section">
                <div className="container">
                    <h1 className="title">홈 페이지</h1>
                    <p>여기서 OCR, 알림 관리 등을 사용할 수 있습니다.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
