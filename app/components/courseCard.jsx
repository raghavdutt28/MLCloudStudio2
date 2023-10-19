// CourseCard.js
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PreviewButton from './coursePreview/page';
import Modal from './coursePreview/modal';
import VideoPlayer from './coursePreview/videoPlayer';

const initializeRazorpayButton = (buttonId) => {
  if (!buttonId) {
    console.error("Razorpay script cannot be initialized without a valid 'id'.");
    return () => { };
  }

  const existingScript = document.querySelector(`script[data-payment_button_id="${buttonId}"]`);
  if (existingScript) {
    return () => { };
  }

  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  scriptElement.async = true;
  scriptElement.dataset.payment_button_id = buttonId;

  const paymentForm = document.getElementById(`paymentForm-${buttonId}`);
  if (paymentForm) {
    paymentForm.appendChild(scriptElement);
  }

  return () => {
    if (scriptElement.parentNode === document.body) {
      document.body.removeChild(scriptElement);
    }
  };
};

const CourseCard = ({ buttonId, image, courseDifficulty, courseDuration, courseTitle, tutorName, tutorCredentials, price, courseDesc }) => {
  
  
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    const cleanup = buttonId ? initializeRazorpayButton(buttonId) : () => { };
    return () => {
      cleanup();
    };
  }, [buttonId]);

  const breakTextIntoLines = (courseTitle, wordsPerLine) => {
    const words = courseTitle.split(' ');
    const lines = [];

    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }

    return lines.join('<br>');
  };

  const playIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2D2" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path fill='#00D2D2' strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
  );

  const downloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );

  return (
    <div className='course_card'>
      <Image
        className='rounded-md w-full'
        src={image}
        alt={courseTitle}
      />
      <PreviewButton data="Course Preview" icon={playIcon} onclick={openVideoModal} />
      <Modal isOpen={isVideoModalOpen} onRequestClose={closeVideoModal}>
        <VideoPlayer />
      </Modal>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.941176 6.64142H2.44706C2.68856 6.64142 2.88823 6.8411 2.88823 7.0826V15.1955C2.88823 15.437 2.68856 15.6367 2.44706 15.6367H0.941176C0.699672 15.6367 0.5 15.437 0.5 15.1955V7.0826C0.5 6.8411 0.699672 6.64142 0.941176 6.64142ZM7.71765 3.63907H9.22353C9.46503 3.63907 9.6647 3.83874 9.6647 4.08025V15.1955C9.6647 15.437 9.46503 15.6367 9.22353 15.6367H7.71765C7.47614 15.6367 7.27647 15.437 7.27647 15.1955V4.08025C7.27647 3.83874 7.47614 3.63907 7.71765 3.63907ZM14.4941 0.636719H16C16.2415 0.636719 16.4412 0.836391 16.4412 1.0779V15.1955C16.4412 15.437 16.2415 15.6367 16 15.6367H14.4941C14.2526 15.6367 14.0529 15.437 14.0529 15.1955V1.0779C14.0529 0.836391 14.2526 0.636719 14.4941 0.636719Z" fill="#00D2D2" stroke="#00D2D2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='text-para-small'>{courseDifficulty}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <svg width="16" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.26241 5.08612V9.23606M8.26241 16.706C4.25356 16.706 1 13.4524 1 9.44356C1 5.43471 4.25356 2.18115 8.26241 2.18115C12.2713 2.18115 15.5248 5.43471 15.5248 9.44356" stroke="#00D2D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.11829 1.47021H11.0982M11.0152 15.165V14.2023C11.0152 13.0154 11.8618 12.5257 12.891 13.1233L13.721 13.6047L14.551 14.0861C15.5802 14.6837 15.5802 15.6547 14.551 16.2523L13.721 16.7337L12.891 17.2151C11.8618 17.8127 11.0152 17.323 11.0152 16.1361V15.165Z" stroke="#00D2D2" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='text-para-small'>{courseDuration}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-para-big'>
            <div dangerouslySetInnerHTML={{ __html: breakTextIntoLines(courseTitle, 4) }} />
          </h2>
          <p className='text-para-xsmall'>By {tutorName} {tutorCredentials}</p>
          <p className='text-subhead text-accent'>${price}</p>
          <p className='text-para-xsmall'>{courseDesc}</p>
        </div>
      </div>
      <div className='grid grid-cols-[1fr,1fr] w-full gap-4'>
        <a className='text-dark secondary_btn' href="/Privacy_Policy_GenAI.pdf" target="_blank">
          Details
          {downloadIcon}
        </a>
        {buttonId && (
          <form className='pay_btn' id={`paymentForm-${buttonId}`}>
            {/* Razorpay script will be dynamically added here */}
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
