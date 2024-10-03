const canvas=document.getElementById("CanvasProject3ImageToPixels")
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.fillStyle="red";
    ctx.canvasContext.fillRect(55,55,80,80);
})
ctx.fillStyle="black";
ctx.fillRect(10,10,50,50);