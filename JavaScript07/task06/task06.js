let a = document.getElementsByTagName('a');
for (let item of a) {
  item.style.textDecoration = 'none';
  if (item.getAttribute('href').startsWith('http://') ||
  item.getAttribute('href').startsWith('https://')) {
    item.style.borderBottom = '1px dashed';
  }
}

