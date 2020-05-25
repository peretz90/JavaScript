let direction = document.getElementById('direction');
let search = document.getElementById('search');
let info = document.getElementById('info');
let places = new Map([[1, ''],[2, ''],[3, ''],[4, ''],[5, ''],[6, ''],[7, ''],[8, ''],[9, ''],[10, ''],[11, ''],[12, ''],[13, ''],[14, ''],[15, ''],[16, ''],[17, ''],[18, ''],[19, ''],[20, ''],[21, ''],[22, ''],[23, ''],[24, ''],[25, ''],[26, ''],[27, ''],[28, '']]);
let saved = new Map();
let date = document.getElementsByTagName('input')[0];

function createInfo(map) {
  let string = `<form><fieldset><legend>Забронировать место</legend><table><tr>`;
  for (let num of map.keys()) {
    if (num % 2 !== 0) {
      string += `<td><input type="checkbox" ${map.get(num) === 'true' ? 'disabled checked' : ''} value="${num}"> ${num}</td>`;
    }
  }
  string += `</tr><tr>`;
  for (let num of places.keys()) {
    if (num % 2 === 0) {
      string += `<td><input type="checkbox" ${map.get(num) === 'true' ? 'disabled checked' : ''} value="${num}"> ${num}</td>`;
    }
  }
  string += `</tr></table></fieldset></form>`;
  string += `<span id="total"></span><button id="buy" onclick="buy()">Buy</button>`;
  info.innerHTML = string;
}

search.onclick = function() {
  if (saved.has(date.value)) {
    createInfo(saved.get(date.value));
  } else {
    createInfo(places);
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
    if (i.checked) {
      sum += direction.value ^ 0;
    }
  }
  document.getElementById('total').innerHTML = `Total: $${sum}`;
}

function buy() {
  let reserve = places;
  let input = document.getElementsByTagName('input');
  for (let i of input) {
    if (i.checked) {
      reserve.set(i.value ^ 0, 'true');
    }
  }
  saved.set(date.value, reserve);
}