const canvas = document.getElementById("canvas2Roots");
const canvasContext = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const mouseCoordinates=[];
const currentMouseCoordinates=[]

const mouse={
    x:undefined,
    y:undefined,
}

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    draw()
});

function draw(){
    canvasContext.beginPath(); // Start a new path
    canvasContext.moveTo(30, 50); // Move the pen to (30, 50)
    canvasContext.lineTo(150, 100); // Draw a line to (150, 100)
    mouseCoordinates=[150,100];
    canvasContext.strokeStyle = 'white';
    canvasContext.stroke(); // Render the path
}

canvas.addEventListener('click',function(event){
    //let OldX=mouseCoordinates=[-1][-2];
    //let OldY=mouseCoordinates=[-1][-1];
    mouse.x=event.x;
    mouse.y=event.y;
    currentMouseCoordinates=[mouse.x,mouse.y]
    mouseCoordinates.push(currentMouseCoordinates);
    canvasContext.beginPath();
    canvasContext.moveTo(35, 55);
    canvasContext.lineTo(mouse.x, mouse.y); // Draw a line to (150, 100)
    canvasContext.strokeStyle = 'white';
    canvasContext.stroke(); // Render the path
    
})

draw()