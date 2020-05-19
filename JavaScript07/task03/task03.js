let title = document.getElementsByName('title');
let text = document.getElementsByName('text');

function onClick(e) {
  if (e.target.parentElement.children[1].style.display === 'block') {
    e.target.parentElement.children[1].style.display = 'none';
  } else {
    for (let item of text) {
      item.style.display = 'none';
    }
    e.target.parentElement.children[1].style.display = 'block';
  }
}


for (let item of title) {
  item.addEventListener('click', onClick);
}

