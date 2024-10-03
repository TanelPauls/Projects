const canvas=document.getElementById("canvas1")
const canvasContext=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const particlesArray=[];
let hue=0;

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
    for(i=0;i<10;i++){
        particlesArray.push(new Particle());
    }
    
})

canvas.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    for(i=0;i<6;i++){
        particlesArray.push(new Particle());
    }
})
class Particle {
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        //this.x=Math.random()*canvas.width;
        //this.y=Math.random()*canvas.height;
        this.size=Math.random()*15+1;
        this.speedX=Math.random()*3-1.5;
        this.speedY=Math.random()*3-1.5;
        this.color='hsl('+hue+',100%,50%)';
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.size>0.2) this.size-=0.1;
    }
    draw(){
        canvasContext.fillStyle=this.color;
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        canvasContext.fill();
    }
}


function handleParticles(){
    for (let i=0; i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size <=0.3){
            particlesArray.splice(i,1)
            i--;
        }
    }
}

function animate(){
    //canvasContext.clearRect(0,0,canvas.width,canvas.height)
    canvasContext.fillStyle="rgba(0,0,0,0.02)"
    canvasContext.fillRect(0,0,canvas.width,canvas.height)
    handleParticles()
    hue+=0.5;
    requestAnimationFrame(animate)
}
animate()