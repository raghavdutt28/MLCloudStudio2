// PreviewButton.js
"use client"
import React, { useState } from 'react';
import Modal from './modal';
import VideoPlayer from './videoPlayer';

const PreviewButton = ( ) => {

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2D2" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path fill='#00D2D2' strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
  );

  const data ="Course Preview"

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className=''>
      <Modal isOpen={isVideoModalOpen} onRequestClose={closeVideoModal}>
        <VideoPlayer />
      </Modal>
    <button className='secondary_btn w-full' onClick={openVideoModal}>
      {data}
      {icon && icon}
    </button>
    </div>
  );
};

export default PreviewButton;