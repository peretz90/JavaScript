let direction = document.getElementById('direction');
let search = document.getElementById('search');
let info = document.getElementById('info');
const PLACES = new Map([[1, ''],[2, ''],[3, ''],[4, ''],[5, ''],[6, ''],[7, ''],[8, ''],[9, ''],[10, ''],[11, ''],[12, ''],[13, ''],[14, ''],[15, ''],[16, ''],[17, ''],[18, ''],[19, ''],[20, ''],[21, ''],[22, ''],[23, ''],[24, ''],[25, ''],[26, ''],[27, ''],[28, '']]);
let saved = new Map();
let date = document.getElementsByTagName('input')[0];
let modal = document.getElementById('modal');
let textModal = document.getElementById('text_modal');
let closeModal = document.getElementById('close_modal');

function createInfo(map) {
  let string = `<form><fieldset><legend>Забронировать место</legend><table id="places"><tr>`;
  for (let num of map.keys()) {
    if (num % 2 !== 0) {
      string += `<td><input type="checkbox" ${map.get(num) === 'true' ? 'disabled checked' : ''} value="${num}"> ${num}</td>`;
    }
  }
  string += `</tr><tr>`;
  for (let num of map.keys()) {
    if (num % 2 === 0) {
      string += `<td><input type="checkbox" ${map.get(num) === 'true' ? 'disabled checked' : ''} value="${num}"> ${num}</td>`;
    }
  }
  string += `</tr></table></fieldset></form>`;
  string += `<span id="total"></span><button id="buy" onclick="buy()">Buy</button>`;
  info.innerHTML = string;
}

search.onclick = function() {
  info.style.display = 'block';
  if (saved.has(date.value + ' ' + direction.value)) {
    createInfo(saved.get(date.value + ' ' + direction.value));
  } else {
    createInfo(PLACES);
  }
  for (let i of document.getElementsByTagName('input')) {
    if (i.type === 'checkbox') {
      i.addEventListener('click', onChecked);
    }
  }
}

function onChecked() {
  let sum = 0;
  let input = document.getElementsByTagName('input');
  for (let i of input) {
    if (i.checked && !i.disabled) {
      sum += direction.value ^ 0;
    }
  }
  document.getElementById('total').innerHTML = `Total: $${sum}`;
}

function buy() {
  let str = `<tr><th><b>Direction</b></th><th><b>Date</b></th><th><b>Seat</b></th></tr>`;
  let reserve = new Map([[1, ''],[2, ''],[3, ''],[4, ''],[5, ''],[6, ''],[7, ''],[8, ''],[9, ''],[10, ''],[11, ''],[12, ''],[13, ''],[14, ''],[15, ''],[16, ''],[17, ''],[18, ''],[19, ''],[20, ''],[21, ''],[22, ''],[23, ''],[24, ''],[25, ''],[26, ''],[27, ''],[28, '']]);
  let input = document.getElementsByTagName('input');
  let isTickets = false;
  for (let i of input) {
    if (i.checked) {
      reserve.set(i.value ^ 0, 'true');
      if (!i.disabled) {
        isTickets = true;
        str += `<tr><td>${direction.options[direction.selectedIndex].text}</td><td>${date.value}</td><td>${i.value}</td></tr>`;
      }
    }
  }
  saved.set((date.value + ' ' + direction.value), reserve);
  modal.style.display = 'block';
  if (isTickets) {
    textModal.innerHTML = str;
  } else {
    textModal.innerHTML = `<caption>Билеты не выбраны</caption>`;
  }
}

closeModal.onclick = function() {
  modal.style.display = 'none';
  info.style.display = 'none';
}