function createCounter() {
  let count = 0;
  return function func() {
    count++;
    console.log(count);
  };
}

function reset() {
  let count = 0;
  return function liner() {
    count;
    console.log(count);
  };
}

const counter = createCounter();
const resets = reset();
counter();
counter();
counter();
resets();
