const track = document.getElementById("image-track");
const image1 = document.getElementById('bg1');
const image2 = document.getElementById('bg2');
const image3 = document.getElementById('bg3');
const image4 = document.getElementById('bg4');
const image5 = document.getElementById('bg5');
const image6 = document.getElementById('bg6');
const image7 = document.getElementById('bg7');
const image8 = document.getElementById('bg8');
const bgElements = document.querySelectorAll('[id^="bg"]');
const back1Element = document.getElementById('back1');
const back2Element = document.getElementById('back2');
const back3Element = document.getElementById('back3');
const back4Element = document.getElementById('back4');
const back5Element = document.getElementById('back5');
const back6Element = document.getElementById('back6');
const back7Element = document.getElementById('back7');
const back8Element = document.getElementById('back8');
const images = document.querySelectorAll('.image');
let clicked=0;

images.forEach(image => {
    image.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent the image from interfering with drag logic
    });
});

function clearClicked() {
    bgElements.forEach(function(element) {
        element.classList.remove('clicked');
    });
}
function checkBack(){
    clicked =0;
    bgElements.forEach(function(element){
        if(element.classList.contains('clicked')){
            clicked=1;
        }
    });    
}

image1.addEventListener('mouseover', function() {
    image1.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back1Element.style.display = 'block';
    }
});
image1.addEventListener('mouseout', function() {
    image1.classList.remove('hovered');
    if(clicked==0){
    back1Element.style.display = 'none';
    }
});
image1.addEventListener('click', function() {
    if(clicked==1 && back1Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'block';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image1.classList.toggle('clicked');
        back1Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image1.classList.toggle('clicked');
        back1Element.style.display = 'block';
        clicked=1;
    }
});

image2.addEventListener('mouseover', function() {
    image2.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back2Element.style.display = 'block';
    }
});
image2.addEventListener('mouseout', function() {
    image2.classList.remove('hovered');
    if(clicked==0){
    back2Element.style.display = 'none';
    }
});
image2.addEventListener('click', function() {
    if(clicked==1 && back2Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'block';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image2.classList.toggle('clicked');
        back2Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image2.classList.toggle('clicked');
        back2Element.style.display = 'block';
        clicked=1;
    }
});

image3.addEventListener('mouseover', function() {
    image3.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back3Element.style.display = 'block';
    }
});
image3.addEventListener('mouseout', function() {
    image3.classList.remove('hovered');
    if(clicked==0){
    back3Element.style.display = 'none';
    }
});
image3.addEventListener('click', function() {
    if(clicked==1 && back3Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'block';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image3.classList.toggle('clicked');
        back3Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image3.classList.toggle('clicked');
        back3Element.style.display = 'block';
        clicked=1;
    }
});

image4.addEventListener('mouseover', function() {
    image4.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back4Element.style.display = 'block';
    }
});
image4.addEventListener('mouseout', function() {
    image4.classList.remove('hovered');
    if(clicked==0){
    back4Element.style.display = 'none';
    }
});
image4.addEventListener('click', function() {
    if(clicked==1 && back4Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'block';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image4.classList.toggle('clicked');
        back4Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image4.classList.toggle('clicked');
        back4Element.style.display = 'block';
        clicked=1;
    }
});

image5.addEventListener('mouseover', function() {
    image5.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back5Element.style.display = 'block';
    }
});
image5.addEventListener('mouseout', function() {
    image5.classList.remove('hovered');
    if(clicked==0){
    back5Element.style.display = 'none';
    }
});
image5.addEventListener('click', function() {
    if(clicked==1 && back5Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'block';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image5.classList.toggle('clicked');
        back5Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image5.classList.toggle('clicked');
        back5Element.style.display = 'block';
        clicked=1;
    }
});

image6.addEventListener('mouseover', function() {
    image6.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back6Element.style.display = 'block';
    }
});
image6.addEventListener('mouseout', function() {
    image6.classList.remove('hovered');
    if(clicked==0){
    back6Element.style.display = 'none';
    }
});
image6.addEventListener('click', function() {
    if(clicked==1 && back6Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'block';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image6.classList.toggle('clicked');
        back6Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image6.classList.toggle('clicked');
        back6Element.style.display = 'block';
        clicked=1;
    }
});

image7.addEventListener('mouseover', function() {
    image7.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back7Element.style.display = 'block';
    }
});
image7.addEventListener('mouseout', function() {
    image7.classList.remove('hovered');
    if(clicked==0){
    back7Element.style.display = 'none';
    }
});
image7.addEventListener('click', function() {
    if(clicked==1 && back7Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'block';
        back8Element.style.display = 'none';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image7.classList.toggle('clicked');
        back7Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image7.classList.toggle('clicked');
        back7Element.style.display = 'block';
        clicked=1;
    }
});

image8.addEventListener('mouseover', function() {
    image8.classList.add('hovered');
    checkBack();
    if(clicked==0){
        back8Element.style.display = 'block';
    }
});
image8.addEventListener('mouseout', function() {
    image8.classList.remove('hovered');
    if(clicked==0){
    back8Element.style.display = 'none';
    }
});
image8.addEventListener('click', function() {
    if(clicked==1 && back8Element.style.display == 'block'){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'block';
        clicked=0;
    }
    else if(clicked==1){
        clearClicked();
        back1Element.style.display = 'none';
        back2Element.style.display = 'none';
        back3Element.style.display = 'none';
        back4Element.style.display = 'none';
        back5Element.style.display = 'none';
        back6Element.style.display = 'none';
        back7Element.style.display = 'none';
        back8Element.style.display = 'none';
        image8.classList.toggle('clicked');
        back8Element.style.display = 'block';
        clicked=1;
    }
    else{
        clearClicked();
        image8.classList.toggle('clicked');
        back8Element.style.display = 'block';
        clicked=1;
    }
});

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousedown = (e) => {
    e.preventDefault;
    track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Clamp the value between -100 and 0
    track.dataset.percentage = Math.max(Math.min(nextPercentage, 0), -100);

    // Apply the clamped percentage to the transform

    //track.style.transform = `translate(${track.dataset.percentage}%, -50%)`;
    track.animate({
        transform: `translate(${track.dataset.percentage}%, -50%)`},{
        duration:1200,fill:"forwards"});

    // Adjust object position for each image based on the clamped value
    for (const image of track.getElementsByClassName("image")) {
        //image.style.objectPosition = `${parseFloat(track.dataset.percentage) + 100}% 50%`;
        image.animate({
            objectPosition:`${parseFloat(track.dataset.percentage) + 100}% center`},{
            duration:1200,fill:"forwards"});
    
    }
};
