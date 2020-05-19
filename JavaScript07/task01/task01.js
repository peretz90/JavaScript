let scroll = document.querySelector('#scroll');
let block = document.querySelector('#block');

function onMouseDown(e) {
  document.addEventListener('mousemove', onMouseMove);
  e.preventDefault();
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {
  let left_scroll = scroll.getBoundingClientRect().x;
  let mouse_x = e.pageX;
  let result = mouse_x - left_scroll - block.clientWidth/2;
  if (result < -3) {
    block.style.left = '-3px';
  } else if (result > (scroll.clientWidth - block.clientWidth + 3)) {
    block.style.left = (scroll.clientWidth - block.clientWidth + 3) + 'px';
  } else {
    block.style.left = result + 'px';
  }
}


block.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);