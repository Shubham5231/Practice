// Default Params - is a way to set default values for function parameters a value is no passed in ie.undefined

function add(numArray = []) {
  let total = 0;
  numArray.forEach((e) => (total += e));
  console.log(total);
}
add();
