// Using Promises

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}
resolveAfter3Seconds().then((data) => {
  console.log(data);
});

// async and await

async function getAysncData() {
  const result = await resolveAfter3Seconds();
  console.log(result);
}

getAysncData();
