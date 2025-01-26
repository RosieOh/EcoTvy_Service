import React from 'react';
import { Link } from 'react-router-dom'; // React Router 사용 (페이지 이동)

const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top is-primary">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    Waste Management
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/ocr" className="navbar-item">OCR</Link>
                    <Link to="/notifications" className="navbar-item">Notifications</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
