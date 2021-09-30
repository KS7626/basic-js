import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arr = [];
  let obj = {};
  let i;

  names.forEach(item => {
    i = obj[item] || 0;

    if (i === 0) {
      arr.push(item);
      obj[item] = 1;
    } else {
      arr.push(`${item}(${i})`);
      obj[`${item}(${i})`] = 1;
      obj[item]++;
    }
  });

  console.log(arr);
  console.log(obj);
  
  return arr;
}
