const Div = document.querySelector('div');

Div.className = 'my-element';
Div.id = 'my-element';
Div.setAttribute('title', 'my-elements');
// Div.innerHTML = 'Hello Shubham';

const text = document.createTextNode('Hello World');

Div.appendChild(text);

// console.log(Div);
