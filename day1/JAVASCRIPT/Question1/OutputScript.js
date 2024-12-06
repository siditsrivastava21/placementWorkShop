arr = ["10", "20", "30"];
n = arr.length;
var sums = 0;
for (i = 0; i < n; i++) {
  sums = sums + Number(arr[i]);
}

console.log(sums);

console.log(typeof sums);
