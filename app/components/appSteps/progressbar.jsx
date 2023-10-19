"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function AppStepsbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [highlightClass, setHighlightClass] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let timeoutId = null;

    if (filled < 500 && isRunning) {
      timeoutId = setTimeout(() => {
        setFilled(prev => prev + 2);
      }, 50);
    }
	if (filled < 125) {
		setHighlightClass(1);
	} else if (filled >= 125 && filled < 250) {
      setHighlightClass(2);
    } else if (filled >= 250 && filled < 375) {
      setHighlightClass(3);
    } else if (filled >= 375 && filled < 500) {
      setHighlightClass(4);
    } else if (filled === 500) {
		setIsRunning(false);
		setFilled(0);
  
		// Set highlight class after a slight delay to ensure smooth transition
		setTimeout(() => {
			setIsRunning(true);
			setHighlightClass(1);
		}, 1000);
	  }

    return () => clearTimeout(timeoutId);
  }, [filled, isRunning]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-6 pt-12'>
      <div className='py-8 flex gap-6'>
        <div className="progressbar bg-dark">
          <div
            className='bg-accent w-full'
            style={{
              height: `${filled /5}%`,
              transition: 'height 0s ease-in-out',
            }}
          ></div>
        </div>
      
        <div className='flex flex-col my-auto w-11/12 md:w-12/12' ref={ref}>
          <p className={`text-para-small py-4 ${highlightClass === 1 ? 'highlighted' : ''}`}>
            Try the Model Online with Hosted Inference API on our Architecture.
          </p>
          <p className={`text-para-small ${highlightClass === 2 ? 'highlighted' : ''}`}>
            Check the easy to follow model documentation and details about its usage.
          </p>
          <p className={`text-para-small ${highlightClass === 3 ? 'highlighted' : ''}`}>
            Implement the code in your existing code system to use the model in your applications.
          </p>
          <p className={`text-para-small ${highlightClass === 4 ? 'highlighted' : ''}`}>
            Hooray!!
          </p>
        </div>
      </div>
      <div className='w-full bg-white drop-shadow-container vplayer hidden sm:block'>
      </div>
    </div>
  );
}
