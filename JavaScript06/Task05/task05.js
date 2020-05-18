function onclick() {
  for (let elem of document.getElementsByTagName('li')) {
    elem.style.background = 'none';
  }
  this.style.background = 'orange';
}

for (let elem of document.getElementsByTagName('li')) {
  elem.addEventListener('click', onclick);
}