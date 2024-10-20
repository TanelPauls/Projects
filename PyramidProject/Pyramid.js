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
        const allHorisontalPaths=[];
        const allVerticalPaths=[];
        const uniqueHorisontalPaths = new Set(); // To track unique paths

        // Function to add a path only if it's unique
        function addPathIfUnique(x1, y1, x2, y2) {
            const pathKey = `${x1},${y1},${x2},${y2}`;
            if (!uniqueHorisontalPaths.has(pathKey)) {
                uniqueHorisontalPaths.add(pathKey);
                allHorisontalPaths.push([x1, y1, x2, y2]);
            }
        }

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
                    addPathIfUnique(xOld, yOld, x, y);
                    xOld=x;
                    yOld=y;
                }
            }
            ctx.beginPath();
            ctx.arc(startX + stonesInRow * stoneWidth, y, 2, 0, 2 * Math.PI);
            ctx.stroke();
            addPathIfUnique(xOld, yOld, startX + stonesInRow * stoneWidth, y);
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
                addPathIfUnique(xOld, lastRowY, x, lastRowY);
            }
            xOld = x; // Update old coordinates
        }
        let i=0;
        let newRow=1;
        let oldY=0;
        while (i < allHorisontalPaths.length) {
            let currentArray = allHorisontalPaths.splice(i, 1)[0];

            if(newRow==1 && allVerticalPaths.length==0){
                allVerticalPaths.push([currentArray[0],currentArray[1], currentArray[0],currentArray[1]+stoneHeight]);            
                allVerticalPaths.push([currentArray[2],currentArray[1], currentArray[2],currentArray[1]+stoneHeight]);
                oldY=currentArray[1];
                
            }
            else {
                allVerticalPaths.push([currentArray[0]+stoneWidth,currentArray[1], currentArray[0]+stoneWidth,currentArray[1]+stoneHeight]);
                if(currentArray[1]!=oldY){
                    allVerticalPaths.push([currentArray[0],currentArray[1], currentArray[0],currentArray[1]+stoneHeight]);
                    oldY=currentArray[1];
                } 
               
            }
            let newArray1 = [currentArray[0],currentArray[1],(currentArray[2]+currentArray[0])/2,currentArray[3]];  // Example: multiply by 10
            let newArray2 = [(currentArray[2]+currentArray[0])/2,currentArray[1],currentArray[2],currentArray[3]]; // Example: multiply by 100
            
            ctx.beginPath();
            ctx.arc((currentArray[2]+currentArray[0])/2, currentArray[1], 2, 0, 2 * Math.PI);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            
            allHorisontalPaths.splice(i, 0, newArray1, newArray2);
            i += 2;
        }
        this.drawPaths(allHorisontalPaths);
        allVerticalPaths.splice(-pyramidRows-1)
        this.drawPathsVertical(allVerticalPaths);

        //document.getElementById("horisontalPaths").innerText = JSON.stringify(allHorisontalPaths);
        //document.getElementById("verticalPaths").innerText = JSON.stringify(allVerticalPaths);
    }

    drawPaths(allHorisontalPaths) {
        for(let yi=0;yi<allHorisontalPaths.length;yi++){
            ctx.beginPath();
            ctx.moveTo(allHorisontalPaths[yi][0], allHorisontalPaths[yi][1]); // Move to top-left corner
            ctx.lineTo(allHorisontalPaths[yi][2], allHorisontalPaths[yi][3]);
            ctx.closePath(); // Close the path (back to the top-left corner)
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
    drawPathsVertical(allVerticalPaths) {
        for(let yi=0;yi<allVerticalPaths.length;yi++){
            ctx.beginPath();
            ctx.moveTo(allVerticalPaths[yi][0], allVerticalPaths[yi][1]); // Move to top-left corner
            ctx.lineTo(allVerticalPaths[yi][2], allVerticalPaths[yi][3]);
            ctx.closePath(); // Close the path (back to the top-left corner)
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});
