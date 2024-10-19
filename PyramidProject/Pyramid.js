const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

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

        // Clear the canvas
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Calculate the stone width and height
        let stoneWidth = this.canvasWidth / (pyramidRows + 4); // +4 for the 2 stone width padding on each side
        let stoneHeight = this.canvasHeight / (pyramidRows + 4); // +4 for the 2 stone height padding on top and bottom

        // Loop through the rows of the pyramid (from the top row to the bottom)
        for (let row = 0; row < pyramidRows; row++) {
            // Calculate the number of stones in the current row (it increases with each row)
            let stonesInRow = row + 1;

            // Calculate the starting x position to center the row, considering the left padding
            let startX = (this.canvasWidth - stonesInRow * stoneWidth) / 2;

            // Calculate the y position for the current row, starting from the top with padding
            let y = (row + 2) * stoneHeight; // +2 for the 2 stone height padding at the top

            // Loop through the stones in the current row
            for (let stone = 0; stone < stonesInRow; stone++) {
                // Calculate the x position of the stone
                let x = startX + stone * stoneWidth;

                // Draw the stone (a rectangle)
                this.drawStone(x, y, stoneWidth, stoneHeight);
            }
        }
    }

    drawStone(x, y, stoneWidth, stoneHeight) {
        // Draw a rectangle for the stone
        ctx.beginPath();
        ctx.rect(x, y, stoneWidth, stoneHeight);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});

