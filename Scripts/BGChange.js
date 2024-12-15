buttons = Array.from(document.getElementsByClassName("button")[0].children);
bg = document.getElementsByClassName("bg");
slides = document.getElementsByClassName("slide")[0].children;
first = true;
buttons.forEach(button => {
    button.onclick = function() {
        if(first){
            bg[0].style.backgroundImage = slides[1].style.backgroundImage;
            bg[1].style.opacity = 0;
        }
        else {
            bg[1].style.backgroundImage = slides[1].style.backgroundImage;
            bg[1].style.opacity = 1;
        }
        first = !first;
    }
});