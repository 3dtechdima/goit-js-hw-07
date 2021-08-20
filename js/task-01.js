const navItemEl = document.querySelectorAll('.item');
console.log(navItemEl);
const newNavItemEl = [...navItemEl];
console.log(`В списке ${newNavItemEl.length} категории.`);
newNavItemEl.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector('ul').children.length}`
  );
});
