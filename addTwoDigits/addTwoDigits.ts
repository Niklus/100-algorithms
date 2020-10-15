/**
 * Add a Two-Digit Integer
 */

function addTwoDigits(num: number): number {

  const [num1, num2] = num.toString().split('');

  const sum = parseInt(num1) + parseInt(num2);

  return sum;

}

console.log(addTwoDigits(29));