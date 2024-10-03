const canvas=document.getElementById("CanvasProject3ImageToPixels")
const ctx=canvas.getContext("2d");
const img = document.getElementById('imageToOverlay');
canvas.width=img.clientWidth;
canvas.height=img.clientHeight;

window.addEventListener("resize",function(){
    canvas.width=img.clientWidth;
    canvas.height=img.clientHeight;
    ctx.fillStyle="black";
    ctx.fillRect(10,10,50,50);
})

//draw a canvas over a picture
ctx.fillStyle="black";
ctx.fillRect(10,10,50,50);