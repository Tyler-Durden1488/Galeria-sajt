sort = document.getElementById("sort");
sortc = document.getElementById("sortContent");
galleryChildren = [];
for(var child of document.getElementById("gallery").children){
    galleryChildren.push(child);
}
checkboxs = document.querySelectorAll("[id$='-c']");
clicked = false;
checkboxs.forEach(checkbox => {
    checkbox.onclick = function(){
        var selectedCountries = [];
        checkboxs.forEach(element => {
            if(element.checked){
                selectedCountries.push(element.id.slice(0, -2));
            }
        });
        var Active = [];
        galleryChildren.forEach(function(child) {
            if(!selectedCountries.length){
                child.style.width = "calc(25% - (15px*3/4))";
                child.style.borderWidth = "5px";
                Active.push(child)
            }
            else {
                if(!selectedCountries.includes(child.id)){
                    child.style.width = 0;
                    child.style.borderWidth = 0;
                    child.style.marginRight = 0;
                }
                else {
                    child.style.width = "calc(25% - (15px*3/4))";
                    child.style.borderWidth = "5px";
                    Active.push(child)
                }
            }
        });
        for(var i = 1; i <= Active.length; i++){
            if(i%4 == 0){
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
        sortc.style.display = "block";
        sortc.style.opacity = 1;
        clicked = true;
    }
    else {
        sortc.style.display = "none";
        sortc.style.opacity = 0;
        clicked = false;
    }
}
window.onclick = function() {
    sortc.style.display = "none";
    sortc.style.opacity = 0;
    clicked = false
}