let loaderWrapper = document.querySelector(".loader-wrapper");
let body = document.getElementsByTagName("body")[0];

window.onload = function() {
    setTimeout(() => {
        loaderWrapper.style.opacity = 0;
        setTimeout(() => {
            body.style.overflowY = "initial";
                loaderWrapper.style.display = "none";
        }, 400)
    }, 500)
}