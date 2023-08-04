//for ([initalExpression]; [conditionExpression]; [incrementExpression]);
//Statement;

//InitalExpression - Initailizes a variable
//ConditionExpression - Condition that the loop will continue to run as long it is met or unti thec odition false.
//IncrementExperession - Expression that will be executed after each interation of the loop. Usually increments the variable.
//statement - Code that will be excuted each time the loop is run.

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my Lucky num');
//   } else {
//     console.log('Number ' + i);
//   }
// }

//Nested Loop

// for (let i = 1; i <= 200; i++) {
//   console.log('Number ' + i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//loop through an array.

const names = ['Cp', 'Vk', 'AK', 'SM'];

for (let i = 0; i < names.length; i++) {
  if (i == 2) {
    console.log(names[i] + ' is best');
  } else {
    console.log(names[i]);
  }
}
