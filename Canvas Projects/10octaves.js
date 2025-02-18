const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class CreateUpdateTable {
  constructor() {
    this.bigPoints = [];
    this.mediumPoints = [];
    this.smallPoints = [];
    this.updateCanvas();
    this.createHorizon();
    this.givenPoints = 8;
    this.step = (this.canvasWidth * 0.9) / this.givenPoints;
    this.createPoints();
  }
  stopCanvas() {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.circles = [];
    playPause = 0;
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
  createPoints() {
    let a = this.canvasHeight - this.canvasHeight * 0.1;
    this.bigPoints.push([0.05 * this.canvasWidth, Math.random() * a]);
    this.bigPoints.push([this.canvasWidth / 2, Math.random() * a]);
    this.bigPoints.push([
      this.canvasWidth - 0.05 * this.canvasWidth,
      Math.random() * a,
    ]);
    ctx.beginPath();
    ctx.moveTo(this.bigPoints[0][0], this.bigPoints[0][1]);
    ctx.lineTo(this.bigPoints[1][0], this.bigPoints[1][1]);
    ctx.strokeStyle = "red";

    ctx.stroke();
    ctx.moveTo(this.bigPoints[1][0], this.bigPoints[1][1]);
    ctx.lineTo(this.bigPoints[2][0], this.bigPoints[2][1]);
    ctx.strokeStyle = "red";
    ctx.stroke();

    let b = a / 4;
    this.mediumPoints.push([
      0.05 * this.canvasWidth,
      this.canvasHeight / 2 + Math.random() * 2 * b - b,
    ]);
    this.mediumPoints.push([
      0.05 * this.canvasWidth + this.step * 2,
      this.canvasHeight / 2 + Math.random() * 2 * b - b,
    ]);
    this.mediumPoints.push([
      this.canvasWidth / 2,
      this.canvasHeight / 2 + Math.random() * 2 * b - b,
    ]);
    this.mediumPoints.push([
      0.05 * this.canvasWidth + this.step * 6,
      this.canvasHeight / 2 + Math.random() * 2 * b - b,
    ]);
    this.mediumPoints.push([
      this.canvasWidth - 0.05 * this.canvasWidth,
      this.canvasHeight / 2 + Math.random() * 2 * b - b,
    ]);
    ctx.beginPath();
    ctx.moveTo(this.mediumPoints[0][0], this.mediumPoints[0][1]);
    ctx.lineTo(this.mediumPoints[1][0], this.mediumPoints[1][1]);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.moveTo(this.mediumPoints[1][0], this.mediumPoints[1][1]);
    ctx.lineTo(this.mediumPoints[2][0], this.mediumPoints[2][1]);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.moveTo(this.mediumPoints[2][0], this.mediumPoints[2][1]);
    ctx.lineTo(this.mediumPoints[3][0], this.mediumPoints[3][1]);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.moveTo(this.mediumPoints[3][0], this.mediumPoints[3][1]);
    ctx.lineTo(this.mediumPoints[4][0], this.mediumPoints[4][1]);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    let c = b / 2;
    this.smallPoints.push([
      0.05 * this.canvasWidth,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 2,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 3,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 4,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 5,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 6,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 7,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    this.smallPoints.push([
      0.05 * this.canvasWidth + this.step * 8,
      this.canvasHeight / 2 + Math.random() * 2 * c - c,
    ]);
    ctx.beginPath();
    ctx.moveTo(this.smallPoints[0][0], this.smallPoints[0][1]);
    ctx.lineTo(this.smallPoints[1][0], this.smallPoints[1][1]);
    ctx.lineTo(this.smallPoints[2][0], this.smallPoints[2][1]);
    ctx.lineTo(this.smallPoints[3][0], this.smallPoints[3][1]);
    ctx.lineTo(this.smallPoints[4][0], this.smallPoints[4][1]);
    ctx.lineTo(this.smallPoints[5][0], this.smallPoints[5][1]);
    ctx.lineTo(this.smallPoints[6][0], this.smallPoints[6][1]);
    ctx.lineTo(this.smallPoints[7][0], this.smallPoints[7][1]);
    ctx.lineTo(this.smallPoints[8][0], this.smallPoints[8][1]);
    ctx.strokeStyle = "gray";
    ctx.stroke();
  }
  createHorizon() {
    ctx.beginPath();
    ctx.moveTo(0.05 * this.canvasWidth, this.canvasHeight / 2);
    ctx.lineTo(
      this.canvasWidth - 0.05 * this.canvasWidth,
      this.canvasHeight / 2
    );
    ctx.strokeStyle = "black";
    ctx.stroke();

    for (let x = 0; x <= this.givenPoints; x++) {
      //this.bigPoints.push([0.05 * this.canvasWidth + x * step, 0]);
      ctx.beginPath();
      ctx.moveTo(
        0.05 * this.canvasWidth + x * this.step,
        this.canvasHeight / 2 + this.canvasHeight * 0.02
      );
      ctx.lineTo(
        0.05 * this.canvasWidth + x * this.step,
        this.canvasHeight / 2 - this.canvasHeight * 0.02
      );
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }
}
let playPause = 0;
const effect = new CreateUpdateTable();

effect.createHorizon();

window.addEventListener("resize", function () {
  effect.stopCanvas();
  effect.updateCanvas();
  effect.createHorizon();
});

function toggleIcon() {
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
  }
}

document.getElementById("playButton").addEventListener("click", function () {
  toggleIcon();
});

document.getElementById("stopButton").addEventListener("click", function () {
  effect.stopCanvas();
});
