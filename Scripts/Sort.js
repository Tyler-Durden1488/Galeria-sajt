sort = document.getElementById("sort");
sortc = document.getElementById("sortContent");
let calc = "calc(25% - (15px*3/4))"; 
let divider = 4;
galleryChildren = [];
for(var child of document.getElementById("gallery").children){
    galleryChildren.push(child);
}
checkboxs = document.querySelectorAll("[id$='-c']");
clicked = false;
window.onresize = function(){
    if(window.innerWidth < 811 && window.innerWidth > 500){
        calc = "calc(100%/3 - 15px*2/3)";
        divider = 3;
    }
    else if(window.innerWidth < 500) {
        calc = "calc(100%/2 - 15px*1/2);"
        divider = 2;
    }
    else {
        calc = "calc(25% - (15px*3/4))";
        divider = 4;
    }
    ActiveGalleryChildren = galleryChildren.filter((element) => !isNaN(element.style.width));
    if(ActiveGalleryChildren.length < 26){
        for(let i = 1; i < ActiveGalleryChildren.length; i++){
            if(i%divider == 0){
                ActiveGalleryChildren[i-1].style.marginRight = 0;
            }
            else {
                ActiveGalleryChildren[i-1].style.marginRight = "15px";
            }
        }
    }
    else {
        ActiveGalleryChildren.forEach(element => {
            element.setAttribute("style", "background-image: "+element.style.backgroundImage);
        });
    }
}
checkboxs.forEach(checkbox => {
    checkbox.onclick = function(){
        if(window.innerWidth < 811 && window.innerWidth > 500){
            calc = "calc(100%/3 - 15px*2/3)";
            divider = 3;
        }
        else if(window.innerWidth < 500) {
            calc = "calc(100%/2 - 15px*1/2);"
            divider = 2;
        }
        else {
            calc = "calc(25% - (15px*3/4))";
            divider = 4;
        }
        var selectedCountries = [];
        checkboxs.forEach(element => {
            if(element.checked){
                selectedCountries.push(element.id.slice(0, -2));
            }
        });
        var Active = [];
        galleryChildren.forEach(function(child) {
            if(!selectedCountries.length){
                child.setAttribute("style", "background-image: "+child.style.backgroundImage);
                Active.push(child);
                console.log("Zero");
                console.log(calc);
            }
            else {
                if(!selectedCountries.includes(child.id)){
                    child.style.width = 0;
                    child.style.marginRight = 0;
                }
                else {
                    child.setAttribute("style", "background-image: "+child.style.backgroundImage);
                    Active.push(child)
                }
            }
        });
        for(var i = 1; i <= Active.length; i++){
            if(i%divider == 0){
                Active[i-1].style.marginRight = 0;
            }
            else {
                Active[i-1].style.marginRight = "15px";
            }
        }
    }
});

sortc.onclick = function (event){
    event.stopPropagation();
}
sort.onclick = function (event){
    event.stopPropagation();
    if(!clicked){
        sortc.style.maxHeight = "350px";
        sortc.style.opacity = 1;
        clicked = true;
    }
    else {
        sortc.style.opacity = 0;
        sortc.style.maxHeight = 0;
        clicked = false;
    }
}
window.onclick = function() {
    sortc.style.opacity = 0;
    sortc.style.maxHeight = 0;
    clicked = false
}