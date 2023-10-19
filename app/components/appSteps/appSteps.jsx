"use client"
import React, {useState, useEffect} from 'react'

export default function AppStepsbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [highlightClass, setHighlightClass] = useState(0);
	useEffect(() => {
		if (filled < 500 && isRunning) {
			setTimeout(() => {
        setFilled(prev => prev += 2)
      }, 50)
		}
    if (filled < 125 && isRunning){
      setHighlightClass(1)
    }
    else if (filled < 250 && isRunning){}
    else if (filled < 375 && isRunning){}
    else if (filled < 500 && isRunning){}
    else if (filled === 500 && isRunning){
      setIsRunning(true)
      setFilled(0)
    } 
	},[filled, isRunning])
  return (
	  <div>
		  <p className='text-para-small'>Try the Model Online with Hosted Inference API on our Architecture.</p>
		  <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button>
	</div>
  )
}