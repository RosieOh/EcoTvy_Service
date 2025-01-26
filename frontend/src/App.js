import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotificationPage from './pages/NotificationPage';
import OCRPage from './pages/OCRPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ocr" element={<OCRPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
            </Routes>
        </Router>
    );
};

export default App;
