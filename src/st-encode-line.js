import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  str = str.trim();
  if (str.length < 1) return '';

  let lastLetter = '';
  let countLetter = 0;
  let result = '';

  for (let i = 0; i < str.length; i++){
    if (str[i] === lastLetter) {
      countLetter++;
    } else {
      result += (countLetter > 1)? String(countLetter) + lastLetter : lastLetter;

      lastLetter = str[i];
      countLetter = 1;
    }
  }
  result += (countLetter > 1)? String(countLetter) + lastLetter : lastLetter;

  return result;
}
