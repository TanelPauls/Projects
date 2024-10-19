const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let allPoints = [];  // Global array to store points of all stones

class CreateUpdateTable {
    constructor() {
        this.updateCanvas();
    }

    updateCanvas() {
        // Update the canvas size
        canvas.width = 500;
        canvas.height = 500;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;

        let pyramidRows = parseInt(document.getElementById("pyrRows").innerText);

        // Check min/max pyramid rows size
        if (pyramidRows < 3) { pyramidRows = 3; }
        else if (pyramidRows > 25) { pyramidRows = 25; }

        // Clear the canvas and reset global points array
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        allPoints = [];

        // Calculate the stone width and height
        let stoneWidth = this.canvasWidth / (pyramidRows + 1); // +1 for the 0.5 stone width padding on each side
        let stoneHeight = this.canvasHeight / (pyramidRows + 1); // +1 for the 0.5 stone height padding on top and bottom

        // Loop through the rows of the pyramid (from the top row to the bottom)
        for (let row = 0; row < pyramidRows; row++) {
            // Calculate the number of stones in the current row (it increases with each row)
            let stonesInRow = row + 1;

            // Calculate the starting x position to center the row, considering the 0.5 stone width padding
            let startX = (this.canvasWidth - stonesInRow * stoneWidth) / 2;

            // Calculate the y position for the current row, considering the 0.5 stone height padding
            let y = (row + 0.5) * stoneHeight; // +0.5 for the 0.5 stone height padding at the top

            // Loop through the stones in the current row
            for (let stone = 0; stone < stonesInRow; stone++) {
                // Calculate the x position of the stone
                let x = startX + stone * stoneWidth;

                // Draw the stone (a rectangle using points)
                this.drawStone(x, y, stoneWidth, stoneHeight);
            }
        }
    }

    drawStone(x, y, stoneWidth, stoneHeight) {
        // Create an array of points for the 4 corners of the stone
        let points = [
            { x: x, y: y }, // top-left
            { x: x + stoneWidth, y: y }, // top-right
            { x: x + stoneWidth, y: y + stoneHeight }, // bottom-right
            { x: x, y: y + stoneHeight } // bottom-left
        ];

        // Draw the stone outline using the points
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y); // Move to top-left corner
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y); // Draw line to each point
        }
        ctx.closePath(); // Close the path (back to the top-left corner)
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // Push the array of points into the global array allPoints
        allPoints.push(points);
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
