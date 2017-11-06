var canvas = document.getElementById("canvas");
var x = window.innerWidth - 20;
var y = window.innerHeight - 20;

function resizeCanvas() {
    canvas.style.width  = x.toString() + 'px';
    canvas.style.height = y.toString() + 'px';
}

var granimInstance = new Granim({
    element: '#canvas',
    name: 'radial-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ffb347', '#ffcc33'],
                ['#83a4d4', '#b6fbff'],
                ['#9D50BB', '#6E48AA']
            ]
        }
    }
});

window.onresize = resizeCanvas;

resizeCanvas();