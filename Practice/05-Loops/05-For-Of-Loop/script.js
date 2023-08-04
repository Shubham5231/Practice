//  Loop through arrays
const items = ['Book', 'Table', 'chair', 'kite'];
const users = [
  {
    name: 'Sm',
    age: 24,
  },
  { name: 'CP' },
];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop over strings

const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'SM');
map.set('age', 24);

for (const [key, value] of map) {
  console.log(key, value);
}
