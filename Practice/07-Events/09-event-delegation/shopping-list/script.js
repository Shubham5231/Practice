const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');

listItem.forEach((item) => {
  // adding multiple event listing on single li item
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});

list.addEventListener('click', (e) => {
  // adding single event listing on li items
  if (e.target.tagName === 'Li') {
    e.target.remove();
  }
});
list.addEventListener('mouseover', (e) => {
  // adding single event listing on li items
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
