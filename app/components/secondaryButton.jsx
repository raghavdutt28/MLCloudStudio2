"use client"
import React from 'react'
import '../globals.css';
import Image from 'next/image';

const SecondaryButton = ({ data, icon}) => {
  return (
    <div className='text-dark secondary_btn '>
      {data}
      {
      icon ? (icon)

     : null
    }
    </div>
  )
}

export default SecondaryButton