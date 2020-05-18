let modal = document.getElementById('modal');
let open = document.getElementById('open_modal');
let close = document.getElementById('close_modal');

open.onclick = function() {
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}