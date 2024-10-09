const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");



class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.updateCanvas();        
    }
    updateCanvas(){
        let boxSize = parseInt(document.getElementById("squareSize").innerText);
        boxSize = parseInt(boxSize);

        let overFlowX=window.innerWidth%boxSize;
        let overFlowY=window.innerHeight%boxSize;
        let boxes=(window.innerWidth-overFlowX)/boxSize
        let boxesY=(window.innerHeight-overFlowY)/boxSize

        canvas.width=window.innerWidth-overFlowX;
        canvas.height=window.innerHeight-overFlowY;

        var element = document.getElementById("canvas1");
        if(overFlowX%2==0){
            element.style.marginLeft = (overFlowX/2) + "px";
        }
        else{
            element.style.marginLeft = (1+((overFlowX-1)/2)) + "px";
        }

        if(overFlowY%2==0){
            element.style.marginTop = (overFlowY/2) + "px";
        }
        else{
            element.style.marginTop = (1+((overFlowY-1)/2)) + "px";
        }
        
        this.canvasWidth=canvas.width;
        this.canvasHeight=canvas.height;
        this.drawBoxes();
    }
    drawBoxes(){
        let boxSize = parseInt(document.getElementById("squareSize").innerText);
        document.getElementById("jääk").innerText = this.canvasWidth;
        
    
        let x=0;
        while(x<this.canvasWidth){
            x+=boxSize;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvasHeight);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            
        }
        let y=0;
         while(y<this.canvasHeight){
            y+=boxSize;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.canvasWidth, y);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            
        }  


    }

}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
