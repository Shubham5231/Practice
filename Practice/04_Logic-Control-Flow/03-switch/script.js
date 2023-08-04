const d = new Date(2022, 1, 10, 8, 0, 0); //Here We Passing Date Manually.
const month = d.getMonth();
const hour = d.getHours();
console.log(month);

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb,March');
}

switch (true) {
  case hour < 12:
    console.log('Good Mroning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good night');
}
