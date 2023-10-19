"use client"
import React from 'react'
import ContactButton from './contactUs';

const PricingCard = ({ type, price, features, cta, purpose }) => {
  const primaryButtonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>


  );


  const scrollToSection = (purpose) => {
    const section = document.getElementById(purpose);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };



  return (
    <div className='pricing_card gap-4 mx-auto md:mx-0'>
      <div className=''>
        <p className='type'>{type}</p>
        <h1 className='price'>{price}</h1>
      </div>
      <div className=''>
        <p className='features w-fit'>Features</p>
        <ul className='list-disc list-inside list-none py-4'>
          {features.map((feature, index) => (
            <li key={index} className='feature flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00D2D2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              {feature}
            </li>
          ))}
        </ul>
        {cta === 'Contact Us' ? (
          // Render ContactButton for 'Contact Us' cta
          <ContactButton data={cta} icon={primaryButtonIcon} />
          
        ) : (
          // Render a different button for other cta values
          <div className='text-dark primary_btn' onClick={() => scrollToSection(purpose)}>
            {cta}
            {primaryButtonIcon && <span>{primaryButtonIcon}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

export default PricingCard