var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand   = document.querySelector('.hour-hand');


function moveClock(){
  var now = new Date();
  var seconds = now.getSeconds();

  var secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = 'rotate('+secondsDegrees+'deg)';

  var minutes = now.getMinutes();
  var minuteDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = 'rotate('+minuteDegrees+'deg)';


  var hours = now.getHours();
  if(hours > 12){
    hours -= 12;
  }
  hourDegrees = ((hours/12) * 360) + 90;
  console.log(hourDegrees);
  hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
}

setInterval(moveClock, 1000);
