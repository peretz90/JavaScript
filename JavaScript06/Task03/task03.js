let soccer_field = document.getElementById('soccer_field');
let ball = document.getElementById('ball');
soccer_field.onclick = function(event) {
  let fieldCoords = this.getBoundingClientRect();
  let ballCoords = {
    top: event.clientY - fieldCoords.top - soccer_field.clientTop - ball.clientHeight/2,
    left: event.clientX - fieldCoords.left - soccer_field.clientLeft - ball.clientWidth/2
  };
  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > soccer_field.clientWidth) {
    ballCoords.left = soccer_field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > soccer_field.clientHeight) {
    ballCoords.top = soccer_field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}