function onMouseover() {
  let element = this.getBoundingClientRect();
  let tooltip = document.getElementById('tool_tip');

  if (element.top >= 55) {
    tooltip.classList.toggle('top', false);
    tooltip.classList.toggle('bottom', true);
    tooltip.style.top = (element.top - 50) + 'px';
    tooltip.style.left = ((element.left + element.width/2) - 45) + 'px';
  } else {
    tooltip.classList.toggle('bottom', false);
    tooltip.classList.toggle('top', true);
    tooltip.style.top = (element.bottom + 10) + 'px';
    tooltip.style.left = ((element.left + element.width/2) - 45) + 'px';
  }

  tooltip.style.display = 'block';
}

function onMouseout() {
  let tooltip = document.getElementById('tool_tip');
  tooltip.style.display = 'none';
}
document.getElementById("button1").addEventListener("mouseover", onMouseover);
document.getElementById("button1").addEventListener('mouseout', onMouseout);
document.getElementById("button2").addEventListener("mouseover", onMouseover);
document.getElementById("button2").addEventListener('mouseout', onMouseout);