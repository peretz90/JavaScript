let images = ['image/js1.jpg', 'image/js2.png', 'image/js3.jpg', 'image/js4.jpg', 'image/js5.jpg'];
let arrows = document.getElementsByTagName('span');
let img = document.querySelector('img');

onload = function() {
  if (img.getAttribute('src') === images[0]) {
    arrows[0].style.color = '#878787';
    arrows[0].style.cursor = 'default';
    arrows[1].addEventListener('click', onClick);
  } else if (img.getAttribute('src') === images[images.length - 1]) {
    arrows[1].style.color = '#878787';
    arrows[1].style.cursor = 'default';
    arrows[0].addEventListener('click', onClick);
  } else {
    arrows[0].addEventListener('click', onClick);
    arrows[1].addEventListener('click', onClick);
  }
}

 function onClick(e) {
    let index = images.indexOf(img.getAttribute('src'));
    if (e.target === arrows[0]) {
      img.setAttribute('src', images[index-1]);
      if (index - 1 === 0) {
        arrows[0].style.color = '#878787';
        arrows[0].style.cursor = 'default';
        arrows[0].removeEventListener('click', onClick);
      } else if (index - 1 === images.length - 2) {
        arrows[1].style.color = '#000';
        arrows[1].style.cursor = 'pointer';
        arrows[1].addEventListener('click', onClick);
      }
    } else {
      img.setAttribute('src', images[index+1]);
      if (index + 1 === images.length - 1) {
        arrows[1].style.color = '#878787';
        arrows[1].style.cursor = 'default';
        arrows[1].removeEventListener('click', onClick);
      } else if (index + 1 === 1) {
        arrows[0].style.color = '#000';
        arrows[0].style.cursor = 'pointer';
        arrows[0].addEventListener('click', onClick);
      }
    }
    e.preventDefault();
 }
