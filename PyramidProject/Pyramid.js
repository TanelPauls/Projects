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
        const allPaths=[];
        // Check min/max pyramid rows size
        if (pyramidRows < 3) { pyramidRows = 3; }
        else if (pyramidRows > 25) { pyramidRows = 25; }

        // Clear the canvas and reset global points array
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

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
            let xOld=0;
            let yOld=0;
            for (let stone = 0; stone < stonesInRow; stone++) {
                let x = startX + stone * stoneWidth;
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, 2 * Math.PI);
                ctx.stroke();
                if(xOld==0 && yOld==0){
                    xOld=x;
                    yOld=y;
                }
                else{
                    allPaths.push([xOld,yOld,x,y]);
                    xOld=x;
                    yOld=y;
                }
            }
            ctx.beginPath();
            ctx.arc(startX + stonesInRow * stoneWidth, y, 2, 0, 2 * Math.PI);
            ctx.stroke();
            allPaths.push([xOld,yOld,startX + stonesInRow * stoneWidth,y]);
            xOld=0;
            yOld=0;
            
        }
        let lastRowStones = pyramidRows; // The last row has `pyramidRows` stones
        let lastRowStartX = (this.canvasWidth - lastRowStones * stoneWidth) / 2;
        let lastRowY = (pyramidRows + 0.5) * stoneHeight; // One step lower than the last row
        let xOld=0;

        for (let stone = 0; stone < lastRowStones + 1; stone++) {
            let x = lastRowStartX + stone * stoneWidth;
            ctx.beginPath();
            ctx.arc(x, lastRowY, 2, 0, 2 * Math.PI);
            ctx.stroke();

            if (stone > 0) {
                // Connect the previous stone to the current stone
                allPaths.push([xOld, lastRowY, x, lastRowY]);
            }
            xOld = x; // Update old coordinates
        }
        this.drawPaths(allPaths);
    }

    drawPaths(allPaths) {
        for(let yi=0;yi<allPaths.length;yi++){
            ctx.beginPath();
            ctx.moveTo(allPaths[yi][0], allPaths[yi][1]); // Move to top-left corner
            ctx.lineTo(allPaths[yi][2], allPaths[yi][3]);
            ctx.closePath(); // Close the path (back to the top-left corner)
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
