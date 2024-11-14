const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


class CreateUpdateTable {
    constructor() {
        this.updateCanvas();
    }

    updateCanvas() {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        const allCircs=[];
        let circX=this.canvasWidth/2;
        let circY=this.canvasHeight/2;
        let circRadius=100;
        this.drawCirc(circX,circY,circRadius)

    }
    drawCirc(circX,circY,circRadius){
        ctx.arc(circX,circY, circRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    drawPaths(allHorisontalPaths) {
        /* ctx.beginPath();
        let randomPoint=allHorisontalPaths[yi][1]+(Math.random() * 2 * randomN) - randomN;
        ctx.arc(newSegment[m],randomPoint, CircRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(prevPoint[0],prevPoint[1]);
        ctx.lineTo(newSegment[m], randomPoint);      
        ctx.strokeStyle = 'black';
        ctx.stroke(); */
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
