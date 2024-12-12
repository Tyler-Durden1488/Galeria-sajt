sort = document.getElementById("sort");
sortc = document.getElementById("sortContent");
checkboxs = document.querySelectorAll('.ch');
clicked = false;
checkboxs.forEach(element => {
        console.log(element.className);

});
sort.onclick = function (event){
    event.stopPropagation();
    sortc.style.display = "block";
    sortc.style.opacity = 1;     
    clicked = true;

}

window.onclick = function() {
    sortc.style.display = "none";
    sortc.style.opacity = 0;
}