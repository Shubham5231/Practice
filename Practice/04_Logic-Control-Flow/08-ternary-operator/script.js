const age = 10;

//Using if statement

if (age >= 18) {
  console.log('You can Drive!');
} else {
  console.log('You can not Drive!');
}

// Using ternary operator

age >= 18 ? console.log('You can Drive') : console.log('You can not Drive..!');

//Assigning a conditional value to  a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'can Drive' : 'cant Drive';

console.log(canVote);
console.log(canVote2);

// Multiple Statement using if statement

const auth = true;

// here we use if statement
// let redirect;

// if (auth) {
//   alert('Welcome to Dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('access Denied');
//   redirect = '/login';
// }

// here we use ternary operator
const redirect = auth
  ? (alert('Welcome to the Dashborad'), '/dashboard')
  : (alert('Acess Denied'), '/login');

console.log(redirect);
