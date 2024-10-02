const canvas=document.getElementById("canvas1")
const canvasContext=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const particlesArray=[];

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
    //drawCircle();
})

canvas.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    //drawCircle();
})
class Particle {
    constructor(){
        //this.x=mouse.x;
        //this.y=mouse.y;
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.size=Math.random()*5+1;
        this.speedX=Math.random()*3-1.5;
        this.speedY=Math.random()*3-1.5;
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    draw(){
        canvasContext.fillStyle='blue';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, 30, 0, Math.PI * 2);
        canvasContext.fill();
    }
}
function init(){
    for(let i=0; i<100; i++){
        particlesArray.push(new Particle())
    }
}
init()

function handleParticles(){
    for (let i=0; i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    canvasContext.clearRect(0,0,canvas.width,canvas.height)
    handleParticles()
    requestAnimationFrame(animate)
}
animate()