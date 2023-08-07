const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('ul');
  //   itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScipt event Listener - In this method we can give only one eventListener on same event.
// clearBtn.onclick = function () {
//   alert('Clear Item');
// };

// addEventListener() -- In this method we can give muliple eventlisterner on the same event we can use name function as well

// clearBtn.addEventListener('click', () => alert('Clear Items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear0), 2000);
// setTimeout(() => clearBtn.click(), 5000);
