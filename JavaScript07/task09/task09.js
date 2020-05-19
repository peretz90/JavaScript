function People(firstname, lastname, age, company) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.company = company;
}

let mark = new People('Mark', 'Zuckerberg', 34, 'Facebook');
let larry = new People('Larry', 'Page', 45, 'Google');
let timothy = new People('Timothy', 'Cook', 57, 'Apple');
let bill = new People('Bill', 'Gates', 62, 'Microsoft');

let table = document.querySelector('table');
let th = document.getElementsByTagName('th');
let peoples = [mark, larry, timothy, bill];
let thPrint = `<tr><th>Firstname</th><th>Lastname</th><th>Age</th><th>Company</th></tr>`;
table.innerHTML = thPrint;
for (let p of peoples) {
  table.innerHTML += printTable(p);
}
for (let t of th) {
  t.addEventListener('click', onClick);
}

function printTable(people) {
  let result = `<tr>`;
  for (let item in people) {
    result += `<td>${people[item]}</td>`;
  }
  result += `</tr>`;
  return result;
}

function onClick(e) {
  let index = 0;
  for (let i = 0; i < th.length; i++) {
    if (th[i] === this) {
      index = i;
      break;
    }
  }
  sortOfIndex(index);
  table.innerHTML = thPrint;
  for (let p of peoples) {
    table.innerHTML += printTable(p);
  }
  th = document.getElementsByTagName('th');
  for (let t of th) {
    t.addEventListener('click', onClick);
  }
  e.preventDefault();
  e.stopPropagation();
}

function sortOfIndex(index) {
  switch (index) {
    case 0:
      peoples.sort((a, b) => a.firstname > b.firstname ? 1 : -1);
      return;
    case 1:
      peoples.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
      return;
    case 2:
      peoples.sort((a, b) => a.age > b.age ? 1 : -1);
      return;
    case 3:
      peoples.sort((a, b) => a.company > b.company ? 1 : -1);
      return;
    default:
      alert('oops');
  }
}
