function onClick(event) {
  for (let e of event.currentTarget.children) {
    e.classList.toggle('open');
  }
  event.stopPropagation();
}

function onMouseover(event) {
  event.currentTarget.classList.toggle('fat', true);
  event.stopPropagation();
}

function onMouseout(event) {
  event.currentTarget.classList.toggle('fat', false);
  event.stopPropagation();
}

for (let e of document.querySelector('.menu').children) {
  e.addEventListener('click', onClick);
  e.addEventListener('mouseover', onMouseover);
  e.addEventListener('mouseout', onMouseout);
  for (let elem of e.children) {
    for (let child of elem.children) {
      child.addEventListener('click', onClick);
      child.addEventListener('mouseover', onMouseover);
      child.addEventListener('mouseout', onMouseout);
      for (let list of child.children[0].children) {
        list.addEventListener('mouseover', onMouseover);
        list.addEventListener('mouseout', onMouseout);
      }
    }
  }
}