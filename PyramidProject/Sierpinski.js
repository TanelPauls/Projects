const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");

class CreateUpdateTable {
    constructor() {
        this.updateCanvas();

        canvas.addEventListener("mousedown", (event) => this.handleMouseClick(event));    
    }
    
    updateCanvas() {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    
        const centerX = this.canvasWidth / 2;
        const centerY = this.canvasHeight / 2;
        this.radiusInner = Math.min(this.canvasWidth, this.canvasHeight) / 3;
        this.radiusOuter = Math.min(this.canvasWidth, this.canvasHeight) / 2.1;
    
        this.drawCirc(centerX, centerY, this.radiusInner);
        this.drawCirc(centerX, centerY, this.radiusOuter);
    
        const topX = centerX;
        const topY = centerY - this.radiusInner;
        const sideLength = Math.sqrt(3) * this.radiusInner;
    
        const angle1 = (60 * Math.PI) / 180;
        const angle2 = (120 * Math.PI) / 180;
    
        const bottomX1 = topX + sideLength * Math.cos(angle1);
        const bottomY1 = topY + sideLength * Math.sin(angle1);
        const bottomX2 = topX + sideLength * Math.cos(angle2);
        const bottomY2 = topY + sideLength * Math.sin(angle2);

        this.allPoints=[];
        this.sierpinskiDepth=5;
        this.allPoints.push([topX,topY,this.sierpinskiDepth]);
        this.allPoints.push([bottomX1,bottomY1,this.sierpinskiDepth]);
        this.allPoints.push([bottomX2,bottomY2,this.sierpinskiDepth]);
        this.drawSierpinski(topX, topY, bottomX1, bottomY1, bottomX2, bottomY2, this.sierpinskiDepth);
            
    }
    
    drawCirc(centerX, centerY, radius) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#0000ff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    midPoint(x1, y1, x2, y2) {
        return {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2
        };
    }
    
    drawTriangle(x1, y1, x2, y2, x3, y3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    drawSierpinski(x1, y1, x2, y2, x3, y3, depth) {
        if (depth === 0) {
            this.drawTriangle(x1, y1, x2, y2, x3, y3);
            return;
        }
    
        const mid1 = this.midPoint(x1, y1, x2, y2);
        this.allPoints.push([mid1.x,mid1.y,depth]);
        const mid2 = this.midPoint(x2, y2, x3, y3);
        this.allPoints.push([mid2.x,mid2.y,depth]);
        const mid3 = this.midPoint(x3, y3, x1, y1);
        this.allPoints.push([mid3.x,mid3.y,depth]);
    
        this.drawSierpinski(x1, y1, mid1.x, mid1.y, mid3.x, mid3.y, depth - 1);
        this.drawSierpinski(mid1.x, mid1.y, x2, y2, mid2.x, mid2.y, depth - 1);
        this.drawSierpinski(mid3.x, mid3.y, mid2.x, mid2.y, x3, y3, depth - 1);
    }
    
    drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    handleMouseClick(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Draw a line from the click point to each point in allPoints
        this.allPoints.forEach(([pointX, pointY]) => {
            this.drawLine(mouseX, mouseY, pointX, pointY);
        });
    }
}
    

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
