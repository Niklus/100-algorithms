/**
 * ADDITION
 */

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(3, 2));

function add2(...nums: number[]) {
  let total = 0;
  nums.forEach(num => total += num);
  return total;
}

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));