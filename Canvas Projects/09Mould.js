const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class CreateUpdateTable {
  constructor() {
    this.updateCanvas();
    this.map = [];
    this.hexes = 7;
  }
  stopCanvas() {
    this.map = [];
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
  updateCanvas() {
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
  testing() {
    let diameter =
      Math.min(this.canvasWidth, this.canvasHeight) / (this.hexes + 1);
    let radius = diameter / Math.sqrt(3);
    ctx.beginPath();
    /*     ctx.moveTo(0, 0); // Start at (x, y)
    ctx.lineTo(this.canvasWidth / 2, this.canvasHeight / 2); // Draw to (x2, y2)
    ctx.stroke(); */ // Render the line
    for (let y = 0; y < this.hexes; y++) {
      for (let x = 0; x < this.hexes; x++) {
        if (this.hexes % 2 != 0) {
          if (x + y < (this.hexes - 1) / 2) {
            this.map.push([null]);
          } else if (x + y > ((this.hexes - 1) / 2) * ((this.hexes - 1) / 2)) {
            this.map.push([null]);
          } else {
            if (y % 2 != 0) {
              this.map.push([
                x,
                y,
                this.canvasWidth / 2 -
                  ((this.hexes - 1) / 2) * diameter +
                  x * diameter,
                /* diameter + x * diameter -(diameter/2)*x, */
                this.canvasHeight / 2,
                /* this.canvasHeight / 2 -
                      ((this.hexes - 1) / 2) * ((radius * 3) / 2) +
                      (y * radius * 3) / 2, */
              ]);
            } else {
              this.map.push([
                x,
                y,
                this.canvasWidth / 2 -
                  ((this.hexes - 1) / 2) * diameter +
                  diameter / 2 +
                  x * diameter,
                100,
                /* this.canvasHeight / 2 -
                          ((this.hexes - 1) / 2) * ((radius * 3) / 2) +
                          (y * radius * 3) / 2, */
              ]);
            }
          }
        } else this.map.push([x, y]);
      }
    }
    for (let m = 0; m < this.map.length; m++) {
      this.drawHex(this.map[m][2], this.map[m][3], radius);
    }
    console.log(this.map);
    this.drawCirc({
      x: this.canvasWidth / 2,
      y: this.canvasHeight / 2,
      radius: (1 * Math.min(this.canvasWidth, this.canvasHeight)) / 14,
    });
    this.drawCirc({
      x: this.canvasWidth / 2,
      y: this.canvasHeight / 2,
      radius: (3 * Math.min(this.canvasWidth, this.canvasHeight)) / 14,
    });
    this.drawCirc({
      x: this.canvasWidth / 2,
      y: this.canvasHeight / 2,
      radius: (5 * Math.min(this.canvasWidth, this.canvasHeight)) / 14,
    });
    this.drawHex(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      (7 * Math.min(this.canvasWidth, this.canvasHeight)) / 14
    );
  }
  drawHex(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  /* createNewCircle() {
    this.circles.push({
      x: this.canvasWidth / 2,
      y: this.canvasHeight / 2,
      radius: 40,
    });
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 0);
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 60);
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 120);
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 180);
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 240);
    this.drawLine(this.canvasWidth / 2, this.canvasHeight / 2, 40, 300);
    
  } */
  /* drawLine(x, y, length, angle) {
    // Convert angle to radians
    const radians = (angle * Math.PI) / 180;

    // Calculate the endpoint
    const x2 = x + length * Math.cos(radians);
    const y2 = y + length * Math.sin(radians);

    // Begin drawing
    ctx.beginPath();
    ctx.moveTo(x, y); // Start at (x, y)
    ctx.lineTo(x2, y2); // Draw to (x2, y2)
    ctx.stroke(); // Render the line
  } */

  drawCirc(circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  /* animateCircles() {
    if (playPause === 0) return;
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    if (this.circles.length == 0 || !Array.isArray(this.circles)) {
      this.circles = [];
      this.createNewCircle();
      console.log(this.circles);
      this.drawCirc(this.circles[0]);
    }
  } */
}
//let playPause = 0;
const effect = new CreateUpdateTable();
effect.updateCanvas();

window.addEventListener("resize", function () {
  //effect.stopCanvas();
  effect.updateCanvas();
});

/* function toggleIcon() {
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");

  // Toggle visibility and playPause state
  if (playIcon.style.display === "none") {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    playPause = 0;
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    playPause = 1;
    effect.animateCircles();
  }
} */

document.getElementById("playButton").addEventListener("click", function () {
  effect.testing();
  //toggleIcon();
});

document.getElementById("stopButton").addEventListener("click", function () {
  effect.stopCanvas();
});
