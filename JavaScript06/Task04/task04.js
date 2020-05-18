let next = document.getElementById('next');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

let n = false;
next.onclick = function() {
  if (red.style.getPropertyValue('background') === 'red') {
    red.style.background = '#7b7b7b';
    yellow.style.background = 'yellow';
    n = true;
  } else if (yellow.style.getPropertyValue('background') === 'yellow') {
    yellow.style.background = '#7b7b7b';
    if (n) {
      green.style.background = 'green';
      n = false;
    } else {
      red.style.background = 'red';
    }
  } else if (green.style.getPropertyValue('background') === 'green') {
    green.style.background = '#7b7b7b';
    yellow.style.background = 'yellow';
  } else {
    red.style.background = 'red';
  }
}

next.onmouseup = function() {
  next.style.background = '#e0e0e0';
}

next.onmousedown = function() {
  next.style.background = '#b3b3b3';
}