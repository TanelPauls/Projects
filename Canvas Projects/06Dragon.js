let segments=[];
function setup(){
    createCanvas(400,400);

    let b=createVector(200, 100);
    let a=createVector(200, 300);
    segments.push(new segment(a, b));
}
function mousePressed() {
    let s = segments[segments.length - 1]; // Get the last segment
    let newS = s.rotate(s.a); // Rotate around point 'a'
    segments.push(newS); // Push the new segment
}
function draw() {
    background(220);
    for(let s of segments){
        s.show();
    }
}