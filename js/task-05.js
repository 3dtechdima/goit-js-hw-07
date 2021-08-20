const inputNameRef = document.querySelector('input#name-input');
let outputName = document.querySelector('span#name-output');

function inputName() {
  if (inputNameRef.value) {
    outputName.textContent = inputNameRef.value;
  } else {
    outputName.textContent = 'незнакомец';
  }
}
inputNameRef.addEventListener('input', inputName);
