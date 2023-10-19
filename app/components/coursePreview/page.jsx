// PreviewButton.js
"use client"
import React, { useState } from 'react';
import Modal from './modal';
import VideoPlayer from './videoPlayer';

const PreviewButton = ({ data, icon }) => {

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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