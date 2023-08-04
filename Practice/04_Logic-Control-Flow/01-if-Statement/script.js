if (true) {
  console.log("This is true");
}

if (false) {
  console.log("this is false");
}

const x = 10;
const y = 50;
if (x > 7) {
  console.log(`${x} is greater than ${y}`);
}
if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

//if statement is blok scope lets take exapmle on it

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

//console.log(`${z} is 20`); // if we access a z variavle out of the if block we get error as a ReffernceError : z is not defined so if statment is block scope. suppose we decalre z vairable with var keyword then could not get error bcoz var is function scope.

//shorthand If
if (x >= y) console.log(`${x} is greter than or equal to ${y}`);
else console.log(`This is False`);
