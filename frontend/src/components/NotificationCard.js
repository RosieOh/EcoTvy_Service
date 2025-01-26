import React from 'react';

const NotificationCard = ({ notification }) => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">{notification.title}</p>
                <p>{notification.message}</p>
            </div>
        </div>
    );
};

export default NotificationCard;
