// Falsy Vales :
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - nudefind
// - NaN

// Truthy Values :
// - Everything else that is not falsy.
// - true
// - '0' (0 in a string)
// - ' ' (space in string)
// - 'false' (false in string)
// - []  (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('this is flasy');
}
console.log(Boolean(x));

// Truthy and falsy cavents (covert)

const childern = 0; // 0 is falsy value so if you assign a value 0 the output will show else part. so avoid this type of error we need to convert our falsy value to truthy value so here we use !isNaN (it means it tell the browser 0 is value)
if (!isNaN(childern)) {
  console.log(`You have ${childern} childern`);
} else {
  console.log(`Please enter number of childern`);
}

// Chekcing for empty arrays

const posts = ['Post one'];

if (posts.length > 0) {
  console.log('list Posts');
} else {
  console.log('No posts to list');
}

//Checking for empty objects

const user = {
  name: 'shubham',
};

if (Object.keys(user) > 0) {
  console.log('list user');
} else {
  console.log('No user');
}

// Loose Equality (==)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
