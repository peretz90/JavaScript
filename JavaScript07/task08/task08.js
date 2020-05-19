document.onkeydown = onKeyDown;
let block = document.getElementById('text');
let edit = document.querySelector('textarea');
let textValue;
function onKeyDown(e) {
  if (e.ctrlKey && e.key === 'e') {
    if (edit.style.getPropertyValue('display') === 'block') {
    } else {
      textValue = block.textContent;
      let height = block.clientHeight;
      block.style.display = 'none';
      edit.style.height = (height + 30) + 'px';
      edit.style.minHeight = (height + 30) + 'px';
      edit.style.display = 'block';
      edit.value = textValue;
      return false;
    }
  } else if (e.ctrlKey && e.key === 's') {
    if (block.style.getPropertyValue('display') === 'block') {
    } else {
      textValue = edit.value;
      edit.style.display = 'none';
      block.innerHTML = textValue;
      block.style.display = 'block';
      return false;
    }
  }
}