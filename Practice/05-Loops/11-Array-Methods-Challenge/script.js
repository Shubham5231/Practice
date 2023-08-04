// Challenge one

// const people = [
//   {
//     fistName: 'Shubham',
//     lastName: 'Mahamuni',
//     email: 'Shubham@gamil.com',
//     phone: '111-111-111',
//     age: 30,
//   },
//   {
//     fistName: 'Chinmay',
//     lastName: 'Prabhune',
//     email: 'Chinamy@gamil.com',
//     phone: '222-222-222',
//     age: 25,
//   },
//   {
//     fistName: 'viyank',
//     lastName: 'Kadam',
//     email: 'Vinayk@gamil.com',
//     phone: '333-333-333',
//     age: 40,
//   },
//   {
//     fistName: 'Gaurav',
//     lastName: 'Kulkarni',
//     email: 'GK@gamil.com',
//     phone: '444-444-444',
//     age: 24,
//   },
//   {
//     fistName: 'Aditya',
//     lastName: 'Kulakrni',
//     email: 'AK@gamil.com',
//     phone: '555-555-555',
//     age: 19,
//   },
// ];

// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({
//     name: person.fistName + ' ' + person.lastName,
//     email: person.email,
//   }));
// console.log(youngPeople);

// Challenge Two - Get Sum of Postive Numbers.

const numbers = [2, -30, 50, 20, -12, -9, 7];

const PositiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(PositiveSum);

// Challenge Three - firest Letter Capitalized.

const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(cWords);
