const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let boxSize = document.getElementById("squareSize").innerText;
boxSize = parseInt(boxSize);



class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        
        let x=0;
        let y=0;
        while(x<canvasWidth){
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasHeight);
            ctx.strokeStyle = 'red';
            ctx.stroke();
            x+=25;
        }
        while(y<canvasHeight){
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
        ctx.stroke();

        /* this.#initialize(); */
    }
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
}

/*CreateUpdateTable(canvas.width,canvas.height);*/
const effect = new CreateUpdateTable(canvas.width,canvas.height);
