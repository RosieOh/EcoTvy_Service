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
            <div className="section">
                <div className="container">
                    <h1 className="title">알림</h1>
                    <div className="columns is-multiline">
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => (
                                <div key={index} className="column is-one-third">
                                    <NotificationCard notification={notification} />
                                </div>
                            ))
                        ) : (
                            <div className="notification is-warning">
                                <p>알림이 없습니다.</p>
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
