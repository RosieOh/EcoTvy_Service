import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main1Section from '../components/main/main1Section'; // 수정된 부분
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            
            {/* 홈 페이지 소개 섹션 */}
            <Main1Section /> {/* 수정된 부분 */}
            
            {/* 솔루션 소개 섹션 */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-6">우리의 솔루션</h2>
                    <p className="text-lg text-gray-700 mb-12">Waste Management System은 환경 보호와 효율적인 자원 관리를 돕는 스마트 솔루션입니다. 사용자가 손쉽게 정보를 관리하고 알림을 받을 수 있습니다.</p>
                    
                    {/* 솔루션 특징들 */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">OCR 기능</h3>
                            <p className="text-gray-700">문서 스캔과 자동 텍스트 인식을 통해 더 빠르고 정확한 처리가 가능합니다.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">알림 관리</h3>
                            <p className="text-gray-700">중요한 알림을 사용자에게 실시간으로 전달하여 놓치는 일이 없도록 도와줍니다.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">환경 모니터링</h3>
                            <p className="text-gray-700">실시간 데이터 분석을 통해 환경 상태를 모니터링하고, 개선 방안을 제시합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Home;
