function move() {
    var bar = document.getElementById("green_bar");
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 0) { //node.js: once width < 0, move on to next announcement
            width -= 0.15;
            console.log(width);
            bar.style.width = width + "%";
        }
    }
}

move();