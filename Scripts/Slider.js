let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let sliderContainer = document.querySelector('.container');
let bottomGallery = document.querySelectorAll('.image-template');
let inAnimation = false;
bottomGallery.forEach(image => {
    image.onclick = function() {
        
        if(!inAnimation){
            let items = Array.from(document.querySelectorAll('.item'));
            let moveToImage = items.findIndex((element) => element.style.backgroundImage == image.style.backgroundImage);
            if(moveToImage != 1){
                inAnimation = true;
                let slideRef = document.querySelector('.slide');
                let slideRefChildren = slideRef.children;
                let old = slideRefChildren[0];
                if(moveToImage != 0) 
                {
                    slideRef.replaceChild(slideRefChildren[moveToImage], slideRefChildren[0]);
                    slideRef.appendChild(old);
                }
                slideRefChildren[1].style.opacity = 0;
                setTimeout(()=>{
                    slideRef.prepend(slideRefChildren[1]);
                    slideRefChildren[0].setAttribute("style", "background-image: "+slideRefChildren[0].style.backgroundImage)
                }, 200)
                if(first){
                    bg[0].style.backgroundImage = image.style.backgroundImage;
                    bg[1].style.opacity = 0;
                }
                else {
                    bg[1].style.backgroundImage = image.style.backgroundImage;
                    bg[1].style.opacity = 1;
                }
                first = !first;
                inAnimation = false;
            }
            sliderContainer.scrollIntoView({behavior: "smooth"});
        }
        
    }
});

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})