let block;
let resize;

onload = function () {
  block = document.querySelector('#block');
  resize = document.querySelector('#block_resize');
  document.addEventListener('mouseup', onMouseUp);
  resize.addEventListener('mousedown', onMouseDown);
}

function getXY(e) {
  let x = e.pageX;
  let y = e.pageY;
  return [x, y];
}

function onMouseDown(e) {
  document.addEventListener('mousemove', resizeBlock, false);
  e.preventDefault();
}

function onMouseUp() {
  document.removeEventListener('mousemove', resizeBlock);
}

function resizeBlock(e) {
  let coords = getXY(e);
  block.style.width = (coords[0] - 33) + 'px';
  block.style.height = (coords[1] - 33) + 'px';
  if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft - 35) + 'px';
  if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop - 35) + 'px';
}

function clientWidth() {
  return document.documentElement.clientWidth === 0 ? document.body.clientWidth : document.documentElement.clientWidth;
}

function clientHeight() {
  return document.documentElement.clientHeight === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
}