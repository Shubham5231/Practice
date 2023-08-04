const numbers = [1, 2, 3, 4, 5, 6];

const doubleNum = numbers.map((number) => number * 2);
console.log(doubleNum);

// Same with forEach

// const doubleNum1 = [];
// numbers.forEach((number) => {
//   doubleNum1.push(number * 2);
// });
// console.log(doubleNum1);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company name

const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// crate an array with company and category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// console.log(companyInfo);

//  create an array of objects with the name and the length of each  company in years

const componyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

// console.log(componyYears);

// chain map methods

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

// console.log(squareAndDouble);

// Chaining different methods

const evenDouble = numbers
  .filter((number) => number % 2 == 0)
  .map((number) => number * 2);
console.log(evenDouble);
