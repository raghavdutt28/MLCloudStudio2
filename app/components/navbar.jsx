"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import SecondaryButton from './secondaryButton';

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleMobileMenu = () => {
    setToggleDropdown(!toggleDropdown);
  };
  // Function to handle smooth scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu after clicking a link
      setToggleDropdown(false);
    }
  };

  return (
    <nav className='flex gap-12 w-full mb-5 py-12 items-top'>
      <Link href='/' className=' gap-2 flex-center'>
        <p className='logo_text'>ML<span className='logo_text_span'>CLOUD</span>STUDIO</p>
      </Link>

      {/* Desktop navigation */}
      <div className='lg:flex hidden w-full items-center'>
        <div className='flex gap-12 md:gap-12'>
        <button className='nav_link' onClick={() => scrollToSection('useCaseSection')}>
              UseCase
            </button>
            <button className='nav_link' onClick={() => scrollToSection('coursesSection')}>
              Courses
            </button>
            <button className='nav_link' onClick={() => scrollToSection('pricingSection')}>
              Pricing
            </button>
        </div>
        <div className='flex gap-3 md:gap-5 ml-auto'>
          <SecondaryButton data="Get Started Free" />
        </div>
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className='lg:hidden flex relative ml-auto'>
        <button className='transition-all' onClick={toggleMobileMenu}>
          {toggleDropdown ? (
            // Close icon when the menu is open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when the menu is closed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        {toggleDropdown && (
          <div className='mobile-menu'>
            {/* Links for mobile navigation */}
            <button className='nav_link' onClick={() => scrollToSection('useCaseSection')}>
              UseCase
            </button>
            <button className='nav_link' onClick={() => scrollToSection('coursesSection')}>
              Courses
            </button>
            <button className='nav_link' onClick={() => scrollToSection('pricingSection')}>
              Pricing
            </button>
            <button className='nav_link' onClick={() => scrollToSection('contactSection')}>
              Contact Us
            </button>
            <div className='flex gap-3'>
              <SecondaryButton data="Get Started Free" />
            </div>
            {/* Additional mobile menu items */}
            {/* Add any additional mobile menu items here */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

