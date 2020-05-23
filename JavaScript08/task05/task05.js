let students = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'];
let lessons = [1, 2, 3, 4, 5];
let groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'];
let group = document.getElementsByName('group')[0];
let lesson = document.getElementsByName('less')[0];
let choice = document.getElementById('choice');
let saved = document.getElementById('saved');
let ul = document.getElementsByTagName('ul')[0];
let info = new Map();
let buttonSelect = document.getElementById('sel');
let buttonSave = document.getElementById('sav');
let value = 0;
let input = document.getElementsByTagName('input');

editSelect(group, groups);
editSelect(lesson, lessons);

function editSelect(itemDOM, arrOptions) {
  arrOptions.forEach((item) => {
    itemDOM.innerHTML += `<option value="${value++}">${item}</option>`;
  });
  value = 0;
}

function strList(str) {
  let li = document.createElement('li');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let input = document.createElement('input');
  li.append(span1);
  li.append(span2);
  span1.setAttribute('id', 'name');
  span2.setAttribute('id', 'name');
  input.setAttribute('type', 'checkbox');
  span2.append(input);
  span1.innerHTML = str;
  ul.append(li);
}

buttonSelect.onclick = function() {
  let key = '' + group.value + lesson.value;
  if (!info.has(key)) {
    choice.style.display = 'block';
    saved.style.display = 'none';
  } else {
    choice.style.display = 'none';
    saved.style.display = 'block';
    saved.innerHTML = info.get(key);
  }
  input[0].value = '';
  ul.innerHTML = `<li><span id="name">Name</span><span id="name">Is present</span></li>`;
  students.forEach((item) => {
    strList(item);
  })
  return false;
}

buttonSave.onclick = function() {
  let key = '' + group.value + lesson.value;
  let string = `<span>Topic: ${input[0].value}</span><ul>`;
  students.forEach((item, index) => {
    string += `<li><span id="name">${item}</span><span id="name">${input[index+1].checked ? 'present' : ''}</span>`;
  });
  string += '</ul>';
  info.set(key, string);
  choice.style.display = 'none';
  return false;
}
