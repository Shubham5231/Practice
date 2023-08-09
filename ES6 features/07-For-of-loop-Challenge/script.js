let incomes = [62000, 67000, 75000];

for (let income of incomes) {
  income += 5000;
}
console.log(incomes);

//  not changing the values of array bcoz its designed for iterate over iterables not actually used to set up new values
