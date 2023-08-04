let output;

// Get child elements

const Parent = document.querySelector('.parent');

output = Parent.children;

output = Parent.children[1].innerText;
output = Parent.children[1].className;
output = Parent.children[1].nodeName;

Parent.children[1].innerText = 'Child Two';
Parent.children[1].style.color = 'red';

Parent.firstElementChild.innerText = 'child One';
Parent.lastElementChild.innerText = 'child Three';

// Get Parent Element From Child

const Child = document.querySelector('.child');

output = Child.parentElement;
Child.parentElement.style.border = '1px solid #ccc';
Child.parentElement.style.padding = '10px';

// Sibling Elements

const SecondItem = document.querySelector('.child:nth-child(2');
output = SecondItem;
output = SecondItem.nextElementSibling;

SecondItem.nextElementSibling.style.color = 'green';
SecondItem.previousElementSibling.style.color = 'orange';

console.log(output);
