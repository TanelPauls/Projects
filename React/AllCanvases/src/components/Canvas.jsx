import React, { useEffect, useRef } from 'react';

const Canvas = ({ width, height, backgroundColor = 'white' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size (explicitly required for rendering)
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Drawing logic (same as before)
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;

    // Draw "X"
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, height);
    ctx.moveTo(0, height);
    ctx.lineTo(width, 0);
    ctx.stroke();

    // Draw circle
    const radius = Math.min(width, height) / 4;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    ctx.stroke();
  }, [width, height]);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
