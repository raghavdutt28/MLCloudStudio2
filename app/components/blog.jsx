import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Blog = ({image, blogTitle, blogDesc, link}) => {
  return (
    <Link href={link} className='blog flex flex-col gap-2'>
        <Image
        className="w-full rounded-md"
        src={image}
        alt='blog Image'
        />
        <div className='h-full flex flex-col flex-between'>
            <h6 className='text-para-big w-3/4'>{blogTitle}</h6>
            <p className='text-para-xsmall mt-auto'>{blogDesc+" ...."}</p>
        </div>
    </Link>
  )
}

export default Blog