import React from 'react';

const Modal = ({ isActive, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isActive ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    <h1 className="text-2xl font-semibold mb-4">모달 창</h1>
                    <p className="mb-4">이곳에 모달 내용을 작성합니다.</p>
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
                        onClick={onClose}
                    >
                        닫기
                    </button>
                </div>
            </div>
            <button 
                className="absolute top-4 right-4 text-white text-3xl" 
                aria-label="close" 
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};

export default Modal;
