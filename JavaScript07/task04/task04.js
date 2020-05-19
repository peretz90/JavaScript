let text = [
  `<p>What is Lorem Ipsum?</p>
   <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>`,
  `<p>Why do we use it?</p>
  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>`,
  `<p>Where does it come from?</p>
  <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinton, a Latin professor at Camden-Sydney College in Virginia, looked up one of the more obscure Latin words, connecticut, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Findbugs Boners et Malory" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit abet..", comes from a line in section 1.10.32.</span>`,
  `<p>Where can I get some?</p>
  <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span>`
]
let element;
let i = 1;
onload = function() {
  element = document.getElementById('content');
  element.innerHTML = text[0];
  while (true) {
    if (element.scrollHeight === element.clientHeight) {
      element.innerHTML += text[i];
      i++;
    } else {
      break;
    }
  }
  element.addEventListener('scroll', onScroll);
}

function onScroll() {
  if (element.scrollHeight - element.scrollTop <= element.offsetHeight + 1) {
    if (i === text.length) {
      element.removeEventListener('scroll', onScroll);
    } else {
      element.innerHTML += text[i];
      i++;
    }
  }
}

