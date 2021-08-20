const input = document.querySelector('#validation-input');

function updateClass(addClass, removeClass) {
  input.classList.add(addClass);
  input.classList.remove(removeClass);
}

function onInputValidate(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    updateClass('valid', 'invalid');

    return;
  }
  updateClass('invalid', 'valid');
}
input.addEventListener('blur', onInputValidate);
