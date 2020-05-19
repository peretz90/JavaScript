let table = document.querySelector('table');
let but = document.querySelector('button');
let input = document.getElementsByTagName('input');
let week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT', 'SUN'];
let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
but.addEventListener('click', onSubmit);

function onSubmit() {
  let month = input[0].value - 1;
  let year = input[1].value ^ 0;
  let date = new Date(year, month, 1);
  table.style.display = 'table';
  table.innerHTML = textHeadTable(date);
  while (true) {
    table.innerHTML += cal(date);
    if (month !== date.getMonth()) {
      break;
    }
  }

}

function textHeadTable(date) {
  let result = `<caption>${months[date.getMonth()]}, ${date.getFullYear()}</caption>`;
  result += `<tr>`
  for (let i = 0; i < 7; i++) {
    result += `<th>${week[i]}</th>`
  }
  result += `</tr>`;
  return result;
}

function cal(date) {
  let month = input[0].value - 1;
  let start = date.getDay();
  let result = '<tr>';
  for (let i = 0; i < 7; i++) {
    if ((i >= start || date.getDate() >= 7) && date.getMonth() === month) {
      result += `<td>${date.getDate()}</td>`
      start = 0;
      date.setDate(date.getDate() + 1);
    } else {
      result += `<td></td>`;
    }
  }
  return result;
}