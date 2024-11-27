import React, { useEffect, useRef, useState } from 'react';

const Canvas = ({ width, height, isPlaying, stoppable }) => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;

    class CreateUpdateTable {
        constructor() {
            this.updateCanvas();
            this.circles = [];
        }
        stopCanvas(){
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.circles = [];
            
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
        }
    
        drawCirc(circle) {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    
        animateCircles() {
            /* if(isPlaying===false){return} */
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            if(this.circles.length==0 || !Array.isArray(this.circles)){
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
                } else {
                    this.circles.splice(i, 1);             
                }
                
            }
            requestAnimationFrame(() => this.animateCircles());
        }
    }
    const effect = new CreateUpdateTable();
    effect.updateCanvas();
    effect.animateCircles();

    
    
    
  }, [width, height]);


  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
