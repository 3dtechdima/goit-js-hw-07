const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');
const total = document.querySelector('span#value');
let counterValue = Number(total.textContent);
console.log(buttonUp, buttonDown);

function increment() {
  counterValue += 1;
  update();
}
function decrement() {
  counterValue -= 1;
  update();
}
function update() {
  total.textContent = counterValue;
}
buttonDown.addEventListener('click', decrement);
buttonUp.addEventListener('click', increment);
