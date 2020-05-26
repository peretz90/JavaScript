let newTextBlock, newTitle, commented, edit1, edit2, time;
let form = document.forms.create;
let content = document.getElementById('content');
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  newTextBlock = document.createElement('div');
  newTextBlock.setAttribute('id', 'new_message');

  newTitle = document.createElement('div');
  newTitle.setAttribute('id', 'title');

  commented = document.createElement('div');
  commented.setAttribute('id', 'commented');

  edit1 = document.createElement('span');
  edit1.setAttribute('id', 'edit1');
  edit1.innerHTML = form.elements.name.value;
  time = document.createElement('span');
  time.setAttribute('id', 'time');
  let date = new Date();
  time.innerHTML = formatTime(date);
  newTitle.append(edit1);
  newTitle.append(time);

  edit2 = document.createElement('span');
  edit2.setAttribute('id', 'edit2');
  edit2.innerHTML = form.elements.message.value;
  commented.append(edit2);

  newTextBlock.append(newTitle);
  newTextBlock.append(commented);
  content.prepend(newTextBlock);
  e.preventDefault();
}

function formatTime(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();

  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;

  let min = date.getMinutes();
  if (min < 10) min = '0' + min;

  let sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  return hh + ':' + min + ':' + sec + '  ' + dd + '.' + mm + '.' + yy;
}