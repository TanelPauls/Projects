const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");

let boxSize = document.getElementById("squareSize").innerText;
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





/* class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        
        let x=1;
        let y=1;
        let overFlow=canvasWidth/boxSize;
        if(overFlow==0){
            while(x<canvasWidth){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvasHeight);
                ctx.strokeStyle = 'red';
                ctx.stroke();
                x+=boxSize;
            }
        }
        else if(overFlow%2==0){
            for(let z=0;z<overFlow/2;z++){
                ctx.beginPath();
                ctx.moveTo(z, 0);
                ctx.lineTo(z, canvasHeight);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
        }
        else if(overFlow==1){
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasHeight);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            x+=1;
            while(x<canvasWidth){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvasHeight);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                x+=boxSize;
            }
        }
        else{
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasHeight);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            x+=1;
            while(x<=((overFlow-1)/2)){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvasHeight);
                ctx.strokeStyle = 'blue';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(canvasWidth-x, 0);
                ctx.lineTo(canvasWidth-x, canvasHeight);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                x+=1;
            }
            while(x<canvasWidth){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvasHeight);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                x+=boxSize;
            }
        } */
        
        /* while(y<canvasHeight){
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvasWidth, y);
            ctx.strokeStyle = 'red';
            ctx.stroke();
            y+=25;
        }
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasWidth,canvasHeight);
        ctx.strokeStyle = 'red';
        ctx.stroke(); */

        /* this.#initialize(); */
   // }
    /*#initialize(){
        /* for(let i=0;i<this.columns;i++){
            this.symbols[i]=new Symbol(i,0, this.fontSize,this.canvasHeight);
        } */

    /*}
    resize(width,heigth){
        this.canvasWidth=width;
        this.canvasHeigth=heigth;
        this.columns=this.canvasWidth/this.fontSize;
        this.symbols=[];
        this.#initialize();
    } */
//}

/*CreateUpdateTable(canvas.width,canvas.height);*/
//const effect = new CreateUpdateTable(canvas.width,canvas.height);
