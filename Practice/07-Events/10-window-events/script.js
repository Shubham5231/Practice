// window.onload = function () {
//   // onload - by using this method we can wi8 for load entire page.
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page Loaded'));
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1',
  ).innerText = `Resized to ${window.innerWidth} X ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled : ${window.scrollX} X ${window.screenY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.backgroundColor = 'white';
    document.body.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
