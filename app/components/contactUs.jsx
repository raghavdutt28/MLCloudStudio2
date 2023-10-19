"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';


const ContactButton = ({ data, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!')

    closeModal();
  };


  return (
    <div className="relative inline-block">
      <button className="text-dark primary_btn" onClick={openModal}>
        {data}
        {icon ? icon : null}
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Us Modal"
        className="modal bg-white p-4 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border"
        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
        ariaHideApp={false}
      >
        <div>
          <h2 className="text-subhead pb-6 text-center">Happy to Assist You!</h2>
          <form
            className='form'
            action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf5MzfNruQwAY5cmLzKTG6PqOg5OmjMpXuUpKFC9tApawGoyQ/formResponse"
            autoComplete="off"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
              <input type="text" name="" className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Name"
                required />

            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
              <input type="email" name="" className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
                required />

            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-500">Phone</label>
              <input type="tel" name="" className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Contact Number" />

            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-500">Message</label>
              <textarea name="" className="mt-1 p-2 w-full border rounded-md" rows="4" placeholder="Your Query"></textarea>

            </div>
            <div className="flex justify-between">
              <button type="submit" className="primary_btn">
                Submit
              </button>
              <button type="button" onClick={closeModal} className="secondary_btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContactButton;
