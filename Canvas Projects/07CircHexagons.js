const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class CreateUpdateTable {
    constructor() {
        this.circles = [];
        this.updateCanvas();
        this.circles = [];
    }
    stopCanvas(){
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.circles = [];
        playPause = 0;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        
    }
    updateCanvas() {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    createNewCircle(){
        this.circles.push({
            x: Math.floor(Math.random() * this.canvasWidth),
            y: Math.floor(Math.random() * this.canvasHeight),
            radius: 10,
            maxRadius: Math.floor(Math.random() * 200)
        });
    }

    drawCirc(circle) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    animateCircles() {
        if (playPause === 0) return;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        if(this.circles.length==0 || !Array.isArray(this.circles)){
            this.circles = [];
            this.createNewCircle()}
        if(this.circles.length<5){
            this.createNewCircle();
        }
        for (let i = this.circles.length - 1; i >= 0; i--) {
            const circle = this.circles[i];
            this.drawCirc(circle);
            if (circle.radius < circle.maxRadius) {
                circle.radius += 2;
            } else {
                this.circles.splice(i, 1); // Remove the circle from the array              
            }
            
        }
        requestAnimationFrame(() => this.animateCircles());
        /* this.updateCanvas(); */


        /*let allCirclesComplete = true;
         for (const circle of this.circles) {
            if (circle.radius < circle.maxRadius) {
                circle.radius += 2;
                allCirclesComplete = false;
            }
            this.drawCirc(circle);
        }

        if (!allCirclesComplete) {
            requestAnimationFrame(() => this.animateCircles());
        } */
    }
}
let playPause=0;
const effect = new CreateUpdateTable();
effect.updateCanvas();

window.addEventListener("resize", function () {
    effect.stopCanvas();
    effect.updateCanvas();
});


function toggleIcon() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    // Toggle visibility and playPause state
    if (playIcon.style.display === 'none') {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playPause = 0;
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playPause = 1;
        effect.animateCircles();
    }
}

document.getElementById("playButton").addEventListener("click", function() {
    toggleIcon();
});

document.getElementById("stopButton").addEventListener("click", function() {
    effect.stopCanvas();
});