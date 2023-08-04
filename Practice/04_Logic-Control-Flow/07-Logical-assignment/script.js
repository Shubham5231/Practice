// ||= - assigns the right side value only if the left is falsy value.

let a = false;
// if (!a) {
//   a = 10;
// }

// a = a || 10;
a ||= 10;
console.log(a);

// &&= - assign the right side value only if the left is truthy value.

let b = 10;
if (b) {
  b = 20;
}

b = b && 20;
b &&= 20;
console.log(b);

// ??= - addigns the right side value only if the left side is null or undefind

let c = null;

if (c === null || c === undefined) {
  c = 20;
}
c = c ?? 20;
c ??= 20;
console.log(c);
