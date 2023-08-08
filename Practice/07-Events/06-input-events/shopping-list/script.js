const itemInput = document.getElementById('item-input');
const priortyInput = document.getElementById('priority-input');
const chekbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onCheck(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not checked';
}

function onFocus(e) {
  // when click inside the input it will retrun "input focused"
  console.log('input is Focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}
function onBlur(e) {
  // when click outside of the input it will return "input is Blur"
  console.log('input is Blur');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priortyInput.addEventListener('change', onInput);
chekbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
