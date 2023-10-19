import React from 'react'
import Link from 'next/link';
import ContactButton from './contactUs'

const primaryButtonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>

);
const heart = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#FF5E5B" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>

);


const footer = () => {

  return (
    <footer>
      <p className='logo_text pb-2'>ML<span className='logo_text_span'>CLOUD</span>STUDIOS</p>
      <div className='flex w-full items-center justify-center border-y-2 border-dark py-2'>
        <div className='w-full flex gap-12 items-center'>
          <Link href="/RG_SmartDiscovery_PPT.pdf" alt="alt text"
            target="_blank" className='nav_link'>
            Our Story
          </Link>
          <Link href="/faq" className='nav_link'>
            FAQ&apos;s
          </Link>
          <Link href="/Privacy_Policy_GenAI.pdf" alt="alt text"
            target="_blank" className='nav_link'>
            Privacy Policy
          </Link>
          <div className='flex ml-auto'>
            <ContactButton data="Contact Us" icon={primaryButtonIcon} />
          </div>
        </div>
      </div>
      <div className='py-2 md:flex'>
      <p className='text-para-xsmall'>Copyright &copy; RGSmartDiscovery LLP. All rights reserved.</p>
        <p className='text-para-xsmall flex items-center md:ml-auto'>Made with {heart} in India.</p>
      </div>
    </footer>
  )
}

export default footer