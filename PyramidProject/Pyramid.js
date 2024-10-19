const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let allPoints = [];  // Global array to store points of all stones
let connectedEdges = {};  // Global object to store connected edge points for consistency

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
        connectedEdges = {};  // Clear connected edges to avoid duplication

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
                this.drawStone(x, y, stoneWidth, stoneHeight, row, stone);
            }
        }
    }

    drawStone(x, y, stoneWidth, stoneHeight, row, stoneIndex) {
        // Check if the edges are already calculated for connected stones
        const topEdgeKey = `${row - 1}-${stoneIndex}`;  // Key for stone above
        const leftEdgeKey = `${row}-${stoneIndex - 1}`; // Key for stone on the left

        let topEdgePoints = connectedEdges[topEdgeKey] || this.createEdgePoints(x, x + stoneWidth, y, 'horizontal', stoneHeight);
        let bottomEdgePoints = this.createEdgePoints(x, x + stoneWidth, y + stoneHeight, 'horizontal', stoneHeight);
        let leftEdgePoints = connectedEdges[leftEdgeKey] || this.createEdgePoints(y, y + stoneHeight, x, 'vertical', stoneWidth);
        let rightEdgePoints = this.createEdgePoints(y, y + stoneHeight, x + stoneWidth, 'vertical', stoneWidth);

        // Save the edges for future connected stones
        connectedEdges[`${row}-${stoneIndex}`] = bottomEdgePoints;
        connectedEdges[`${row}-${stoneIndex + 1}`] = rightEdgePoints;

        // Begin drawing the stone using the points
        ctx.beginPath();

        // Draw the top edge, unless it's shared
        if (!connectedEdges[topEdgeKey]) {
            this.drawEdge(topEdgePoints);
        }

        // Draw the right edge
        this.drawEdge(rightEdgePoints);

        // Draw the bottom edge
        this.drawEdge(bottomEdgePoints, true);

        // Draw the left edge, unless it's shared
        if (!connectedEdges[leftEdgeKey]) {
            this.drawEdge(leftEdgePoints, true);
        }

        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // Store the stone points in the global array
        allPoints.push({ topEdgePoints, bottomEdgePoints, leftEdgePoints, rightEdgePoints });
    }

    createEdgePoints(start, end, fixedValue, orientation, offsetLimit) {
        let numPoints;
        let offsetPercentage = 0.05;  // 5% random offset from the straight line

        // Determine the number of points based on orientation
        if (orientation === 'horizontal') {
            numPoints = Math.floor(Math.random() * (15 - 8 + 1)) + 8;  // Random between 8 and 15
        } else {
            numPoints = Math.floor(Math.random() * (9 - 4 + 1)) + 4;  // Random between 4 and 9
        }

        let points = [];
        let segmentLength = (end - start) / (numPoints - 1);  // Divide edge into equal segments

        for (let i = 0; i < numPoints; i++) {
            let pos = start + i * segmentLength;
            let offset = (Math.random() * offsetLimit * offsetPercentage * 2) - (offsetLimit * offsetPercentage);

            if (orientation === 'horizontal') {
                // Randomly offset the y-value for horizontal lines
                points.push({ x: pos, y: fixedValue + offset });
            } else {
                // Randomly offset the x-value for vertical lines
                points.push({ x: fixedValue + offset, y: pos });
            }
        }

        return points;
    }

    drawEdge(points, reverse = false) {
        if (reverse) {
            points = points.slice().reverse();  // Reverse the points for proper connection
        }
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
