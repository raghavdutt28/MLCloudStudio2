"use client"
import React from 'react'
import Image from 'next/image'
// import { useNavigation } from 'next/client';

const FeatureCard = ({ useCase }) => {
//     const navigation = useNavigation();
  
    const handleCardClick = () => {
    //   navigation.navigate(`./useCase/${useCase.id}/page`);
    // //   router.push(`/featuredUseCase`);
    };
    
    return (
        
    <div className='feature_card' onClick={handleCardClick}>
            <div className='m-1'>
                <Image
                    src={useCase.image}
                    width={224}
                    height={247}
                    alt={useCase.title + " image"}
                    className='rounded-md'
                />
            </div>
        
        <div className='text-center h-full'>
            <h2 className='link py-1 px-2'>{useCase.title}</h2>
        </div>
    </div>
    
  )
}

export default FeatureCard