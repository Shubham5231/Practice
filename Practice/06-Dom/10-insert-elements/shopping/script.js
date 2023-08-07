// insertAdjacentElement example - the use of this method is add content onto the page throgh the js.

function insertElement() {
  const filter = document.querySelector('.filter');

  const h2 = document.createElement('h2');

  h2.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h2);
}

// insertAdjacentText example - use this method is add text onto the page throgh out js.

function insertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML  example - use this method to add html tag onto the page throgh out js.

function insertHTMl() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('beforebegin', '<h2>InsertAdjacentHTML</h2>');
}

// insertBefore Example -

function insertBefore() {
  const ul = document.querySelector('ul');

  const li = document.querySelector('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

// insertElement();
// insertText();
// insertHTMl();
insertBefore();
