// components/Accordion.js
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Accordion = ({ question, answer, turn, setTurn, idx }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
        }
    }, [contentRef, turn, idx]);

    const toggleAccordion = () => {
        let newTurn = [...turn];
        newTurn[idx] = !newTurn[idx];
        setTurn(newTurn);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
            <button onClick={toggleAccordion} className={`bg-white-light rounded-md px-5 shadow cursor-pointer w-full h-full ${turn[idx]}`}>
                <div className='py-3'>
                    <div className='flex items-center justify-between h-14 text-left'>
                        <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-accent'>{question}</span>
                        <div>
                            {turn[idx] ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                            </svg>

                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                                </svg>

                            }
                        </div>
                    </div>
                    <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
                        <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs text-gray-500 lg:text-lg'>
                            {answer}
                        </p>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Accordion;
