const canvas=document.getElementById("canvas1")
const ctx=canvas.getContext("2d");
let gameTable=[];
const mouse = { x: 0, y: 0 };



class CreateUpdateTable{
    constructor(canvasWidth,canvasHeight){
        this.updateCanvas();        
    }
    updateCanvas(){
        let boxSize = parseInt(document.getElementById("squareSize").innerText);

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
        this.updateTable();
    }
    drawBoxes(){
        let boxSize = parseInt(document.getElementById("squareSize").innerText);
        //document.getElementById("jääk").innerText = this.canvasWidth;
        
    
        let x=0;
        while(x<this.canvasWidth){
            x+=boxSize;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvasHeight);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            
        }
        let y=0;
         while(y<this.canvasHeight){
            y+=boxSize;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.canvasWidth, y);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            
        }  


    }
    updateTable(){
        let boxSize = parseInt(document.getElementById("squareSize").innerText);
        let tableSize=(this.canvasWidth*this.canvasHeight)/(boxSize*boxSize);
        //document.getElementById("jääk").innerText = tableSize;
        let xCounter=0;
        let yCounter=0;
        for(let m=0;m<tableSize;m++){
            let xMax=this.canvasWidth/boxSize;
            let q=[]
            q=[m,(xCounter*boxSize)+1,(xCounter*boxSize)+(boxSize-1),(yCounter*boxSize)+1,(yCounter*boxSize)+(boxSize-1),0];
            gameTable.push(q);
            if (xCounter==xMax-1){
                xCounter=0;
                yCounter+=1;
            }
            else{xCounter++}
            
        }

    }

}

canvas.addEventListener('click',function(event){
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
    let t=0;
    while(t<(gameTable.length)){
        if(mouse.x>=gameTable[t][1] && mouse.x<=gameTable[t][2] && mouse.y>=gameTable[t][3] && mouse.y<=gameTable[t][4]){
            
            if(gameTable[t][5]==0){
                gameTable[t][5]=1;
            }
            else{gameTable[t][5]=0;}
            
        }
        t++;
    }
    painter();
})

function painter(){
    let boxSize = parseInt(document.getElementById("squareSize").innerText);
    let s=0;
    while(s<(gameTable.length)){
        if(gameTable[s][5]==1){
            ctx.fillStyle = "rgb(53, 17, 101)";
            ctx.fillRect(gameTable[s][1], gameTable[s][3], boxSize-1, boxSize-1);
        }
        else{
            ctx.fillStyle = "rgb(179, 198, 96)";
            ctx.fillRect(gameTable[s][1], gameTable[s][3], boxSize-1, boxSize-1);
        }
        s++;
    }

}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
