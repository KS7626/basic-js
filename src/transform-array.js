import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);

  let arrNew = [];

  arr.forEach((item, i) => {
    if (item === '--discard-next' || item === '--discard-prev' || item === '--double-next' || item === '--double-prev') return;
    if (i - 1 >= 0 && arr[i - 1] === '--discard-next') return;

    if (i - 1 >= 0 && arr[i - 1] === '--double-next') arrNew.push(item);

    if (i + 1 < arr.length && arr[i + 1] === '--discard-prev') return;
    
    arrNew.push(item);
    
    if (i + 1 < arr.length && arr[i + 1] === '--double-prev') arrNew.push(item);
  });

  return arrNew;
}
