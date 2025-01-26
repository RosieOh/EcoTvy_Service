import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OCRPage = () => {
    return (
        <div>
            <Navbar />
            <div className="section">
                <div className="container">
                    <h1 className="title">OCR 결과</h1>
                    <p>여기서 OCR 기능을 사용하여 이미지를 처리할 수 있습니다.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OCRPage;
