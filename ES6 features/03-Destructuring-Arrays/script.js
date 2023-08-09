// let names = ['Shubham', 'Chinmay', 'Vinayak', 'Aditya'];

let [firtName, middleName, lastName] = [
  'Shubham',
  'Chinmay',
  'vinayak',
  'Aditya',
];
lastName = 'lavi';
console.log(firtName, middleName, lastName);

// Array Destructuring- Defination

//    means storing the value of an array into separate variables.

//  lets take a example of array Destructring

const arr = [10, 20, 30];

const [val1, val2, val3] = arr;

console.log(val1);
//  In this example,we have an Array(arr).we want to store the values of the array into the spearte variables val1,val2,val3. so we used Array Destructuring here. we crated the three variables an then assigned them the values of the Array respectively.
