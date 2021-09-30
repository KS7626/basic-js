import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = String(n);
  let arr;
  let arr2 = [];

  for (let i = 0; i < str.length; i++) {
    arr = str.split('');
    arr[i] = '';
    arr2.push( +arr.join('') );
  }
  return arr2.sort((a, b) => b - a)[0];
}
