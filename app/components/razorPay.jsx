// RazorpayScript.js
"use client"
import React, { useEffect } from 'react';

const RazorpayScript = ({ id }) => {
  useEffect(() => {
    const addRazorpayButton = () => {
      const formElement = document.createElement('form');
      formElement.id = 'paymentForm';

      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      scriptElement.setAttribute('data-payment_button_id', id);

      formElement.appendChild(scriptElement);

      const existingForm = document.getElementById('paymentForm');
      if (existingForm) {
        existingForm.parentNode.replaceChild(formElement, existingForm);
      } else {
        document.body.appendChild(formElement);
      }
    };

    addRazorpayButton();

    // Cleanup on component unmount
    return () => {
      const formElement = document.getElementById('paymentForm');
      if (formElement) {
        formElement.parentNode.removeChild(formElement);
      }
    };
  }, [id]);

  return null; // No need to render anything in the DOM
};

export default RazorpayScript;
