arr = [1, 2, 3, 4, 5];
var sums = 0;
const res = arr.filter((n) => (s = n % 2 == 0)).map((n) => (sums = sums + n * 2));

console.log(res);
