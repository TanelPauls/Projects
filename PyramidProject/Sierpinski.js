const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const sierpinskiDepth=4;

class CreateUpdateTable {
    constructor() {
        this.updateCanvas();

        canvas.addEventListener("mousedown", (event) => this.handleMouseClick(event));    
    }
    
    findTriangleContainingPoint(triangles, point) {
        let smallestTriangle = null;
        let smallestDepth = Infinity;

        for (let i = 0; i < triangles.length; i++) {
            const [a, b, c] = triangles[i];
            const depth = a[2]; // Each point in `triangles` has [x, y, depth]

            // Check if the point is within the triangle defined by a, b, c
            if (this.pointInTriangle(point, [a[0], a[1]], [b[0], b[1]], [c[0], c[1]])) {
                // If this triangle has a smaller depth (more nested), select it
                if (depth < smallestDepth) {
                    smallestTriangle = [a, b, c];
                    smallestDepth = depth;
                }
            }
        }

        // Draw circles on the vertices of the smallest containing triangle
        if (smallestTriangle) {
            const [a, b, c] = smallestTriangle;
            this.drawCirc(a[0], a[1], 5);
            this.drawCirc(b[0], b[1], 5);
            this.drawCirc(c[0], c[1], 5);
        }
    }

    handleMouseClick(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // `allPoints` stores triangles as [[x1, y1, depth], [x2, y2, depth], [x3, y3, depth]]
        this.findTriangleContainingPoint(this.allPoints, [mouseX, mouseY]);
    }

    updateCanvas() {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    
        const centerX = this.canvasWidth / 2;
        const centerY = this.canvasHeight / 2;
        this.radiusInner = Math.min(this.canvasWidth, this.canvasHeight) / 3;
        this.radiusOuter = Math.min(this.canvasWidth, this.canvasHeight) / 2.1;
    
        this.drawCirc(centerX, centerY, this.radiusInner);
        this.drawCirc(centerX, centerY, this.radiusOuter);
    
        const topX = centerX;
        const topY = centerY - this.radiusInner;
        const sideLength = Math.sqrt(3) * this.radiusInner;
    
        const angle1 = (60 * Math.PI) / 180;
        const angle2 = (120 * Math.PI) / 180;
    
        const bottomX1 = topX + sideLength * Math.cos(angle1);
        const bottomY1 = topY + sideLength * Math.sin(angle1);
        const bottomX2 = topX + sideLength * Math.cos(angle2);
        const bottomY2 = topY + sideLength * Math.sin(angle2);

        this.allPoints = [];
        this.sierpinskiDepth = sierpinskiDepth;

        // Draw and store the initial triangle with full depth
        this.allPoints.push([
            [topX, topY, this.sierpinskiDepth],
            [bottomX1, bottomY1, this.sierpinskiDepth],
            [bottomX2, bottomY2, this.sierpinskiDepth]
        ]);

        this.drawSierpinski(topX, topY, bottomX1, bottomY1, bottomX2, bottomY2, this.sierpinskiDepth);
    }

    drawCirc(centerX, centerY, radius) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#0000ff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    midPoint(x1, y1, x2, y2) {
        return {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2
        };
    }

    drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        
        // Set the fill color and fill the triangle
        ctx.fillStyle = color;
        ctx.fill();
    
        // Optional: Outline the triangle with a stroke
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    drawSierpinski(x1, y1, x2, y2, x3, y3, depth) {
        if (depth === 0) {
            this.drawTriangle(x1, y1, x2, y2, x3, y3,"black");
            return;
        }

        const mid1 = this.midPoint(x1, y1, x2, y2);
        const mid2 = this.midPoint(x2, y2, x3, y3);
        const mid3 = this.midPoint(x3, y3, x1, y1);

        // Store each smaller triangle with the current depth
        this.allPoints.push([
            [x1, y1, depth],
            [mid1.x, mid1.y, depth],
            [mid3.x, mid3.y, depth]
        ]);
        this.allPoints.push([
            [mid1.x, mid1.y, depth],
            [x2, y2, depth],
            [mid2.x, mid2.y, depth]
        ]);
        this.allPoints.push([
            [mid3.x, mid3.y, depth],
            [mid2.x, mid2.y, depth],
            [x3, y3, depth]
        ]);

        this.drawSierpinski(x1, y1, mid1.x, mid1.y, mid3.x, mid3.y, depth - 1);
        this.drawSierpinski(mid1.x, mid1.y, x2, y2, mid2.x, mid2.y, depth - 1);
        this.drawSierpinski(mid3.x, mid3.y, mid2.x, mid2.y, x3, y3, depth - 1);
    }

    pointInTriangle(point, a, b, c) {
        const [px, py] = point;
        const [ax, ay] = a;
        const [bx, by] = b;
        const [cx, cy] = c;
    
        const v0x = cx - ax;
        const v0y = cy - ay;
        const v1x = bx - ax;
        const v1y = by - ay;
        const v2x = px - ax;
        const v2y = py - ay;
    
        const dot00 = v0x * v0x + v0y * v0y;
        const dot01 = v0x * v1x + v0y * v1y;
        const dot02 = v0x * v2x + v0y * v2y;
        const dot11 = v1x * v1x + v1y * v1y;
        const dot12 = v1x * v2x + v1y * v2y;
    
        const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    
        return (u >= 0) && (v >= 0) && (u + v < 1);
    }
}

const effect = new CreateUpdateTable();

window.addEventListener("resize", () => effect.updateCanvas());
