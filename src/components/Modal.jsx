// Modal.jsx
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.outsiteModal} onClick={handleOutsideClick}>
          <div className={styles.modal}>
            <h1>Modal title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="button primary">Something Cool</button>
            <button className={styles.closeModal} onClick={onClose}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
