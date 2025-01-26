import React from 'react';

const Modal = ({ isActive, onClose }) => {
    return (
        <div className={`modal ${isActive ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title">모달 창</h1>
                    <p>이곳에 모달 내용을 작성합니다.</p>
                    <button className="button is-primary" onClick={onClose}>닫기</button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
        </div>
    );
};

export default Modal;
