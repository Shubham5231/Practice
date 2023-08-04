// instructions :

// Print the numbers from 1 to 100
// For Multiple of three print "Fizz" instead of the Numbers
// For multiple of five print "Buzz"
// For numbers which are multiple of both three and five print "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
