var canvas = document.getElementById("canvas");
var x = window.innerWidth;
var y = window.innerHeight;

function resizeCanvas() {
    canvas.style.width  = x.toString() + 'px';
    canvas.style.height = y.toString() + 'px';
}

// var granimInstance = new Granim({
//     element: '#canvas',
//     direction: 'top-bottom',
//     opacity: [1, .5, 0],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#485563', '#29323c', '#29323c'],
//                 ['#00c6ff', '#0072ff', '#0072ff']
//             ],
//             transitionSpeed: 10000
//         }
//     }
// });

// var granimInstance = new Granim({
//     element: '#canvas',
//     name: 'radial-gradient',
//     direction: 'radial',
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#ffb347', '#ffcc33'],
//                 ['#83a4d4', '#b6fbff'],
//                 ['#9D50BB', '#6E48AA']
//             ]
//         }
//     }
// });

// var news = document.getElementsByClassName("ticker__item");
// Array.from(news).forEach(function(item) {
//     var properties = window.getComputedStyle(item);
//     console.log(properties.width);
// });

window.onresize = resizeCanvas;

resizeCanvas();