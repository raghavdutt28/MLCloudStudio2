import React from 'react'
import '../globals.css';


const PrimaryButton = ({ data, icon }) => {
  return (
    <div className='text-dark primary_btn'>
    {data}
    {
      icon ? (icon)

     : null
    }
  </div>
  )
}

export default PrimaryButton