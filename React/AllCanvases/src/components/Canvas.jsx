import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ width, height, isPlaying, stop, onCirclesUpdate }) => {
  const canvasRef = useRef(null);
  const prevStop = useRef({ stop: false});
  const prevPlay = useRef({ isPlaying: false});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;

    

    class CreateUpdateTable {
        constructor() {
            this.updateCanvas();
            this.circles = [];
            this.animationFrameId = null;
        }
        stopCanvas(){
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.circles = [];
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId); // Stop the animation
                this.animationFrameId = null;
            }
            onCirclesUpdate && onCirclesUpdate(this.circles);
            
        }
        updateCanvas() {
            this.canvasWidth = canvas.width;
            this.canvasHeight = canvas.height;
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
    
        createNewCircle(){
            this.circles.push({
                x: Math.floor(Math.random() * this.canvasWidth),
                y: Math.floor(Math.random() * this.canvasHeight),
                radius: 10,
                maxRadius: Math.floor(Math.random() * 100)
            });
            onCirclesUpdate && onCirclesUpdate(this.circles); // Update parent
        }
    
        drawCirc(circle) {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    
        animateCircles() {
            if(isPlaying===false){return}
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            if(this.circles.length===0 || !Array.isArray(this.circles)){
                this.circles = [];
                this.createNewCircle()}
            if(this.circles.length<10){
                this.createNewCircle();
            }
            for (let i = this.circles.length - 1; i >= 0; i--) {
                const circle = this.circles[i];
                this.drawCirc(circle);
                if (circle.radius < circle.maxRadius) {
                    circle.radius += 2;
                } else if (isPlaying) { // Only remove circles when animation is active
                    this.circles.splice(i, 1);
                }
                
            }
            onCirclesUpdate && onCirclesUpdate(this.circles); // Update parent
            this.animationFrameId = requestAnimationFrame(() => this.animateCircles());
        }
        redrawCircles() {
            if (this.circles && this.circles.length > 0) { // Safeguard against empty array
                ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                for (let i = 0; i < this.circles.length; i++) {
                    this.drawCirc(this.circles[i]);
                }
            }
          }
    }

    const effect = new CreateUpdateTable();
    effect.updateCanvas();
    

    if (prevPlay.current.isPlaying !== isPlaying) {
        prevPlay.current.isPlaying = isPlaying;
        if( isPlaying){
            effect.animateCircles();
        }
        else{
            effect.redrawCircles();
        }
    }
    if (prevStop.current.stop !== stop) {
        prevStop.current.stop = stop;
        effect.stopCanvas();
    }
    

    return () => {

        effect.stopCanvas(); // Cleanup animation when component unmounts or updates
    };
    
  }, [width, height, isPlaying, stop]);


  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
