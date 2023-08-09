// regular function

function add(...nums) {
  let total = nums.reduce(function (x, y) {
    return x + y;
  });
  console.log(total);
}
// Arrow Function

function add(...nums) {
  let total = nums.reduce((x, y) => x + y);
  console.log(total);
}

add(1, 2, 3, 5, 6, 7, 8, 9, 10);

//   arrow functions provide you with an alternative way to write a shorter syntax compared to the regular  function
