var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand   = document.querySelector('.hour-hand');


function moveClock(){
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';
}

setInterval(moveClock, 1000);
