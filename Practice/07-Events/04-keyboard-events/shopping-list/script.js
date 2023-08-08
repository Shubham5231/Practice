const itemInput = document.getElementById('item-input');

const onkeyPress = (e) => {
  console.log('KeyPress');
};
const onkeyUp = (e) => {
  console.log('KeyUp');
};

const onKeyDown = (e) => {
  //   console.log('KeyDown');
  // key
  // if (e.key === 'Enter') {
  //   alert('You Press Enter');
  // }

  // keyCode - it gives code of key whichever we press
  // if (e.keyCode === 13) {
  //   alert('You press enter');
  // }

  // Code - it provides name of whichever we press the key
  // console.log(e.code);
  if (e.code == 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('you are holding down ' + e.key);
  }
  // console.log('Shift: ' + e.shiftKey); // it will retrun if we press the shift or not in boolean format
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);
};
// itemInput.addEventListener('keypress', onkeyPress); // When u enter any key from keyboard it will consloe msg
// itemInput.addEventListener('keyup', onkeyUp); // when u enter any key and hold for second then it will show console msg
itemInput.addEventListener('keydown', onKeyDown); // when u enter any key from keyboard and hold it, it will count the how many time u press the key
