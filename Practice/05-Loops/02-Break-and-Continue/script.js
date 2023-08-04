// Break - does is it allow us to do just that break out of the loop

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Breaking...13');
    break;
  }
  console.log(i);
}

// Continue -  Using continue you can skip the rest of the code in a current iteration and continue to the next interation

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping...13');
    continue;
  }
  console.log(i);
}
