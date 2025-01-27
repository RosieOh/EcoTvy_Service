import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OCRPage = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white py-16">
                <div className="container mx-auto text-center px-6 md:px-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">OCR 결과</h1>
                    <p className="text-lg md:text-xl opacity-80 mb-8">
                        여기서 OCR 기능을 사용하여 이미지를 처리하고 텍스트를 추출할 수 있습니다.
                    </p>

                    {/* 추가적인 안내나 기능 설명을 여기에 삽입할 수 있습니다 */}
                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">이미지 업로드 및 처리</h2>
                        <p className="text-lg mb-6">
                            이미지를 업로드하고, 자동으로 텍스트를 인식하여 변환하는 기능을 제공합니다.
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                            이미지 업로드
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OCRPage;
