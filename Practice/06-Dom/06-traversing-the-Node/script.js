let output;
const Parent = document.querySelector('.parent');

output = Parent.childNodes;
output = Parent.childNodes[0].textContent;
output = Parent.childNodes[0].nodeName;
output = Parent.childNodes[3].innerHTML;
output = Parent.childNodes[3].outerHTML;
output = Parent.childNodes[3].innerHTML = 'Child One';
output = Parent.childNodes[5].style.color = 'Red';

output = Parent.firstChild;
output = Parent.lastChild;

Parent.lastChild.textContent = 'Hello';

// Parent Node

const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Sibling
const secondItem = document.querySelector('.child:nth-child(2');

output = secondItem.previousSibling;

console.log(output);
