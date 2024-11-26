import React from 'react'
import Canvas from './Canvas'

const CanvasCard = () => {
  const canvasWidth = 300;
  const canvasHeight = 500;
  const canvasBackgroundColor = 'lightblue';
  return (
    <>
    <Canvas width={canvasWidth} height={canvasHeight} backgroundColor={canvasBackgroundColor} />
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
    </>
  )
}

export default CanvasCard