const logo = document.querySelector('img');

function onClick(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   e.target.style.backgroundColor = 'black';
  //   console.log(e.timeStamp);
  //   console.log(e.clientX);
  //   console.log(e.offsetY);
  //   console.log(e.offsetX);
  //   console.log(e.pageX);
  //   console.log(e.pageY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}
logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

/*
- `Target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attched to (these are the same in this case)
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` -   The X position of the mouse click reletive to the window
- `clientY` -   The Y position of the mouse click reletive to the window
- `offsetX` -   The X position of the mouse click reletive to the element
- `offsetY` -   The Y position of the mouse click reletive to the element
- `pageX` -     The X position of the mouse click reletive to the page
- `pageY` -     The Y position of the mouse click reletive to the page
- `screenX` -     The X position of the mouse click reletive to the screen
- `screenY` -     The Y position of the mouse click reletive to the screen

 */
