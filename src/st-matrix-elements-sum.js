import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  function checkZero (checkArray) {
    for (let i = 0; i < checkArray.length; i++) {
      if ( arr.indexOf(i) === -1 ) result += checkArray[i];
      if (checkArray[i] === 0) arr.push(i);
    }
  }

  let arr = [];
  let result = 0;

  matrix.forEach(elm => checkZero(elm));

  return result;
}
