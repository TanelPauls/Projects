import React, { useRef, useEffect, useState } from 'react';
import './CanvasCard.css'
import Canvas from './Canvas'

const CanvasCard = () => {
  const divRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDivSize = () => {
      if (divRef.current) {
        const { width, height } = divRef.current.getBoundingClientRect();
        setDivSize({ width, height });
      }
    };
  
    // Update size initially
    updateDivSize();
  
    // Add event listener for window resize
    window.addEventListener('resize', updateDivSize);
  
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateDivSize);
    };
  }, []);

  const canvasWidth = Math.floor(divSize.width)-2; 
  const canvasHeight = 500;
  return (
    <>
    <div className="canvasWrapper" ref={divRef}>
        <Canvas width={canvasWidth} height={canvasHeight} />   
        <div id="playButtonWrapper">
            <button id="playButton">
                <svg id="playIcon" width="50" height="50" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" stroke="gray" stroke-width="2" fill="none" />
                    <polygon points="8,5 19,12 8,19" fill="gray" />
                </svg>
                <svg id="pauseIcon" width="50" height="50" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" stroke="gray" stroke-width="2" fill="none" />
                    <rect x="8" y="5" width="3" height="14" fill="gray" />
                    <rect x="13" y="5" width="3" height="14" fill="gray" />
                </svg>
            </button>
            <button id="stopButton">
                <svg id="stopIcon" width="50" height="50" viewBox="0 0 24 24" >
                    <circle cx="12" cy="12" r="11" stroke="gray" stroke-width="2" fill="none" />
                    <rect x="7" y="7" width="10" height="10" fill="gray" />
                </svg>
            </button>
        </div>
    </div>
    </>
  )
}

export default CanvasCard