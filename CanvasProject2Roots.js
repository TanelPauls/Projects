const canvas = document.getElementById("canvas2Roots");
const canvasContext = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    draw()
});

function draw(){
    canvasContext.fillStyle="white";
    canvasContext.fillRect(10,10,50,50);
}

draw()