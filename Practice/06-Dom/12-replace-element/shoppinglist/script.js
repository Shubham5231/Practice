function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replace First';

  firstItem.replaceWith(li);
}

function replaceSecondtItem() {
  const secondItem = document.querySelector('li:nth-child(2');
  secondItem.outerHTML = '<li>Replace Second</li>';
}

function replaceAll() {
  const lis = document.querySelectorAll('li');

  //   lis.forEach((item, index) => {
  //     // item.outerHTML = '<li>Replace All </li>';
  //     if (index === 1) {
  //       item.innerText = 'Second Item';
  //     } else {
  //       item.innerHTML = 'Replace All';
  //     }
  //   });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>'),
  );
}
function replaceChildHeading() {
  const header = document.querySelector('header');

  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');

  h2.id = 'app-title';
  h2.textContent = 'Shopping List';

  header.replaceChild(h2, h1);
}
replaceFirstItem();
replaceSecondtItem();
replaceAll();
replaceChildHeading();
