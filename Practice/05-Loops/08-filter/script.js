const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// short version

// const evenNum = numbers.filter((number) => number % 2 === 0);

// same with forEach

// let evenNum = [];
// numbers.forEach((Number) => {
//   if (Number % 2 === 0) {
//     evenNum.push(Number);
//   }
// });
// console.log(evenNum);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1881, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail Companies

const reatilCompanies = companies.filter(
  (company) => company.category === 'Retail',
);

// console.log(reatilCompanies);

// Get Companies that started in or after 1880  and ended in or before 2005

const eralyCompanies = companies.filter(
  (company) => company.start >= 1880 && company.end <= 2005,
);

// console.log(eralyCompanies);

// Get companies that lasted 10 years or more

const longcompanies = companies.filter(
  (company) => company.end - company.start >= 10,
);

console.log(longcompanies);
