/**
 * Are Similar: Two Arrays
 */

function areSimilar(a: number[], b: number[]): boolean {
  const str1 = a.sort((a, b) => a - b).join('');
  const str2 = b.sort((a, b) => a - b).join('');
  return str1 === str2;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
