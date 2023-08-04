const d = new Date(); // if u want add your date n time then u can do like Date(10,30,2022,19,0,0)
const hour = d.getHours();
console.log(hour);

if (hour < 12) {
  console.log(`Good Morning`);
} else if (hour < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
}

//Nested If
if (hour < 12) {
  console.log(`Good morning`);
  if (hour === 11) {
    console.log(`Wake Up!`);
  }
} else if (hour < 18) {
  console.log(`Good Afternnon`);
} else {
  console.log(`good Night`);
  if (hour >= 20) {
    console.log(`zzzzzzz`);
  }
}

// Multiple Condition we can give to if statement by suing &&(AND) operatore.
if (hour >= 7 && hour < 15) {
  console.log(`It is Work Time`);
}

//Here we are Use ||(OR) operators
if (hour === 6 || hour === 11) {
  console.log(`Brush your teeth!`);
}
