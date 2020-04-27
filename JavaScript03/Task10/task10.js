let min = 0;
let max = 100;
let answer = max / 2;
alert('Игра "Угадай число"\n' +
  'Загадай число от 0 до 100');
draw();
function draw() {
  document.getElementById('number').innerHTML = '<span><b>Ваше число...</b></span><br>' +
    '<button onclick="isLess()">Меньше ' + answer + '</button>' +
    '<button onclick="isMore()">Больше ' + answer + '</button>' +
    '<button onclick="win()">Равно ' + answer + '</button>';
}

function isLess() {
  max = answer - 1;
  answer = (max - min) % 2 === 0 ? (max - min) / 2 + min : ((max - min + 1) / 2) + min ^ 0;
  draw();
}

function isMore() {
  min = answer + 1;
  answer = (max - min) % 2 === 0 ? (max - min) / 2  + min : (max - min - 1) / 2 + min ^ 0;
  draw();
}

function win() {
  alert('Ура!!! Я угадал, твое число - ' + answer);
}

