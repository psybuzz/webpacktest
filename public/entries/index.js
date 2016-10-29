// Index page
require('../scss/index.scss');
var spot = require('../shared/spot.js');
var Box = spot.Box;
var Dot = spot.Dot;

var $topbar = $('.topbar');
$topbar.slideUp(0).slideToggle();

var fillerRad = 9;
var rad = 36;
var margin = {
    left: rad*2,
    right: rad*2,
    top: 100,
    bottom: 200
};
var spawnWidth = window.innerWidth-margin.left-margin.right-rad*2;
var spawnHeight = window.innerHeight-margin.top-margin.bottom-rad*2;
var introMidContainer = $('.intro-mid');

var numFiller = Math.round(Math.random()*Math.random()*98)+2;
for (var i = 0; i < numFiller; i++) {
    var x = Math.random()*spawnWidth+margin.left;
    var y = Math.random()*spawnHeight+margin.top;
    var dot = new Dot(fillerRad, x, y);
    dot.draw(introMidContainer).slideIn({
        newOpacity: 0.9, 
        animOptions: {duration: 20*i, easing: 'easeOutCubic'}
    });
    dot.className = 'filler-circle';
    dot.classList.add('back-gray');
    dot.dataset.x = x;
    dot.dataset.y = y;
}

$('.main-container').hide().fadeIn();

$('[data-name="day"]').click(function () {
    $('body').toggleClass('night');
});

var hour = (new Date()).getHours();
if (hour >= 22 || hour <= 8) {
    $('body').addClass('night');
}