function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];
  ul.removeChild(li);
}

function removeItem3(itemNum) {
  const li = document.querySelectorAll('li');
  li[itemNum - 1].remove();
}

const removeItem4 = (itemNum) =>
  document.querySelectorAll('li')[itemNum - 1].remove();
removeClearButton();
removeItem4(1);
// removeFirstItem();
