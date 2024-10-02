var canvas;
var ctx;

window.onload=function(){
    canvas = document.getElementById('fallingSand');
    ctx = canvas.getContext('2d');
    setInterval(mainloop,1000/50);
}

function mainloop(){
    colorRect(0,0,250,200,"red")
}

function colorRect(x,y,w,h,c){
    ctx.fillStyle=c;
    ctx.fillRect(x,y,w,h);
}
