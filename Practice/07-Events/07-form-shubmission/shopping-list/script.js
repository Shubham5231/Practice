const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const priorty = document.getElementById('priority-input').value;

  // validation
  if (item === ' ' || priorty === '0') {
    alert('Please fill in all fields');
    return;
  }

  // console.log(item, priorty);
}
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  // const item = formData.get('item');
  // const priority = formData.get('priority');

  const entries = formData.entries();
  // console.log(entries);

  for (let entry of entries) {
    console.log(entry[0]);
  }
  // console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);