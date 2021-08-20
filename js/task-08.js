const inputVar = document.querySelector('input');
// console.log(inputVar);
const navItemEl = document.querySelector('#boxes');
// console.log(navItemEl);
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
console.log(btnDestroy, btnRender);

// Добавили содержимое "пробел" в div
function updatePage(markup = ' ') {
  navItemEl.innerHTML = markup;
  console.log(markup);
}

//добавляем div
function createMarkup() {
  const markup = [];
  // создаем пустой масив
  let size = 30;
  // переменная габаритов div
  for (let i = 0; i < inputVar.value; i += 1) {
    markup.push(
      `<div class="item" style="width:${size}px; height:${size}px; background-color: ${createColor()}"></div>`
    );
    // добавление div по результатам введенного числа
    size += 10;
    // увеличение последующего div на size с учетом прошлого результата
  }
  updatePage(markup.join(''));
}
//функция выбора случайных чисел в диапазоне от 0 до 255
function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(createRandomNumber(0, 255));
// console.log(createRandomNumber(0, 255));
// console.log(createRandomNumber(0, 255));

// фукция выбора значений цвета РБГ значения из функции выбора случайных чисел
function createColor() {
  const r = createRandomNumber(0, 255);
  const g = createRandomNumber(0, 255);
  const b = createRandomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

//подключение слушателя на кнопки
btnRender.addEventListener('click', createMarkup);
btnDestroy.addEventListener('click', () => {
  updatePage();
});
