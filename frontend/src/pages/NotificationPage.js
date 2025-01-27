import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NotificationCard from '../components/NotificationCard';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // 알림 API 호출 (대체할 URL로 변경)
        axios.get('http://localhost:8000/api/notifications/')
            .then(response => setNotifications(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">알림</h1>
                    
                    {/* 알림 리스트 */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => (
                                <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <NotificationCard notification={notification} />
                                </div>
                            ))
                        ) : (
                            <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow-md">
                                <p className="text-lg font-semibold">현재 알림이 없습니다.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotificationPage;
