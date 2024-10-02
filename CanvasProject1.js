const canvas=document.getElementById("canvas1")
const canvasContext=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvasContext.fillStyle="white";
    canvasContext.fillRect(10,10,50,50);
})

canvasContext.fillStyle="white";
canvasContext.fillRect(10,10,50,50);