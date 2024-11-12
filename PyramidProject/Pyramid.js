const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const header = document.querySelector('.header-container');

header.addEventListener('mouseenter', () => {
    header.classList.remove('hidden');
});
  
  // Start the fade-out after mouse leaves the header
header.addEventListener('mouseout', () => {
    
    setTimeout(() => {
      header.classList.add('hidden');
    }, 2500); // Delay to allow for brief transition before fading
});



let pyramidRows = parseInt(document.getElementById("s2").innerText);

function updatePyramidRowsDisplay() {
    document.getElementById("s2").innerText = pyramidRows;
}
document.getElementById("addRowToPyramid").addEventListener("click", () => {
    if (pyramidRows < 25) { // Max value check
      pyramidRows++;
      updatePyramidRowsDisplay();
      effect.updateCanvas();
    }
});
document.getElementById("removeRowFromPyramid").addEventListener("click", () => {
    if (pyramidRows > 3) { // Min value check
      pyramidRows--;
      updatePyramidRowsDisplay();
      effect.updateCanvas();
    }
});


let pOnRockMin = 0
let pOnRockMax = pOnRockMin+3;

function updatePyramidPointsDisplay() {
    document.getElementById("s4").innerText = `Random (${pOnRockMin}-${pOnRockMax})`;
}

