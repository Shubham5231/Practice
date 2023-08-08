// stopPropagation - we used if we have multiple handlers on a single event and you want to stop the event for all of them then we use

const button = document.querySelector('form button');
const Div = document.querySelector('form div:nth-child(2)');

const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was click');
  e.stopPropagation();
});

Div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('body was clicked');
});
