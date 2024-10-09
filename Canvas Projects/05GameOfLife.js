const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        this.fontSize=25;
        ctx.beginPath();
        ctx.moveTo(300, 150);
        ctx.lineTo(400, 250);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        /* this.#initialize(); */
    }
    /*#initialize(){
        /* for(let i=0;i<this.columns;i++){
            this.symbols[i]=new Symbol(i,0, this.fontSize,this.canvasHeight);
        } */

    /*}
    /* resize(width,heigth){
        this.canvasWidth=width;
        this.canvasHeigth=heigth;
        this.columns=this.canvasWidth/this.fontSize;
        this.symbols=[];
        this.#initialize();
    } */
}

/*CreateUpdateTable(canvas.width,canvas.height);*/
const effect = new CreateUpdateTable(canvas.width,canvas.height);

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.strokeStyle = 'black'
ctx.stroke();
