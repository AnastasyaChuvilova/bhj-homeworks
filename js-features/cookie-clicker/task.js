const img = document.getElementById("cookie");
 let w = img.width;
 let h = img.height;
function changeSize(width, height) {
    img.width = width;
    img.height = height;
}

const counter = document.getElementById("clicker__counter");
img.onclick  = function() {
    let count = parseInt(counter.textContent, 10);
    counter.textContent = count + 1 ;
    changeSize(300,200);
    setTimeout(() => {
        changeSize(w,h);
    }, 100);
}