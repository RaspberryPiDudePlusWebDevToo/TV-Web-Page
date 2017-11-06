function move() {
    var bar = document.getElementById("green_bar");
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 0) { //node.js: once width < 0, move on to next announcement
            width -= 0.08;
            console.log(width);
            bar.style.width = width + "%";
            if (width < 0) {
                width = 100;
            }
        }
    }
}

move();