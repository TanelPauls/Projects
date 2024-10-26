const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");



class CreateUpdateTable{
    constructor(){
        this.updateCanvas();        
    }
    updateCanvas(){
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;

        
        const centerX=this.canvasWidth/2;
        const centerY=this.canvasHeight/2
        this.radiusInner=Math.min(this.canvasWidth,this.canvasHeight)/3;
        this.radiusOuter=Math.min(this.canvasWidth,this.canvasHeight)/2.1;
        this.drawCirc(centerX, centerY, this.radiusInner)
        this.drawCirc(centerX, centerY, this.radiusOuter)
        this.drawTriangle(centerX, centerY)
    }
    drawCirc(centerX,centerY,radius){
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#0000ff'; // Blue outline for the circle
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    drawTriangle(centerX,centerY){
        const topX = centerX;
        const topY = centerY - this.radiusInner;
        this.drawCirc(topX,topY,5)
        const sideLength = Math.sqrt(3) * this.radiusInner;
        const angle1 = (60 * Math.PI) / 180;
        const angle2 = (120 * Math.PI) / 180;
        const bottomX1 = topX + sideLength * Math.cos(angle1);
        const bottomY1 = topY + sideLength * Math.sin(angle1);
        const bottomX2 = topX + sideLength * Math.cos(angle2);
        const bottomY2 = topY + sideLength * Math.sin(angle2);
        this.drawCirc(bottomX1,bottomY1,5)
        this.drawCirc(bottomX2,bottomY2,5)
        


        ctx.beginPath();
        ctx.moveTo(topX, topY);
        ctx.lineTo(bottomX1, bottomY1);
        ctx.lineTo(bottomX2, bottomY2);
        ctx.closePath(); // Close the triangle
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
    }  

}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
