const inputVar = document.querySelector('#font-size-control');
const textVar = document.querySelector('#text');
console.log(inputVar.value);
function regular() {
  console.log(Number(inputVar.value));
  textVar.style.fontSize = `${inputVar.value}px`;
  console.log(textVar.textContent, textVar.style.fontSize);
}
// console.log(textVar);
inputVar.addEventListener('input', regular);
