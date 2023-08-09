if (true) {
  let example = 5;
  console.log(example); // In this case output is 5 bcoz we access the variable inside the if block
}

console.log(example); // output is exapmle is not defined bcoz let is block scope variable if u access out of if block then it will thorw error

// let and const are introdcue in Es6. The both are block scope variables.

// In const means constant if assign a variable with const keyword, you can not reassign value

const example1 = 5;

example1s = 4; // we can not reassign the value bcoz we assign a varble as const

const example3 = []; // Same with array
example = 5;
console.log(example3);

const example2 = {}; // same with object
example2 = 'Shubham';
console.log(example2);
