let json;
let title = document.getElementsByName('title')[0];
let type = document.getElementsByName('type')[0];
let search = document.getElementsByName('search')[0];
let result = document.getElementById('result');
let info = document.getElementById('info');

async function load(title, type) {
  let div;
  let button;
  let text;
  let img;
  let response = await fetch(`http://www.omdbapi.com/?s=${title}&type=${type}&plot=full&apikey=d0a9836f`);
  if (response.ok) {
    json = await response.json();
  } else {
    console.log("Error loading");
  }
  if (json.Response === 'True') {
    for (let o of json.Search) {
      let urlImg = await o.Poster;
      let name = await o.Title;
      let year = await o.Year;
      div = document.createElement('div');
      div.setAttribute('id', 'film');
      img = document.createElement('img');
      img.setAttribute('src', urlImg);
      text = document.createElement('div');
      text.innerHTML = `${type}<br><br><b>${name}</b><br><br>${year}`;
      button = document.createElement('button');
      button.innerHTML = 'Details';
      div.append(img);
      div.append(text);
      div.append(button);
      result.append(div);
    }
  } else {
    result.innerHTML = '<h1>Movie not found!</h1>';
  }
}

load('Hello', 'movie');