const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");


class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.updateCanvas();        
    }
    updateCanvas(){
        canvas.width=500;
        canvas.height=500;
        this.canvasWidth=canvas.width;
        this.canvasHeight=canvas.height;
        let pyramidRows = parseInt(document.getElementById("pyrRows").innerText);
        for(let y=0;y<=pyramidRows+4;y++){
            if(y!=0 && y!=1 && y!=pyramidRows+4 && y!=pyramidRows+3){
                ctx.beginPath();
                ctx.moveTo(0, (this.canvasHeight*y)/(pyramidRows+4));
                ctx.lineTo(this.canvasWidth, (this.canvasHeight*y)/(pyramidRows+4));
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
            
        }
        ctx.beginPath();
        ctx.moveTo(this.canvasWidth/2, (this.canvasHeight*2)/(pyramidRows+4));
        ctx.lineTo((this.canvasHeight*2)/(pyramidRows+4), (this.canvasHeight*(pyramidRows+2))/(pyramidRows+4));
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.canvasWidth/2, (this.canvasHeight*2)/(pyramidRows+4));
        ctx.lineTo((this.canvasHeight*(pyramidRows+2))/(pyramidRows+4), (this.canvasHeight*(pyramidRows+2))/(pyramidRows+4));
        ctx.strokeStyle = 'black';
        ctx.stroke();

    }
    drawBoxes(){}
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
