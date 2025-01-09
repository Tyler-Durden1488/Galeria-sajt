var items = document.querySelectorAll(".item");
const image = document.getElementById("viewer-image");
var imageViewer = document.querySelector(".image-viewer");
items.forEach(item => {
    item.onclick = () => {
        image.setAttribute("src", item.style.backgroundImage.slice(5,-2));
        imageViewer.style.visibility = "visible";
        imageViewer.style.opacity = 1;
    }
});

const main = document.getElementById("viewer-main");
let leftPressed = false;
const scalingSpeed = 0.01;
var maxLeft = 60, maxTop = 60;
var xDown = null, yDown = null, xImage = 0, yImage = 0, scale = 1;
main.onmousedown = (nigger) => {
    if(!nigger.button) {
        leftPressed = true;
        xDown = nigger.offsetX - image.offsetLeft;
        yDown = nigger.offsetY - image.offsetTop;
        main.style.cursor = 'grabbing';
    }
}
document.onmouseup = () => {
    leftPressed = false;
    main.style.cursor = 'grab';
}
main.onmousemove = (nigger) => {
    if(leftPressed) {
        bounds = image.getBoundingClientRect();

        xImage = nigger.offsetX - xDown;
        yImage = nigger.offsetY - yDown;

        console.log("x: " + xImage + " | y:" + yImage);
        image.style.left = `${xImage}px`;
        image.style.top = `${yImage}px`;
    }
}
main.onwheel = (nigger) => {
    nigger.preventDefault();
    scale += nigger.deltaY * -scalingSpeed;
    scale = Math.min(Math.max(1, scale), 5)
    if(rotation == 0 || !(rotation%360)){
        const rect = image.getBoundingClientRect();

        const mouseX = nigger.offsetX - rect.left;
        const mouseY = nigger.offsetY - rect.top;
    
        const originX = (mouseX / rect.width) * 100;
        const originY = (mouseY / rect.height) * 100;
    
        image.style.transformOrigin = `${originX}% ${originY}%`;
    }
    else {
        image.style.transformOrigin = `50% 50%`;
    }

    if (scale == 1) {
        image.style.left = 'auto';
        image.style.top = 'auto';
    }

    image.style.transform = `scale(${scale})`
    bounds = image.getBoundingClientRect();
}

var zoomIn = document.querySelector(".zoom-in");
var zoomOut = document.querySelector(".zoom-out");
var rotateLeft = document.querySelector(".rotate-left");
var rotateRight = document.querySelector(".rotate-right");
var toFull = document.querySelector(".to-full");
var resizeByWidth = document.querySelector(".resize-by-width");
var close = document.querySelector(".close-icon");
var rotation = 0;
zoomIn.onclick = () =>{
    scale+=0.1;
    image.style.transformOrigin = `50% 50%`;
    scale = Math.min(Math.max(1, scale), 5)    
    image.style.transform = `scale(${scale})`;
}
zoomOut.onclick = () =>{
    scale-=0.1;
    image.style.transformOrigin = `50% 50%`;
    scale = Math.min(Math.max(1, scale), 5)
    image.style.transform = `scale(${scale})`;
}
rotateLeft.onclick = () =>{
    rotation-=45;
    image.style.transformOrigin = `50% 50%`;
    image.style.rotate = rotation+"deg";
}
rotateRight.onclick = () =>{
    rotation+=45;
    image.style.transformOrigin = `50% 50%`;
    image.style.rotate = rotation+"deg";
}
toFull.onclick = () =>{
    image.setAttribute("style", "");
}
resizeByWidth.onclick = () =>{
    image.setAttribute("style", "");
    image.style.width = `100%`;
    image.style.height = `auto`;
}
close.onclick = () => {
    imageViewer.style.opacity = 0;

    setTimeout(()=>{
        imageViewer.style.visibility = "hidden";
        image.setAttribute("style", "");
    }, 400)
}