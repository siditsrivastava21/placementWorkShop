const nums = [10, 20, 30];
const result = nums.map((n) => n).filter((n) => n > 0); // Bug: Improper math operation
console.log(result);
