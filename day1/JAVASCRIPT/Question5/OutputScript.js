function func() {
  const factorial = (n) => {
    if (n < 0) {
      return "Invalif Number";
    }
    if (n === 1 || n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  return factorial;
}

const res = func();

console.log(res(5));
