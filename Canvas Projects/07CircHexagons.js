const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class CreateUpdateTable {
    constructor() {
        this.circles = []; // Array to store multiple circle objects
        this.updateCanvas();
        this.initCircles(); // Initialize circles
        this.animateCircles(); // Start the animation
    }

    updateCanvas() {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    initCircles() {
        // Define multiple circles with random positions and radii
        this.circles = [
            { x: this.canvasWidth / 4, y: this.canvasHeight / 4, radius: 0, maxRadius: 50 },
            { x: this.canvasWidth / 2, y: this.canvasHeight / 2, radius: 0, maxRadius: 75 },
            { x: (3 * this.canvasWidth) / 4, y: (3 * this.canvasHeight) / 4, radius: 0, maxRadius: 100 },
            // Add more circles with different positions and max radii as needed
        ];
    }

    drawCirc(circle) {
        // Draw a single circle based on its properties
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    animateCircles() {
        // Update the canvas dimensions (in case of resizing)
        if (playPause === 0) return;
        this.updateCanvas();

        // Clear canvas before redrawing all circles
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Loop over each circle and update/draw
        let allCirclesComplete = true;
        for (const circle of this.circles) {
            if (circle.radius < circle.maxRadius) {
                circle.radius += 2; // Adjust the speed of expansion
                allCirclesComplete = false; // Set to false if any circle is still expanding
            }
            this.drawCirc(circle); // Draw the circle with the updated radius
        }

        // Continue the animation loop until all circles reach their max radius
        if (!allCirclesComplete) {
            requestAnimationFrame(() => this.animateCircles());
        }
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
    effect.initCircles(); // Reinitialize circles to reset on resize
});

let playPause = 0; // Default to paused state
document.getElementById("playButton").addEventListener("click", function () {
    toggleIcon();
    if (playPause === 1) {
        effect.initCircles(); // Reinitialize circles (if needed)
        effect.animateCircles(); // Start animation
    }
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
    }
}

let intervalId; // to store the interval ID
document.getElementById("playButton").addEventListener("click", function() {
    toggleIcon();
    if(playPause==1){

        if (intervalId) {
            clearInterval(intervalId);
        }

        effect.updateCanvas();
        intervalId = setInterval(() => {
            if (playPause === 1) { // Check if playPause is still 1
                effect.updateCanvas();
            } else {
                clearInterval(intervalId); // Stop the interval if playPause is 0
            }
        }, 600);
    } else {
        // Stop the interval if playPause is 0
        clearInterval(intervalId);
    }
});