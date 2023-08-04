// foreach - forEach() method excutes a provided function once for each array element.

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

console.log(socials.__proto__);

socials.forEach(function (item) {
  // Using callback function
  console.log(item);
});

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`)); // Using arrow function

//  Using named function

function logSocials(social, index) {
  console.log(`${index} - ${social}`);
}
socials.forEach(logSocials);

//Working with object

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://LinkedIn.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
