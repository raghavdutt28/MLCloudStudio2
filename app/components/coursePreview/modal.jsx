// Modal.js
import React from 'react';

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='overlay'>
      <div className='modal-body'>
        {children}
        <button className='secondary_btn align-center justify-center' onClick={onRequestClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
