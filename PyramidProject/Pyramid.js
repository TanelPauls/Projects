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
    }
    drawBoxes(){}
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