document.getElementById("addPointToPyramid").addEventListener("click", () => {
    if(pOnRockMin==0 && pOnRockMax==0){
        pOnRockMax=1;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if(pOnRockMin==0 && pOnRockMax==1){
        pOnRockMax=2;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if(pOnRockMin==0 && pOnRockMax==2){
        pOnRockMax=3;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if (pOnRockMin < 12) {
        pOnRockMin++;
        if(pOnRockMax<12){
            pOnRockMax++;
        }
      updatePyramidPointsDisplay()
      effect.updateCanvas();
    }
});
document.getElementById("removePointFromPyramid").addEventListener("click", () => {
    if(pOnRockMin==12 && pOnRockMax==12){
        pOnRockMin=11;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if(pOnRockMin==11 && pOnRockMax==12){
        pOnRockMin=10;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if(pOnRockMin==10 && pOnRockMax==12){
        pOnRockMin=9;
        updatePyramidPointsDisplay()
        effect.updateCanvas();
    }
    else if (pOnRockMax > 0) {
        pOnRockMax--;
        if(pOnRockMin>0){pOnRockMin--;}
        
      updatePyramidPointsDisplay()
      effect.updateCanvas();
    }
});

let sDepth = 1.2

function updatePyramidIndentDisplay() {
    document.getElementById("s6").innerText = sDepth.toFixed(1);
}
document.getElementById("raiseIndent").addEventListener("click", () => {
    if (sDepth < 10) {
        sDepth = Math.min(10, parseFloat((sDepth + 0.2).toFixed(1))); // Ensure it doesn't exceed 10 and rounds to 1 decimal
        updatePyramidIndentDisplay();
        effect.updateCanvas();
    }
});
document.getElementById("reduceIndent").addEventListener("click", () => {
    if (sDepth > 0) {
        sDepth = Math.max(0, parseFloat((sDepth - 0.2).toFixed(1))); // Ensure non-negative and fixed to 1 decimal
        updatePyramidIndentDisplay();
        effect.updateCanvas();
    }
});

let CircRadius = 0;

function updatePyramidCircDisplay() {
    document.getElementById("s8").innerText = CircRadius.toFixed(1);
}
document.getElementById("raiseCirc").addEventListener("click", () => {
    if (CircRadius < 2) {
        CircRadius=CircRadius+0.1;
        updatePyramidCircDisplay();
      effect.updateCanvas();
    }
});
document.getElementById("reduceCirc").addEventListener("click", () => {
    if (CircRadius > 0) {
        CircRadius = Math.max(0, parseFloat((CircRadius - 0.1).toFixed(1)));
        updatePyramidCircDisplay();
        effect.updateCanvas();
    }
});


function randomSegmentsBetween(a, b, n) {
    // Generate n-1 random points between a and b
    let points = [];
    for (let i = 0; i < n - 1; i++) {
        points.push(Math.random() * (b - a) + a);
    }
    
    // Sort the points
    points.sort((x, y) => x - y);
    
    // Add the endpoints a and b
    points.unshift(a);
    points.push(b);
    
    // Calculate the segment lengths
    return points;
}

class CreateUpdateTable {
    constructor() {
        this.updateCanvas();
    }

    updateCanvas() {
        // Update the canvas size
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;

        

        
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
                ctx.arc(x, y, CircRadius, 0, 2 * Math.PI);
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
            ctx.arc(startX + stonesInRow * stoneWidth, y, CircRadius, 0, 2 * Math.PI);
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
            ctx.arc(x, lastRowY, CircRadius, 0, 2 * Math.PI);
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
            ctx.arc((currentArray[2]+currentArray[0])/2, currentArray[1], CircRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            
            allHorisontalPaths.splice(i, 0, newArray1, newArray2);
            i += 2;
        }
        this.drawPaths(allHorisontalPaths);
        allVerticalPaths.splice(-pyramidRows-1)
        this.drawPathsVertical(allVerticalPaths);
    }

    drawPaths(allHorisontalPaths) {
        for(let yi=0;yi<allHorisontalPaths.length;yi++){
            const randomN=sDepth;

            let randomInt=Math.floor(Math.random() * (pOnRockMax - pOnRockMin + 1)) + pOnRockMin;
            if(randomInt%2==0){randomInt=randomInt/2;}
            else{randomInt=(randomInt-1)/2;}
            const newSegment=randomSegmentsBetween(allHorisontalPaths[yi][0],allHorisontalPaths[yi][2],randomInt);
            const prevPoint=[allHorisontalPaths[yi][0], allHorisontalPaths[yi][1]];
            
            for(let m=1;m<newSegment.length -1;m++){
                ctx.beginPath();
                let randomPoint=allHorisontalPaths[yi][1]+(Math.random() * 2 * randomN) - randomN;
                ctx.arc(newSegment[m],randomPoint, CircRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(prevPoint[0],prevPoint[1]);
                ctx.lineTo(newSegment[m], randomPoint);      
                ctx.strokeStyle = 'black';
                ctx.stroke();
                prevPoint[0] = newSegment[m];
                prevPoint[1] = randomPoint;
            } 
            ctx.beginPath();
            ctx.moveTo(prevPoint[0],prevPoint[1]);
            ctx.lineTo(allHorisontalPaths[yi][2], allHorisontalPaths[yi][1]); 
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
    drawPathsVertical(allVerticalPaths) {
        for(let yi=0;yi<allVerticalPaths.length;yi++){
            const randomN=sDepth;
            const randomInt=Math.floor(Math.random() * (pOnRockMax - pOnRockMin + 1)) + pOnRockMin;
            const newSegment=randomSegmentsBetween(allVerticalPaths[yi][1],allVerticalPaths[yi][3],randomInt);
            const prevPoint=[allVerticalPaths[yi][0], newSegment[0]];
            
            
            for(let m=1;m<newSegment.length -1;m++){
                ctx.beginPath();
                let randomPoint=allVerticalPaths[yi][0]+(Math.random() * 2 * randomN) - randomN;
                ctx.arc(randomPoint,newSegment[m], CircRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.stroke();
                

                ctx.beginPath();
                ctx.moveTo(prevPoint[0],prevPoint[1]);
                ctx.lineTo(randomPoint, newSegment[m]);    
                ctx.strokeStyle = 'black';
                ctx.stroke();
                prevPoint[0] = randomPoint;
                prevPoint[1] = newSegment[m];
            } 
            ctx.beginPath();
            ctx.moveTo(prevPoint[0],prevPoint[1]);
            ctx.lineTo(allVerticalPaths[yi][0], allVerticalPaths[yi][3]); 
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
}


let playPause=0;
function toggleIcon() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    // Toggle visibility
    if (playIcon.style.display === 'none') {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playPause=0;
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playPause=1;
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






const effect = new CreateUpdateTable();

window.addEventListener("resize", function () {
    effect.updateCanvas();
});

// Google maps search

function searchCoordinates() {
    let lat = document.getElementById('latitude').value;
    let long = document.getElementById('longitude').value;
    
    // Set default coordinates if inputs are empty
    if (!lat || !long) {
      lat = 29.9792458;  // Default latitude
      long = 31.1349731; // Default longitude
    }

    // Set zoom level and satellite view
    const zoomLevel = 18;
    
    // Open Google Maps with the coordinates, satellite view, and zoom level
    window.open(`https://www.google.com/maps/place/${lat},${long}/@${lat},${long},${zoomLevel}z/data=!3m1!1e3`, '_blank');
}
function decimalToDMS(decimalDegrees, direction) {
    // Get degrees
    let degrees = Math.floor(Math.abs(decimalDegrees));
    
    // Convert remaining decimal part to minutes
    let minutesDecimal = (Math.abs(decimalDegrees) - degrees) * 60;
    let minutes = Math.floor(minutesDecimal);
    
    // Convert remaining decimal part to seconds
    let seconds = ((minutesDecimal - minutes) * 60).toFixed(2); // Rounded to 2 decimal places
    
    // Add direction if provided (e.g., N/S/E/W) and handle negative degrees
    let dir = direction || (decimalDegrees >= 0 ? "N" : "S");
    
    return `${degrees}° ${minutes}' ${seconds}" ${dir}`;
}


function doMaths() {
    let eCoord=0;
    document.getElementById("calcButton").disabled = true;
    document.getElementById("searchButton").disabled = false;
    eCoord=(29.9792458+(Math.PI/Math.E)).toFixed(7);
    document.getElementById('latitude').value = 29.9792458;
    document.getElementById("myDiv").innerHTML += "<br>Koordinaadid:<br>29.9792458° N<br> ("+decimalToDMS(29.9792458)+")";

    document.getElementById("myDiv2").innerHTML += eCoord;
    document.getElementById('longitude').value = eCoord;
    document.getElementById("myDiv2").innerHTML += "<br><br>Koordinaadid:<br>"+eCoord+" ° E<br> ("+decimalToDMS(eCoord,"E")+")";
    document.getElementById("searchButton").innerHTML = "Google Maps Search<br>N: "+29.9792458+"°<br>E: "+eCoord+"°";
    
}