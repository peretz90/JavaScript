let pressed = false;
let a, b;
let li = document.getElementsByTagName('li');
function onclick(e) {
  if (e.ctrlKey) {
    this.style.background = 'orange';
  } else if (e.shiftKey) {
    if (!pressed) {
      pressed = true;
      this.style.background = 'orange';
      for (let i = 0; i < li.length; i++) {
        if (li[i] === e.target) {
          a = i;
          break;
        }
      }
    } else {
      for (let i = 0; i < li.length; i++) {
        if (li[i] === e.target) {
          b = i;
          break;
        }
      }
      for (let i = a > b ? b : a; i <= (a > b ? a : b); i++) {
        li[i].style.background = 'orange';
      }
    }
  } else {
    for (let elem of document.getElementsByTagName('li')) {
      elem.style.background = 'none';
    }
    this.style.background = 'orange';
  }
  return false;
}

function onKeyup(e) {
  if (e.key === 'Shift') {
    pressed = false;
  }
}

for (let elem of li) {
  elem.addEventListener('click', onclick);
}
document.addEventListener('keyup', onKeyup);
