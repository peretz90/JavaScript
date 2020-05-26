let create = document.getElementsByClassName('create')[0];
let form = document.getElementsByTagName('form')[0];
let result = document.getElementsByClassName('result')[0];
let textInner = document.getElementById('text');

create.style.display = 'block';
form.addEventListener('submit', onSubmit);


function onSubmit(e) {
  if (form.bold.checked) {textInner.style.fontWeight = '700';}
  if (form.underline.checked) {textInner.style.textDecoration = 'underline';}
  if (form.italics.checked) {textInner.style.fontStyle = 'italic';}

  for (let item of form.align) {
    if (item.checked) {
      textInner.style.textAlign = item.value;
      break;
    }
  }
  textInner.innerHTML = form.textarea.value;

  create.style.display = 'none';
  result.style.display = 'block';

  e.preventDefault();
}
