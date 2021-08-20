const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const navItemEl = document.querySelector('ul#ingredients');
console.log(navItemEl);
const markup = ingredients.map(item => {
  let li = document.createElement('li');
  li.textContent = item;
  return li;
});
console.log(markup);
navItemEl.append(...markup);
