import React, { useRef, useEffect, useState } from 'react';
import './CanvasCard.css'
import Canvas from './Canvas'

const CanvasCard = () => {
  const divRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0});
  const [isPlaying, setIsPlaying] = useState(false);
  const [stoppable, setStoppable] = useState(false);

  const canvasHeight = 500;

  const playButtonRef = useRef(null);
  const pauseIconRef = useRef(null);
  const playIconRef = useRef(null);
  const stopButtonRef = useRef(false);

  useEffect(() => {
    const updateDivSize = () => {
      if (divRef.current) {
        const { width} = divRef.current.getBoundingClientRect();
        setDivSize({ width});
      }
    };

    updateDivSize();
    window.addEventListener('resize', updateDivSize);
    return () => {
      window.removeEventListener('resize', updateDivSize);
    };
  }, []);

  const canvasWidth = Math.floor(divSize.width)-2; 

  const toggleIcon = () => {
    if (playIconRef.current.style.display === 'none') {
      playIconRef.current.style.display = 'block';
      pauseIconRef.current.style.display = 'none';
      setIsPlaying(false);
      setStoppable(true);
    } else {
      playIconRef.current.style.display = 'none';
      pauseIconRef.current.style.display = 'block';
      setIsPlaying(true);
      setStoppable(true);
    }
  };

  const toggleIconStop = () => {
    playIconRef.current.style.display = 'block';
    pauseIconRef.current.style.display = 'none';
    setIsPlaying(false);
    setStoppable(false);
  };


  return (
    <>
    <div className="canvasWrapper" ref={divRef} style={{ height: `${canvasHeight}px` }}>
        <Canvas width={canvasWidth} height={canvasHeight} isPlaying={isPlaying} stoppable={stoppable}/>   
        <div id="playButtonWrapper">
            <button ref={playButtonRef} className="playButton" onClick={toggleIcon}>
                <svg ref={playIconRef} className="playIcon" width="50" height="50" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" stroke="gray" strokeWidth="2" fill="none" />
                    <polygon points="8,5 19,12 8,19" fill="gray" />
                </svg>
                <svg ref={pauseIconRef} className="pauseIcon" width="50" height="50" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" stroke="gray" strokeWidth="2" fill="none" />
                    <rect x="8" y="5" width="3" height="14" fill="gray" />
                    <rect x="13" y="5" width="3" height="14" fill="gray" />
                </svg>
            </button>
            <button ref={stopButtonRef} className="stopButton" onClick={toggleIconStop}>
                <svg className="stopIcon" width="50" height="50" viewBox="0 0 24 24" >
                    <circle cx="12" cy="12" r="11" stroke="gray" strokeWidth="2" fill="none" />
                    <rect x="7" y="7" width="10" height="10" fill="gray" />
                </svg>
            </button>
        </div>
    </div>
    </>
  )
}

export default CanvasCard