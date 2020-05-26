let questions = document.getElementsByClassName('question');
let form = document.getElementsByClassName('q');
let countQuestion = 0;
let countTrue = 0;
let indexQ = 0;

questions[indexQ].style.display = 'block';
for (let item of form) {
  item.addEventListener('submit', onSubmit);
}

function onSubmit(e) {
  let arrAnswer = this.radio;
  for (let a of arrAnswer) {
    if (a.checked) {
      countTrue += a.value ^ 0;
    }
  }
  countQuestion++;
  questions[indexQ].style.display = 'none';
  if (indexQ === questions.length - 1) {
    let result = document.getElementsByClassName('result');
    result[0].style.display = 'block';
    result[0].innerHTML = `<p><b>Result: ${countTrue} correct answers to ${countQuestion} questions.</b></p>`
  } else {
    questions[++indexQ].style.display = 'block';
  }
  e.preventDefault();
}