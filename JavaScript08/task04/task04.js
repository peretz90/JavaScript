let content = document.getElementById('content');
let select = document.getElementsByClassName('select');
let form = document.getElementsByTagName('form')[0];
let result = document.getElementById('result');
let text = document.getElementById('text');

for (let item of select) {
  item.addEventListener('click', onClick);
}

function onClick(e) {
  form.elements[0].value = e.target.value;
}
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  let str = form.elements[2].value + ', thanks for the order!<br><br>' +
    'Book "' + form.elements[0].value + '" will be delivered on ' +
    form.elements[4].value + ' to ' + form.elements[3].value + '.';
  content.style.display = 'none';
  result.style.display = 'block';
  text.innerHTML = str;
  e.preventDefault();
}