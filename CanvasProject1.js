const canvas=document.getElementById("canvas1")
const canvasContext=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});

const mouse={
    x:undefined,
    y:undefined,
}
canvas.addEventListener('click',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    drawCircle();
})
function drawCircle(){
    canvasContext.fillStyle='blue';
    canvasContext.beginPath();
    canvasContext.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
    canvasContext.fill();
}
canvas.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    drawCircle();
})