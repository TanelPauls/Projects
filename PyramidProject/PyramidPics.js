const track = document.getElementById("image-track");
const images = document.querySelectorAll('#image-track > .image');
const background = document.getElementById('background');



window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousedown = (e) => {
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