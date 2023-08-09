const exampleSet = new Set([1, 2, 3, 4, 5, 5, 6, 6, 7]);

exampleSet.add(10);
console.log(exampleSet.delete(5));
console.log(exampleSet.has(5));
exampleSet.clear();

console.log(exampleSet);
