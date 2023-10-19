import React from 'react'
import Image from 'next/image'

const testimonyCard = ({image, testimony, name, designation}) => {
  return (
    <div className='testimony_card'>
      <div className='relative'>

        <div className='w-[160px] h-[160px] bg-white rounded-full overflow-hidden'>
        <Image
        src={image}
        alt={name}
        />
        </div>
        <div className='absolute top-[-35px] left-[-10px] z-[-1]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="207" viewBox="0 0 200 207" fill="none">
            <g filter="url(#filter0_d_313_22463)">
              <path d="M180 106.829C180 151.012 144.183 186.829 100 186.829C55.8172 186.829 20 151.012 20 106.829C20 62.6466 33.5 40.5376 100 26.8294C166.5 13.1213 175 17.3296 180 106.829Z" fill="#00D2D2"/>
            </g>
            <defs>
              <filter id="filter0_d_313_22463" x="0" y="0.954102" width="200" height="205.875" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.819608 0 0 0 0 0.819608 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_313_22463"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_313_22463" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>

      </div>
      <div className='relative'>
        <p className=' text-white text-8xl font-bold drop-shadow-container font-montagu absolute top-[-50px] z-[-1]'>&apos;&apos;</p>
        <p className='text-para-small pb-1 w-9/12 md:w-full'>{testimony}</p>
        <h6 className='text-para-big'>{name}</h6>
        <p className='text-para-xsmall'>{designation}</p>
      </div>
    </div>
  )
}

export default testimonyCard