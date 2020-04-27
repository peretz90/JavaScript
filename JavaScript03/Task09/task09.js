let element = '<table>';
let num = 2;

function columnMultiply(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += num + ' &ensp;&times; ' + (i !== 10 ? '&ensp;' + i : i) + ' = ' + (num*i < 10 ? '&ensp;' + num*i : num*i);
    if (i !== 10) {
      result += '<br>';
    }
  }
  return result;
}

for (let i = 0; i < 2; i++) {
  element += '<tr>';
  for (let j = 0; j < 4; j++) {
    element += '<td>' + columnMultiply(num) + '</td>';
    num++;
  }
  element += '</tr>';
}

element += '</table>';
document.getElementById('tableMultiply').innerHTML = element;