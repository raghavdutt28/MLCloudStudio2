import React from 'react'
import Image from 'next/image'

const Content = ({ heading, para, icon }) => {
    return (
    <div className='w-full pb-12'>
        <Image 
        src={icon}
        height={64} 
        width={64}
        alt={heading +" Icon"}
        />
        <div className='head_text pt-4 pb-2'>{heading}</div>
        <div className='text-para-small w-3/4'>{para}</div>
    </div>
  )
}

export default Content